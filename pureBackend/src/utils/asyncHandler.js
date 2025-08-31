const asyncHandler = (fn) => {
  (req, res, next) => {
    (Promise.resolve(fn(req, res, next)).catch((err) => {
      console.log(`asyncHandler failed`);
    }),
      next(err));
  };
};

export default asyncHandler;
