import { useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { getAllHistory } from '../../services/apiServices';

const HomeHistory = (props) => {
    const [arrImg, setArrImg] = useState([]);

    useEffect(() => {
        serviceGetAllHistory();
        console.log('check: ', arrImg);
    }, []);

    const serviceGetAllHistory = async () => {
        let res = await getAllHistory();

        setArrImg(res);
    };

    return (
        <div className="home-history mt-3">
            <div className="info-text">
                <h3 className="title">Potato detection History</h3>
            </div>
            <table className="table table-striped table-hover mt-2">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Image</th>
                        <th scope="col">Type of Disease</th>
                        <th scope="col">Time</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    {arrImg &&
                        arrImg.length > 0 &&
                        arrImg.map((img, index) => {
                            return (
                                <tr>
                                    <th scope="row">{img.id}</th>
                                    <td>
                                        <img
                                            src={`http://127.0.0.1:5000/upload/yolov8/${img.potato_img}`}
                                        />
                                    </td>
                                    <td>{img.potato_kind}</td>
                                    <td>{img.time}</td>
                                    <td className="button-edit">
                                        <button className="btn btn-secondary custom-margin">
                                            View
                                        </button>
                                        <button className="btn btn-dark mr-3">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </div>
    );
};

export default HomeHistory;
