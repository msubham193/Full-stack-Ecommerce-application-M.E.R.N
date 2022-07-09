const express = require("express");
const {
  register,
  login,
  logout,
  forgotPassword,
  getUserDetails,
  updatePassword,
  updateProfile,
  getAllUser,
  getSingleUser,
  updateUserRole,
  deleteUser,
} = require("../controllers/userController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.post("/password/forgot", forgotPassword);
router.get("/me", isAuthenticatedUser, getUserDetails);
router.put("/password/update", isAuthenticatedUser, updatePassword);
router.put("/me/update", isAuthenticatedUser, updateProfile);
router.get(
  "/admin/users",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  getAllUser
);
router.get(
  "/admin/users/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  getSingleUser
);

router.put(
  "/admin/users/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  updateUserRole
);
router.delete(
  "/admin/users/:id",
  isAuthenticatedUser,
  authorizeRoles("admin"),
  deleteUser
);

module.exports = router;
