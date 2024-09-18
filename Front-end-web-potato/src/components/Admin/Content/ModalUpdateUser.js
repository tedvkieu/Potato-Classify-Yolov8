import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from 'react-icons/fc';
import { toast } from 'react-toastify';
import { putUpdateUser } from '../../../services/apiServices';
import _ from 'lodash';

const ModalUpdateUser = (props) => {
    const { show, setShow, dataUpdate } = props;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [image, setImage] = useState('');
    const [role, setRole] = useState('USER');
    const [previewImg, setPreviewImg] = useState('');

    useEffect(() => {
        console.log('run effect ', dataUpdate);
        if (!_.isEmpty(dataUpdate)) {
            setEmail(dataUpdate.email);
            setUsername(dataUpdate.username);
            setRole(dataUpdate.role);
            if (dataUpdate.image) {
                setPreviewImg(`data:image/jpeg;base64,${dataUpdate.image}`);
            }
        }
    }, [props.dataUpdate]);

    const handleClose = () => {
        setShow(false);
        setEmail('');
        setPassword('');
        setImage('');
        setUsername('');
        setRole('USER');
        setPreviewImg('');
        props.resetUpdateData();
    };
    const handleUploadImage = (event) => {
        if (event.target.files && event.target && event.target.files[0]) {
            setPreviewImg(URL.createObjectURL(event.target.files[0]));
            setImage(event.target.files[0]);
        } else {
            //setPreviewImg('');
        }
    };

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleSubmitCreateUser = async (event) => {
        //validate
        const isValidEmail = validateEmail(email);
        if (!isValidEmail) {
            toast.error('Invalid Email');
            return;
        }

        let data = await putUpdateUser(dataUpdate.id, username, role, image);
        console.log('check res: ', data);
        if (data && data.EC === 0) {
            toast.success(data.EM);
            handleClose();
            //await props.fetchListUsers();
            await props.fetchListUsersPaginate(props.currentPage);
        }

        if (data && data.EC !== 0) {
            toast.error(data.EM);
        }
    };

    return (
        <>
            <Modal
                className="modal-add-user"
                size="xl"
                show={show}
                onHide={handleClose}
                backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Update This User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                value={dataUpdate.email}
                                className="form-control"
                                onChange={(event) => {
                                    setEmail(event.target.value);
                                }}
                                disabled
                            />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                value={password}
                                className="form-control"
                                onChange={(event) => {
                                    setPassword(event.target.value);
                                }}
                                disabled
                            />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">User Name</label>
                            <input
                                type="text"
                                value={username}
                                className="form-control"
                                onChange={(event) => {
                                    setUsername(event.target.value);
                                }}
                            />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label">Role</label>
                            <select
                                value={role}
                                className="form-select"
                                onChange={(event) => {
                                    setRole(event.target.value);
                                }}>
                                <option value="USER">USERS</option>
                                <option value="ADMIN">ADMIN</option>
                            </select>
                        </div>

                        <div className="col-md-12">
                            <label
                                className="form-label label-upload"
                                htmlFor="labelUpload">
                                <FcPlus />
                                Upload File Image
                            </label>
                            <input
                                id="labelUpload"
                                type="file"
                                hidden
                                onChange={(event) => {
                                    handleUploadImage(event);
                                }}
                            />
                        </div>
                        <div className="col-md-12 img-preview">
                            {previewImg ? (
                                <img src={previewImg} />
                            ) : (
                                <span> Preview Image</span>
                            )}
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => handleSubmitCreateUser()}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
export default ModalUpdateUser;
