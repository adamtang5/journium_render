const ResourceDate = ({ resource }) => {
    return (
        <div className="date">{new Date(resource.createdAt).toString().slice(4, 10)}</div>
    )
};

export default ResourceDate;
