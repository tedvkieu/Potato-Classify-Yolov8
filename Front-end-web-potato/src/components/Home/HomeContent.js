import { FaUser } from 'react-icons/fa';
import { FcPlus } from 'react-icons/fc';

const HomeContent = (props) => {
    const { previewImg, handleSubmit, handleUploadImage } = props;

    return (
        <div className="home-content">
            <div className="preview-image-potato">
                <img
                    className="potato-preview"
                    src="https://t4.ftcdn.net/jpg/05/99/86/89/360_F_599868906_52fGCZahH8BKeqkQqy8C56vRSfhxnuvF.jpg"
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
                    src="https://static.vecteezy.com/system/resources/previews/009/551/321/non_2x/leaf-of-potatoes-photo.jpg"
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
                                <span className="text-up pl-2">
                                    Upload File Images
                                </span>
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
                                className="btn btn-outline-success mx-3">
                                Detect
                            </button>
                        }
                    </div>

                    <div className="upload-right">
                        <div className="tile">
                            Đinh Hồng Anh
                            <img
                                className="star-yl"
                                src="https://cdn-icons-png.flaticon.com/512/276/276020.png"
                            />
                        </div>

                        <div className="tile">
                            Dương Văn Kiểu
                            <img
                                className="star-yl"
                                src="https://cdn-icons-png.flaticon.com/512/276/276020.png"
                            />
                            <img
                                className="star-yl"
                                src="https://cdn-icons-png.flaticon.com/512/276/276020.png"
                            />
                            <img
                                className="star-yl"
                                src="https://cdn-icons-png.flaticon.com/512/276/276020.png"
                            />
                            <img
                                className="star-yl"
                                src="https://cdn-icons-png.flaticon.com/512/276/276020.png"
                            />
                            <img
                                className="star-yl"
                                src="https://cdn-icons-png.flaticon.com/512/276/276020.png"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeContent;
