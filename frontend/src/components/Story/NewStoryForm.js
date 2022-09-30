import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import * as userActions from '../../store/user';
import * as storyActions from '../../store/story';
import * as awsActions from '../../store/aws';
import JourniumLogo from "../utils/JourniumLogo";
import ProfileButton from "../ProfileButton";
import NewStoryFormImageUrlError from './Errors/NewStoryFormImageUrlError';
import RenderImage from "./RenderImage";
import NewStoryFormVideoUrlError from './Errors/NewStoryFormVideoUrlError';
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
    const [imageUrl, setImageUrl] = useState('');
    const [videoUrl, setVideoUrl] = useState('');

    // slice of state for final validation when clicking publish button
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
        dispatch(userActions.fetchUser(sessionUser.id));
    }, [dispatch]);

    useEffect(() => {
        dispatch(storyActions.fetchStories());
    }, [dispatch]);

    // publish button is disabled until basic validation is done
    useEffect(() => {
        if (!imageUrlInvalid && !videoUrlInvalid) {
            setPublishDisabled(!(
                title.length > 2 &&
                !hasNoText(content)
            ));
        } else {
            setPublishDisabled(true);
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

    const handleInsertImage = url => {
        if (!imageUrl) setImageUrl(url);
    };

    const handlePublish = e => {
        e.preventDefault();
        setErrors([]);
        dispatch(storyActions.createStory({
            userId: sessionUser.id,
            title,
            content,
            imageUrl,
            videoUrl,
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
                        // disabled={publishDisabled}
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
                    {/* <label className="new-story-form-element">
                        <input
                            id="imageUrl"
                            className={`${(showImageUrlInput) ? "" : "hidden"}`}
                            type="text"
                            value={imageUrl}
                            onChange={e => setImageUrl(e.target.value)}
                            onBlur={validateImageUrl}
                            placeholder="Insert image URL"
                            title="Click away to preview image"
                        />
                        <NewStoryFormImageUrlError
                            imageUrlInvalid={imageUrlInvalid}
                        />
                        <RenderImage
                            visible={showRenderImage}
                            imageUrl={imageUrl}
                            onClick={toggleRenderImage}
                        />
                    </label> */}
                    <div className="new-story-form-element">
                        <QuillAdd
                            placeholder={"Tell your story..."}
                            setData={setContent}
                            handleInsertImage={handleInsertImage}
                            elementId={"new-story-content-editor"}
                            snowToolbarId="new-story-content-snow-toolbar"
                            bubbleToolbarId="new-story-content-bubble-toolbar"
                        />
                    </div>
                    {/* <label className="new-story-form-element">
                        <input
                            id="videoUrl"
                            type="text"
                            value={videoUrl}
                            onChange={e => setVideoUrl(e.target.value)}
                            onBlur={validateVideoUrl}
                            placeholder="Insert video URL"
                        />
                        <NewStoryFormVideoUrlError
                            videoUrlInvalid={videoUrlInvalid}
                        />
                    </label> */}
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
