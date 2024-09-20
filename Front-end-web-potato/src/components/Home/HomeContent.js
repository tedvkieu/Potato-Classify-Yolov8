import { FaUser } from 'react-icons/fa';
import { FcPlus } from 'react-icons/fc';

const HomeContent = (props) => {
    const { previewImg, handleSubmit, handleUploadImage } = props;

    return (
        <div className ="home-content">
            <div className="preview-image-potato">
                <img
                    className="potato-preview"
                    src="https://cdn.pixabay.com/photo/2018/09/20/11/39/potatoes-3690562_640.jpg"
                />
                <img
                    className="potato-preview"
                    src="https://cdn.pixabay.com/photo/2017/08/17/19/40/ukrainian-dill-potatoes-2652561_1280.jpg"
                />
                <img
                    className="potato-preview"
                    src="https://cdn.pixabay.com/photo/2017/08/18/08/05/agriculture-2654157_1280.jpg"
                />
                <img
                    className="potato-preview"
                    src="https://cdn.pixabay.com/photo/2017/03/19/18/10/baked-potatoes-2157201_1280.jpg"
                />
                <img
                    className="potato-preview"
                    src="https://cdn.pixabay.com/photo/2017/07/27/01/09/potatoes-2543686_1280.jpg"
                />
            </div>

            <div className="upload-img">
                <div className="info-text">
                    <h3 className="title">
                        Potato detection Computer Vision Project
                    </h3>
                    <a
                        href="/vegetable-quality-detection"
                        target="_blank"
                        className="flex gap-2 items-center text-sm flex-shrink-0">
                        <FaUser />
                        Vegetable Quality Detection
                    </a>
                </div>

                <div className="main-content">
                    <div className="upload-left">
                        <div className="col-md-12">
                            <label
                                className="form-label label-upload"
                                htmlFor="labelUpload">
                                <FcPlus />
                                Upload File Images
                            </label>
                            <input
                                id="labelUpload"
                                type="file"
                                multiple
                                hidden
                                onChange={(event) => {
                                    handleUploadImage(event);
                                }}
                            />
                        </div>
                        <div className="img-preview">
                            {previewImg && previewImg.length > 0 ? (
                                previewImg.map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        alt={`Preview ${index}`}
                                    />
                                    
                                ))
                                
                            ) : (
                                <span>Preview Images</span>
                            )}
                        </div>
                        {
                            <button
                                onClick={handleSubmit}
                                className="btn btn-primary mx-3">
                                Submit
                            </button>
                        }
                    </div>

                    <div className="upload-right">
                        <div className="tile">hi</div>
                        <div className="blank">hi</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeContent;
