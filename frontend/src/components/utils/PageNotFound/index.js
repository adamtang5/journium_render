import './PageNotFound.css';

const PageNotFound = () => {
    return (
        <div className="page-404 flex-column">
            <div className="error-header">Error</div>
            <div className="error-code">404</div>
            <div className="error-message">Sorry, the page could not be found.</div>
        </div>
    )
};

export default PageNotFound;
