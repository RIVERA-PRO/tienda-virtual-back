async function accountHasBeenVerified(req, res, next) {
  if (req.user.is_verified) {
    return next();
  }
}

export default accountHasBeenVerified;
