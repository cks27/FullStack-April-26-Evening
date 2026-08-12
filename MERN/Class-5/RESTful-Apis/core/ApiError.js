class ApiError extends Error{
    constructor(message) {
        super(message);
    }
}

class BadRequestError extends ApiError{
    constructor(message = 'Bad Request') {
        super(message);
        this.status = 400;
    }
}

class NotFoundError extends ApiError{
    constructor(message = 'Not found') {
        super(message);
        this.status = 404;
    }
}

module.exports = {
    BadRequestError,
    NotFoundError,
    ApiError
}