import express from "express";
import PageController from "../controllers/controllers.js";

const router = express.Router();

router.route("/").get(PageController.getHomepage);
router.route("/main").get(PageController.getMain);
router.route("/fav").get(PageController.getFav);
router.route("/listing").get(PageController.getListing);
router.route("/login").get(PageController.getLogin);

export default router;
