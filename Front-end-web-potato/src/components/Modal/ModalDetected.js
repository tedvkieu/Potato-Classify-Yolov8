import { Button, Modal } from 'react-bootstrap';
import './ModalDetected.scss';
import { useEffect, useState } from 'react';
import {
    MdOutlineKeyboardArrowDown,
    MdOutlineKeyboardArrowUp,
} from 'react-icons/md';
import EarlyBlight from './EarlyBlight';
import LateBlight from './LateBlight';
import Nematode from './Nematode';
import Pest from './Pest';

const ModalDetected = (props) => {
    const { show, setShow, previewImgDetect, responseInfo } = props;
    const [showEarlyDiseaseDetail, setShowEarlyDiseaseDetail] = useState(false);
    const [showLateDiseaseDetail, setShowLateDiseaseDetail] = useState(false);

    const [showNematodeDiseaseDetail, setShowNematodeDiseaseDetail] =
        useState(false);
    const [showPestDiseaseDetail, setShowPestDiseaseDetail] = useState(false);
    const [isShowImg, setIsShowImg] = useState(false);
    const [imgShow, setImgShow] = useState('');

    const handleClose = () => {
        setShow(false);
    };

    console.log('check preview: ', previewImgDetect[0]);
    console.log('check res: ', responseInfo);

    const handleClickShowEarly = () => {
        setShowEarlyDiseaseDetail(!showEarlyDiseaseDetail);
        setShowLateDiseaseDetail(false);
        setShowNematodeDiseaseDetail(false);
        setShowPestDiseaseDetail(false);
    };

    const handleClickShowLate = () => {
        setShowLateDiseaseDetail(!showLateDiseaseDetail);
        setShowEarlyDiseaseDetail(false);
        setShowNematodeDiseaseDetail(false);
        setShowPestDiseaseDetail(false);
    };

    const handleClickShowNematode = () => {
        setShowNematodeDiseaseDetail(!showNematodeDiseaseDetail);
        setShowLateDiseaseDetail(false);
        setShowEarlyDiseaseDetail(false);
        setShowPestDiseaseDetail(false);
    };

    const handleClickShowPest = () => {
        setShowPestDiseaseDetail(!showPestDiseaseDetail);
        setShowLateDiseaseDetail(false);
        setShowEarlyDiseaseDetail(false);
        setShowNematodeDiseaseDetail(false);
    };
    const handleImageClick = (src_img) => {
        setImgShow(src_img);
        setIsShowImg(true);
        console.log('show modal; ', imgShow);
    };

    const closeModal = () => {
        setIsShowImg(false); // Đóng modal khi click ra ngoài ảnh
    };

    useEffect(() => {}, []);
    return (
        <Modal
            show={show}
            onHide={handleClose}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
                <Modal.Title>Images Detected</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {previewImgDetect && previewImgDetect.length > 0 ? (
                    <>
                        <div className="img-preview-detect">
                            {previewImgDetect.map((item, index) => (
                                <img
                                    key={index}
                                    src={item.file}
                                    alt=""
                                    onClick={() => handleImageClick(item.file)}
                                />
                            ))}
                            <div className="text-time">
                                Time: {new Date().toLocaleTimeString()}
                            </div>
                        </div>

                        <div className="info-disease mt-3">
                            {responseInfo.results &&
                            responseInfo.results.length > 0 ? (
                                responseInfo.results.map((item, index) => (
                                    <div key={index} className="row-result">
                                        <div className="text-row">
                                            Image: {index + 1}
                                        </div>
                                        <p className="text-row">
                                            Type of disease:{' '}
                                            {item.kind.join(', ')}
                                        </p>
                                    </div>
                                ))
                            ) : (
                                <p>No results found.</p>
                            )}
                        </div>
                    </>
                ) : (
                    <div> No Img</div>
                )}

                {/* Modal hiển thị ảnh */}
                {isShowImg && (
                    <div className="modal1" onClick={closeModal}>
                        <div
                            className="modal-content1"
                            onClick={(e) => e.stopPropagation()}>
                            <img src={imgShow} alt="" />
                        </div>
                    </div>
                )}

                {showEarlyDiseaseDetail && (
                    <EarlyBlight
                        showEarlyDiseaseDetail={showEarlyDiseaseDetail}
                        handleClickShowEarly={handleClickShowEarly}
                    />
                )}

                {showLateDiseaseDetail && (
                    <LateBlight
                        showLateDiseaseDetail={showLateDiseaseDetail}
                        handleClickShowLate={handleClickShowLate}
                    />
                )}
                {showNematodeDiseaseDetail && (
                    <Nematode
                        showNematodeDiseaseDetail={showNematodeDiseaseDetail}
                        handleClickShowNematode={handleClickShowNematode}
                    />
                )}

                {showPestDiseaseDetail && (
                    <Pest
                        showPestDiseaseDetail={showPestDiseaseDetail}
                        handleClickShowPest={handleClickShowPest}
                    />
                )}
            </Modal.Body>
            <Modal.Footer>
                <div className="btn-show" onClick={handleClickShowEarly}>
                    {showEarlyDiseaseDetail ? (
                        <>
                            Hide Early Blight
                            <MdOutlineKeyboardArrowUp />
                        </>
                    ) : (
                        <>
                            Show Early Blight
                            <MdOutlineKeyboardArrowDown />
                        </>
                    )}
                </div>
                <div className="btn-show" onClick={handleClickShowLate}>
                    {showLateDiseaseDetail ? (
                        <>
                            Hide Late Blight
                            <MdOutlineKeyboardArrowUp />
                        </>
                    ) : (
                        <>
                            Show Late Blight
                            <MdOutlineKeyboardArrowDown />
                        </>
                    )}
                </div>
                <div className="btn-show" onClick={handleClickShowNematode}>
                    {showNematodeDiseaseDetail ? (
                        <>
                            Hide Nematode
                            <MdOutlineKeyboardArrowUp />
                        </>
                    ) : (
                        <>
                            Show Nematode
                            <MdOutlineKeyboardArrowDown />
                        </>
                    )}
                </div>
                <div className="btn-show" onClick={handleClickShowPest}>
                    {showPestDiseaseDetail ? (
                        <>
                            Hide Pest
                            <MdOutlineKeyboardArrowUp />
                        </>
                    ) : (
                        <>
                            Show Pest
                            <MdOutlineKeyboardArrowDown />
                        </>
                    )}
                </div>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalDetected;
