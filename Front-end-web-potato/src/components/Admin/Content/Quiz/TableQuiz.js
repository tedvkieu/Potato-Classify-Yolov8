import { useEffect, useState } from 'react';
import { getAllQuizForAdmin } from '../../../../services/apiServices';

const TableQuiz = (props) => {
    const [listQuiz, setListQuiz] = useState([]);

    useEffect(() => {
        fetchQuiz();
    }, []);

    const fetchQuiz = async () => {
        let res = await getAllQuizForAdmin();
        if (res && res.EC === 0) {
            setListQuiz(res.DT);
        }
    };

    return (
        <>
            <div>List Quizzes: </div>
            <hr />
            <table className="table table-hover table-bordered mt-2">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Type</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listQuiz &&
                        listQuiz.map((item, index) => {
                            return (
                                <tr key={`table-quiz-${index + 1}`}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.description}</td>
                                    <td>{item.difficulty}</td>
                                    <td
                                        style={{
                                            display: 'flex',
                                            gap: '15px',
                                        }}>
                                        <button className="btn btn-primary">
                                            View
                                        </button>
                                        <button className="btn btn-secondary">
                                            Edit
                                        </button>
                                        <button className="btn btn-warning">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </>
    );
};
export default TableQuiz;
