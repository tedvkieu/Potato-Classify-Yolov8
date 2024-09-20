import { Button, Modal } from 'react-bootstrap';
import './ModalDetected.scss';

const ModalDetected = (props) => {
    const { show, setShow, previewImgDetect } = props;
    // const previewImgDetect = [];
    const handleClose = () => {
        setShow(false);
    };

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
                <div className="img-preview-detect">
                    {previewImgDetect && previewImgDetect.length > 0 ? (
                        previewImgDetect.map((img, index) => (
                            <img key={index} src={img} alt="" />
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
            </Modal.Footer>
        </Modal>
    );
};

export default ModalDetected;
