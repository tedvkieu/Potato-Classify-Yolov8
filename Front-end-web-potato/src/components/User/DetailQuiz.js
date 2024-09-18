import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getDataQuiz, postSubmitQuiz } from '../../services/apiServices';
import _ from 'lodash';
import './DetailQuiz.scss';
import Question from './Question';
import ModalResult from './ModalResult';

const DetailQuiz = (props) => {
    const params = useParams();
    const quizId = params.id;
    const location = useLocation();

    const [dataQuiz, setDataQuiz] = useState([]);
    const [index, setIndex] = useState(0);

    const [isShowModalResult, setIsShowModalResult] = useState(false);
    const [dataModalResult, setDataModalResult] = useState({});

    useEffect(() => {
        fetchQuestions();
    }, [quizId]);

    const fetchQuestions = async () => {
        let res = await getDataQuiz(quizId);

        if (res && res.EC === 0) {
            let raw = res.DT;
            let data = _.chain(raw)
                // Group the elements of Array based on `color` property
                .groupBy('id')
                .map((value, key) => {
                    let answers = [];
                    let questionDesciption,
                        image = null;
                    value.forEach((item, index) => {
                        if (index === 0) {
                            questionDesciption = item.description;
                            image = item.image;
                        }
                        item.answers.isSelected = false;
                        answers.push(item.answers);
                    });

                    return {
                        questionId: key,
                        answers: answers,
                        questionDesciption,
                        image,
                    };
                })
                .value();
            setDataQuiz(data);
        }
    };

    const handlePrevious = () => {
        if (index - 1 < 0) return;

        setIndex(index - 1);
    };

    const handleNext = () => {
        if (dataQuiz && dataQuiz.length > index + 1) {
            setIndex(index + 1);
        }
    };

    const handleCheckBox = (answerId, questionId) => {
        let dataQuizClone = _.cloneDeep(dataQuiz);
        let question = dataQuizClone.find(
            (item) => +item.questionId === +questionId
        );

        if (question && question.answers) {
            question.answers = question.answers.map((item) => {
                if (+item.id === +answerId) {
                    item.isSelected = !item.isSelected;
                }
                return item;
            });
        }
        let index = dataQuizClone.findIndex(
            (item) => +item.questionId === +questionId
        );
        if (index > -1) {
            dataQuizClone[index] = question;
            setDataQuiz(dataQuizClone);
        }
    };

    const handleFinishQuiz = async () => {
        console.log('chekc data: ', dataQuiz);
        let payload = {
            quizId: +quizId,
            answers: [],
        };
        let answers = [];
        if (dataQuiz && dataQuiz.length > 0) {
            dataQuiz.forEach((question) => {
                let questionId = question.questionId;
                let userAnswerId = [];

                question.answers.forEach((a) => {
                    if (a.isSelected === true) {
                        userAnswerId.push(a.id);
                    }
                });
                answers.push({
                    questionId: +questionId,
                    userAnswerId: userAnswerId,
                });
            });
            payload.answers = answers;

            let res = await postSubmitQuiz(payload);
            console.log('check res: ', res);
            if (res && res.EC === 0) {
                setDataModalResult({
                    countCorrect: res.DT.countCorrect,
                    countTotal: res.DT.countTotal,
                    quizData: res.DT,
                });
                setIsShowModalResult(true);
            } else {
                alert('something wrongs....');
            }
        }
    };

    return (
        <div className="detail-quiz-container">
            <div className="left-content">
                <div className="title">
                    QUIZ {quizId}:{location?.state?.quizTitle}
                </div>
                <hr />
                <div className="q-body">
                    <img />
                </div>
                <div className="q-content">
                    <Question
                        index={index}
                        handleCheckBox={handleCheckBox}
                        data={
                            dataQuiz && dataQuiz.length > 0
                                ? dataQuiz[index]
                                : []
                        }
                    />
                </div>
                <div className="footer">
                    <button
                        className="btn btn-secondary"
                        onClick={() => handlePrevious()}>
                        Previous
                    </button>
                    <button
                        className="btn btn-primary"
                        onClick={() => handleNext()}>
                        Next
                    </button>
                    <button
                        className="btn btn-warning"
                        onClick={() => handleFinishQuiz()}>
                        Finish
                    </button>
                </div>
            </div>
            <div className="right-content">count down</div>
            <ModalResult
                show={isShowModalResult}
                setShow={setIsShowModalResult}
                dataModalResult={dataModalResult}
            />
        </div>
    );
};

export default DetailQuiz;
