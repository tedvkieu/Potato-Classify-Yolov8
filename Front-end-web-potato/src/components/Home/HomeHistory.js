import { useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { fetchDataPagination, getAllHistory } from '../../services/apiServices';
import ReactPaginate from 'react-paginate';

const HomeHistory = (props) => {
    const [arrImg, setArrImg] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [perPage] = useState(4);

    // const serviceGetAllHistory = async () => {
    //     let res = await getAllHistory();
    //     setArrImg(res);
    // };

    const fetchData = async (page) => {
        try {
            const response = await fetchDataPagination(page, perPage);
            console.log('check res: '.response);
            setArrImg(response.records);
            setTotalPages(Math.ceil(response.total / perPage)); // Tính tổng số trang
        } catch (error) {
            console.error('Error fetching data', error);
        }
    };

    // Lấy dữ liệu khi trang thay đổi
    useEffect(() => {
        fetchData(currentPage);
    }, [currentPage]);

    // Xử lý chuyển trang
    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className="home-history mt-3">
            <div className="info-text">
                <h3 className="title">Potato detection History</h3>
            </div>
            {arrImg && arrImg.state !== 400 ? (
                <>
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
                    <div
                        className="user_pagination"
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '20px',
                        }}>
                        <button
                            className="btn btn-secondary"
                            onClick={handlePrevPage}
                            disabled={currentPage === 1}>
                            Previous
                        </button>
                        <span style={{ margin: '0 20px', fontSize: '20px' }}>
                            Page {currentPage} of {totalPages}
                        </span>
                        <button
                            className="btn btn-dark"
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages}>
                            Next
                        </button>
                    </div>
                </>
            ) : (
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '20%',
                        height: '100vh',
                        color: 'white',
                        fontSize: '64px',
                        textAlign: 'center',
                    }}>
                    History Empty
                </div>
            )}
        </div>
    );
};

export default HomeHistory;
