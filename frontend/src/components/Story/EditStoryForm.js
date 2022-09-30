import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, useParams } from "react-router-dom";
import * as sessionActions from '../../store/session';
import * as userActions from '../../store/user';
import * as storyActions from '../../store/story';
import * as awsActions from '../../store/aws';
import JourniumLogo from "../utils/JourniumLogo";
import ProfileButton from "../ProfileButton";
import './EditStoryForm.css';
import QuillEdit from "../Quill/QuillEdit";
import { hasNoText } from "../utils/JSSoup";

const EditStoryForm = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const currentUser = useSelector(state => state.users[sessionUser.id]);
    const story = useSelector(state => state.stories[+id]);

    const [updateDisabled, setUpdateDisabled] = useState(true);

    // slice-of-state variables for controlled inputs
    const [title, setTitle] = useState(story.title);
    const [content, setContent] = useState(story.content);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        dispatch(sessionActions.restoreUser())
            .then((user) => {
                if (user) {
                    dispatch(userActions.fetchUser(sessionUser.id));
                }
            })
            .then(() => dispatch(storyActions.fetchStories()));
    }, [dispatch]);

    // update button is disabled until basic validation is done
    useEffect(() => {
        setUpdateDisabled(!(
            title.trim().length > 2 &&
            !hasNoText(content)
        ));
    }, [title, content]);

    // onBlur pre-validations
    const handleUpdate = e => {
        e.preventDefault();
        setErrors([]);
        dispatch(storyActions.editStory({
            id: +id,
            userId: sessionUser.id,
            title,
            content,
        }))
            .then(() => history.push(`/stories/${id}`));
        dispatch(awsActions.clearFiles());
    };

    const handleCancel = e => {
        e.preventDefault();
        dispatch(awsActions.clearFiles());
        history.push(`/stories/${story.id}`);
    };

    return (
        <div id="page-container">
            <div id="writer-top-nav" className="flex-row">
                <div id="writer-top-left" className="flex-row">
                    <NavLink to="/">
                        <JourniumLogo />
                    </NavLink>
                    <span>Drafting</span>
                </div>
                <div id="writer-top-right" className="flex-row">
                    <button
                        className="update"
                        disabled={updateDisabled}
                        onClick={handleUpdate}
                    >
                        Update
                    </button>
                    <button
                        className="cancel"
                        onClick={handleCancel}
                    >
                        Cancel
                    </button>
                    {currentUser && (
                        <>
                            <ProfileButton user={currentUser} />
                        </>
                    )}
                </div>
            </div>
            <div id="new-story-form" className="centered">
                <form className="stacked-form">
                    <label className="new-story-form-element">
                        <input
                            id="title"
                            type="text"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            placeholder="Title"
                            required
                        />
                    </label>
                    <div className="new-story-form-element">
                        <QuillEdit
                            placeholder={"Edit your story..."}
                            setData={setContent}
                            elementId={`story-${story?.id}-content-editor`}
                            snowToolbarId={`story-${story?.id}-content-snow-toolbar`}
                            bubbleToolbarId={`story-${story?.id}-content-bubble-toolbar`}
                            initialHtml={content}
                        />
                    </div>
                    {errors.length > 0 && (
                        <ul className='errors'>
                            {errors.map((error, i) => <li key={i} className="error-text">{error}</li>)}
                        </ul>
                    )}
                </form>
            </div>
        </div>
    )
};

export default EditStoryForm;
