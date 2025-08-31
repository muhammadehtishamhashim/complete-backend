class ApiError {
  constructor(statusCode, data, message = "Success") {
    this.message = message;
    this.success = statusCode < 400;
    this.statusCode - statusCode;
    this.data = data;
  }
}
