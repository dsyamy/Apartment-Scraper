import path from "path";
import LoginAccessor from "../db_accessor/login.accessor.js";


class PageController {
    static getHomepage(req, res) {
        res.sendFile(path.resolve() + "/public/html/index.html");
    }

    static getMain(req, res) {
        res.sendFile(path.resolve() + "/public/html/main.html");
    }

    static getFav(req, res) {
        res.sendFile(path.resolve() + "/public/html/fav.html");
    }

    static getListing(req, res) {
        res.sendFile(path.resolve() + "/listing.html");
    }

    static async getLogin(req, res) {
        const login = await LoginAccessor.getUserByName("Amy");
        res.render("login", { login });
        //res.sendFile(path.resolve() + "/login.html");
    }
}

export default PageController;