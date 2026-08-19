export class ApiResponse{
    constructor(status, message, data) {
        this.status = status;
        this.message = message;
        this.data = data;
    }
    static build(status, message, data=null) {
        return new ApiResponse(status, message, data);
    }
}