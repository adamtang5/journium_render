import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as storyActions from '../../store/story';
import './DeleteStoryForm.css';

const DeleteStoryForm = ({ story, setShowDeleteModal }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleDelete = e => {
        e.preventDefault();
        setShowDeleteModal(false);
        dispatch(storyActions.deleteStory(story.id))
            .then(() => history.push('/'));
    };

    return (
        <div className="delete-story-modal flex-column">
            <h1 className="delete-story-form">Delete story</h1>
            <p className="delete-form-text">Are you sure you want to delete this story?</p>
            <div className="actions flex-row">
                <button
                    className="cancel"
                    onClick={() => setShowDeleteModal(false)}
                >Cancel</button>
                <button
                    className="delete"
                    onClick={handleDelete}
                >Delete</button>
            </div>
        </div>
    )
};

export default DeleteStoryForm;
