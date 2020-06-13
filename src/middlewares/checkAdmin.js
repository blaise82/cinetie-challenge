const checkAdmin = (req, res, next) => {
  const { type } = req.user;
  if (type === 'admin') {
    next();
  } else {
    return res.status(403).json({
      status: 403,
      error: 'Only admins can send invitations'
    });
  }
};

export default checkAdmin;
