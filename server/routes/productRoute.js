const express = require("express");
const {
  createProduct,
  fetchProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
  createProductReview,
  getProductReviews,
  deleteReview,
} = require("../controllers/productController");
const { deleteUser } = require("../controllers/userController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.post("/admin/products/new", authorizeRoles("admin"), createProduct);
router.get("/products", fetchProduct);
router.put("/admin/products/:id", authorizeRoles("admin"), updateProduct);
router.delete("/admin/products/:id", authorizeRoles("admin"), deleteProduct);

router.get("/products/:id", getProductDetails);
router.put("/review", isAuthenticatedUser, createProductReview);
router.get("/reviews", getProductReviews);
router.delete("/reviews", isAuthenticatedUser, deleteReview);  
module.exports = router;
