const Gallery = ({images}) => {
    return (
        <div>
            <h2>Your Screenshot Gallery</h2>
            <div className="image-container">
                {
                    images && images.length > 0 ?(""):(<div>
                        <h3>You haven't made a screenshot yet!</h3>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Gallery;