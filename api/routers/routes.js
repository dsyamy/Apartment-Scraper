import express from "express";
import PageController from "../controllers/controllers.js";
import path from "path";

const router = express.Router();

router.route("/").get(PageController.getHomepage);
router.route("/main").get(PageController.getMain);
router.route("/fav").get(PageController.getFav);
router.route("/listing").get(PageController.getListing).post(PageController.postListing);
router.route("/login").get(PageController.getLogin);

router.route("/public/css/:style.css").get((req, res) => {
    res.sendFile(path.resolve() + `/public/css/${req.params.style}.css`);
});

export default router;
