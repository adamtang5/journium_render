const RenderImage = ({ visible, imageUrl, onClick }) => {
    if (!visible) return null;
    return (
        <div className="render-image flex-row" onClick={onClick} >
            <img src={imageUrl} alt="render image" />
        </div>
    )
};

export default RenderImage;
