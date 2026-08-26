import Movie from '../models/Movie.js';
import { ApiResponse } from '../core/ApiResponse.js';
import { InternalServerError, NotFoundError } from '../core/ApiError.js';

/*
Controller
1. Intercepts the request 
2. execute the business logic as per MVC architecture, can interact with the model layer if needed.
3. send back the http response

*/


export const findAll = async (req, res) => {
    const movies = await Movie.find({});
    res.json(ApiResponse.build('success', 'All Movie', movies));
}

export const findOne = async (req, res) => {
    const { id } = req.params;
    const movie = await Movie.findById(id);
    if (!movie) {
        throw new NotFoundError('Movie not found');
    }
    res.json(ApiResponse.build('success', 'Movie details', movie));
}
