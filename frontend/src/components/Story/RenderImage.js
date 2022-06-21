const RenderImage = ({ visible, imageUrl, onClick }) => {
    if (!visible) return null;
    return (
        <div className="render-image flex-row" onClick={onClick} >
            <img src={imageUrl} alt="rendered" title="Click image to change URL" />
        </div>
    )
};

export default RenderImage;
