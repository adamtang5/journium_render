const RenderImage = ({ visible, imageUrl, onClick }) => {
    if (!visible) return null;
    return (
        <div className="render-image flex-row" onClick={onClick} >
            <img src={imageUrl} alt="rendered" />
        </div>
    )
};

export default RenderImage;
