import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MenuBar from '../Menu/MenuBar';
import { submitImageClassify } from '../../services/apiServices';
import ModalDetected from '../Modal/ModalDetected';
import HomeContent from './HomeContent';
import HomeHistory from './HomeHistory';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const HomePage = (props) => {
    const [image, setImage] = useState([]);
    const [previewImg, setPreviewImg] = useState([]);
    const [previewImgDetect, setPreviewImgDetect] = useState([]);
    const [show, setShow] = useState(false);
    const [responseInfo, setResponseInfo] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleUploadImage = (event) => {
        if (event.target.files && event.target.files.length > 0) {
            const selectedFiles = Array.from(event.target.files);
            const previewUrls = selectedFiles.map((file) =>
                URL.createObjectURL(file)
            );
            setPreviewImg(previewUrls);
            setImage(selectedFiles);
            console.log(selectedFiles);
        } else {
            setPreviewImg([]);
        }
    };
    const handleSubmit = async () => {
        try {
            const response = await submitImageClassify(image);

            console.log('res: ', response);

            if (response.success) {
                setResponseInfo(response);
                setPreviewImgDetect(response.files);
                setShow(true);
            } else {
                alert('Upload failed');
            }
        } catch (error) {
            console.error('Error uploading images:', error);
            alert('An error occurred during the upload');
        }
    };

    // Menu Bar
    const handleItemClick = (index) => {
        setActiveIndex(index);
    };

    // History Component

    return (
        <div className="container homepage-container">
            <div className="homepage-content">
                <div className="sl-left">
                    <MenuBar
                        activeIndex={activeIndex}
                        handleItemClick={handleItemClick}
                    />
                </div>
                <div className="sl-center">
                    {activeIndex === 0 && (
                        <HomeContent
                            previewImg={previewImg}
                            handleSubmit={handleSubmit}
                            handleUploadImage={handleUploadImage}
                        />
                    )}
                    {activeIndex === 1 && <HomeHistory />}

                    <ModalDetected
                        show={show}
                        setShow={setShow}
                        previewImgDetect={previewImgDetect}
                        responseInfo={responseInfo}
                    />
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
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default HomePage;
