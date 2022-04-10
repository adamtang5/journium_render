import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, useParams } from "react-router-dom";
import * as sessionActions from '../../../store/session';
import * as userActions from '../../../store/user';
import * as storyActions from '../../../store/story';
import JourniumLogo from "../../atomic/JourniumLogo";
import ProfileButton from "../../ProfileButton";
import EditStoryFormImageUrlError from './Errors/EditStoryFormImageUrlError';
import RenderImage from "../../RenderImage";
import EditStoryFormVideoUrlError from './Errors/EditStoryFormVideoUrlError';
import './EditStoryForm.css';

const EditStoryForm = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const currentUser = useSelector(state => state.user.users[sessionUser.id]);
    const story = useSelector(state => state.story.stories[+id]);

    const [updateDisabled, setUpdateDisabled] = useState(true);

    // slice-of-state variables for controlled inputs
    const [title, setTitle] = useState(story.title);
    const [content, setContent] = useState(story.content);
    const [imageUrl, setImageUrl] = useState(story.imageUrl);
    const [videoUrl, setVideoUrl] = useState(story.videoUrl);

    // slice of state for final validation when clicking update button
    const [showImageUrlInput, setShowImageUrlInput] = useState(true);
    const [showRenderImage, setShowRenderImage] = useState(false);
    const [errors, setErrors] = useState([]);


    // onBlur error pre-validation
    const [imageUrlInvalid, setImageUrlInvalid] = useState(false);
    const [videoUrlInvalid, setVideoUrlInvalid] = useState(false);

    const urlRe = new RegExp("((http|https)://)(www.)?" +
        "[a-zA-Z0-9@:%._\\+~# ?&//=]{2,256}\\.[a-z]" +
        "{2,6}\\b([-a-zA-Z0-9@:%._\\+~# ?&//=]*)");

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
        if (!imageUrlInvalid && !videoUrlInvalid) {
            setUpdateDisabled(!(
                title.length > 0 &&
                content.length > 0
            ));
        } else {
            setUpdateDisabled(true);
        }
    }, [title, content, imageUrlInvalid, videoUrlInvalid]);

    // onBlur pre-validations
    const validateImageUrl = e => {
        setImageUrlInvalid(!urlRe.test(e.target.value) && !!e.target.value);
        if (!imageUrlInvalid && !!e.target.value) {
            setShowImageUrlInput(false);
            setShowRenderImage(true);
        }
    };

    const toggleRenderImage = e => {
        setShowRenderImage(false);
        setShowImageUrlInput(true);
    };

    const validateVideoUrl = e => {
        setVideoUrlInvalid(!urlRe.test(e.target.value) && !!e.target.value);
    };

    const handleUpdate = e => {
        e.preventDefault();
        setErrors([]);
        dispatch(storyActions.editStory({
            id: +id,
            userId: sessionUser.id,
            title,
            content,
            imageUrl,
            videoUrl,
        }))
            .then(() => history.push(`/stories/${id}`));
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
                    <label className="new-story-form-element">
                        <input
                            id="imageUrl"
                            className={`${(showImageUrlInput) ? "" : "hidden"}`}
                            type="text"
                            value={imageUrl}
                            onChange={e => setImageUrl(e.target.value)}
                            onBlur={validateImageUrl}
                            placeholder="Insert image URL"
                        />
                        <EditStoryFormImageUrlError
                            imageUrlInvalid={imageUrlInvalid}
                        />
                        <RenderImage
                            visible={showRenderImage}
                            imageUrl={imageUrl}
                            onClick={toggleRenderImage}
                        />
                    </label>
                    <label className="new-story-form-element">
                        <textarea
                            id="content"
                            value={content}
                            onChange={e => setContent(e.target.value)}
                            placeholder="Tell your story..."
                            rows="15"
                            required
                        />
                    </label>
                    <label className="new-story-form-element">
                        <input
                            id="videoUrl"
                            type="text"
                            value={videoUrl}
                            onChange={e => setVideoUrl(e.target.value)}
                            onBlur={validateVideoUrl}
                            placeholder="Insert video URL"
                        />
                        <EditStoryFormVideoUrlError
                            videoUrlInvalid={videoUrlInvalid}
                        />
                    </label>
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
