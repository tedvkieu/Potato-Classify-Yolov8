import videoHomePage from '../../assets/video-homepage.mp4';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FcPlus } from 'react-icons/fc';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaUser } from 'react-icons/fa';
import MenuBar from '../Menu/MenuBar';
import { Button, Modal } from 'react-bootstrap';
import { submitImageClassify } from '../../services/apiServices';

const HomePage = (props) => {
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
    const navigate = useNavigate();
    const [image, setImage] = useState([]);
    const [previewImg, setPreviewImg] = useState([]);
    const [previewImgDetect, setPreviewImgDetect] = useState([]);
    const [show, setShow] = useState(false);
    const [responseInfo, setResponseInfo] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleUploadImage = (event) => {
        if (event.target.files && event.target.files.length > 0) {
            const selectedFiles = Array.from(event.target.files);
            const previewUrls = selectedFiles.map((file) =>
                URL.createObjectURL(file)
            );
            setPreviewImg(previewUrls); // Store the array of image URLs for preview
            setImage(selectedFiles); // Store the array of file objects
            console.log(selectedFiles); // Log the array of files
        } else {
            setPreviewImg([]); // Clear previews if no files selected
        }
    };
    const handleSubmit = async () => {
        setShow(true);
        try {
            const response = await submitImageClassify(image);

            console.log('res: ', response);

            // Kiểm tra phản hồi API
            if (response.success) {
                //alert('Upload successful!');
                setResponseInfo(response); // Cập nhật state với dữ liệu phản hồi
                setPreviewImgDetect(response.files);
            } else {
                alert('Upload failed');
            }
        } catch (error) {
            console.error('Error uploading images:', error);
            alert('An error occurred during the upload');
        }
    };
    // useEffect(() => {
    //     console.log('src img: ', image);
    // }, []);

    return (
        <div className="container homepage-container">
            <div className="homepage-content">
                <div className="sl-left">
                    <MenuBar />
                </div>
                <div className="sl-center">
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
                                        className="btn btn-primary">
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

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Images Detected</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="img-preview-detect">
                                {previewImgDetect &&
                                previewImgDetect.length > 0 ? (
                                    previewImgDetect.map((img, index) => (
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
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            {/* <Button variant="primary" onClick={handleClose}>
                                Save Changes
                            </Button> */}
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>

            <div className="container homepage-footer">
                <div className="nav-pick">
                    <span>Youtube</span>
                    <span>Facebook</span>
                    <span>Blog</span>
                    <span>Youtube</span>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
