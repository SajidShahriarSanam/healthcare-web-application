export const getMe = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "You accessed a protected route ✅",
    user: {
      id: req.user._id,
      name: req.user.name,
      email: req.user.email,
      role: req.user.role,
    },
  });
};