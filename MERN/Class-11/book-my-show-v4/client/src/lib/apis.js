import axios from 'axios';

export const getMovies = async () => {
    const response = await axios.get('http://localhost:8080/movies');
    return response.data.payload;
};

export const getMovie = async (movieId) => {
    const response = await axios.get(`http://localhost:8080/movies/${movieId}`);
    return response.data.payload;
};

export const getProfile = async () => {
    const response = await axios.get('http://localhost:8080/users/profile', {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
    return response.data.payload;
};

export const login = async(userCredentials)=>{
    const response = await axios.post('http://localhost:8080/users/login', { ...userCredentials });
    return response.data.payload;
}

export const signup = async (userCredentials) => {
    const response = await axios.post('http://localhost:8080/users/register', { ...userCredentials });
    return response.data.payload;
}