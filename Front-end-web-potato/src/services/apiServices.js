import axios from '../utils/axiosCustomize';

const postCreateNewUser = (email, password, username, role, image) => {
    const data = new FormData();
    data.append('email', email);
    data.append('password', password);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);

    return axios.post('api/v1/participant', data); // da lay duong link local ben file instance
};

const putUpdateUser = (id, username, role, image) => {
    const data = new FormData();
    data.append('id', id);
    data.append('username', username);
    data.append('role', role);
    data.append('userImage', image);

    return axios.put('api/v1/participant', data); // da lay duong link local ben file instance
};

const getAllUsers = () => {
    return axios.get('api/v1/participant/all');
};

const deleteUser = (userId) => {
    return axios.delete('api/v1/participant', { data: { id: userId } });
};

const getUserPaginate = (page, limit) => {
    return axios.get(`api/v1/participant?page=${page}&limit=${limit}`);
};

const postLogin = (userEmail, userPass) => {
    return axios.post(`/api/v1/login`, {
        email: userEmail,
        password: userPass,
        delay: 5000,
    });
};

const postRegister = (email, password, username) => {
    return axios.post(`/api/v1/register`, { email, password, username });
};

const getQuizByUser = () => {
    return axios.get('/api/v1/quiz-by-participant');
};

const getDataQuiz = (id) => {
    return axios.get(`/api/v1/questions-by-quiz?quizId=${id}`);
};

const postSubmitQuiz = (data) => {
    return axios.post(`/api/v1/quiz-submit`, { ...data });
};

const postCreateNewQuiz = (description, name, difficulty, image) => {
    const data = new FormData();
    data.append('description', description);
    data.append('name', name);
    data.append('difficulty', difficulty);
    data.append('quizImage', image);

    return axios.post('api/v1/quiz', data); // da lay duong link local ben file instance
};

const getAllQuizForAdmin = () => {
    return axios.get(`/api/v1/quiz/all`);
};

const submitImageClassify = (image) => {
    const formData = new FormData();

    // Kiểm tra xem image có phải là mảng hay không
    if (Array.isArray(image)) {
        image.forEach((file) => {
            formData.append('uploadFile[]', file);
        });
    } else {
        console.error('Image is not an array');
    }

    return axios.post('/classify', formData);
};


const getAllHistory = () => {
    return axios.get('/get-all-history');
}

export {
    postCreateNewUser,
    getAllUsers,
    putUpdateUser,
    deleteUser,
    getUserPaginate,
    postLogin,
    postRegister,
    getQuizByUser,
    getDataQuiz,
    postSubmitQuiz,
    postCreateNewQuiz,
    getAllQuizForAdmin,
    submitImageClassify,
    getAllHistory,
};
