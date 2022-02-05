export default (error) =>
  error.details.map((err) => ({
    field: err.path[0],
    message: err.message,
  }));
