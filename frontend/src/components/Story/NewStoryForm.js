import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import * as userActions from '../../store/user';
import * as storyActions from '../../store/story';
import * as awsActions from '../../store/aws';
import JourniumLogo from "../utils/JourniumLogo";
import ProfileButton from "../ProfileButton";
import './NewStoryForm.css';
import QuillAdd from '../Quill/QuillAdd';
import { hasNoText } from "../utils/JSSoup";

const NewStoryForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const currentUser = useSelector(state => state.users[sessionUser.id]);

    const [publishDisabled, setPublishDisabled] = useState(true);

    // slice-of-state variables for controlled inputs
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        dispatch(userActions.fetchUser(sessionUser.id));
    }, [dispatch]);

    useEffect(() => {
        dispatch(storyActions.fetchStories());
    }, [dispatch]);

    // publish button is disabled until basic validation is done
    useEffect(() => {
        setPublishDisabled(!(
            title.trim().length > 2 &&
            !hasNoText(content)
        ));
    }, [title, content]);

    // onBlur pre-validations
    const handlePublish = e => {
        e.preventDefault();
        setErrors([]);
        dispatch(storyActions.createStory({
            userId: sessionUser.id,
            title,
            content,
        }))
            .then((data) => history.push(`/stories/${data.id}`));
        dispatch(awsActions.clearFiles());
    };

    const handleCancel = e => {
        e.preventDefault();
        dispatch(awsActions.clearFiles());
        history.push(`/`);
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
                        className="publish"
                        disabled={publishDisabled}
                        onClick={handlePublish}
                    >
                        Publish
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
                        <QuillAdd
                            placeholder={"Tell your story..."}
                            setData={setContent}
                            elementId={"new-story-content-editor"}
                            snowToolbarId="new-story-content-snow-toolbar"
                            bubbleToolbarId="new-story-content-bubble-toolbar"
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

export default NewStoryForm;
