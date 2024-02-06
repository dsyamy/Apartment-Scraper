import path from "path";


class PageController {
    static getHomepage(req, res) {
        res.sendFile(path.resolve() + "/index.html");
    }

    static getMain(req, res) {
        res.sendFile(path.resolve() + "/main.html");
    }

    static getFav(req, res) {
        res.sendFile(path.resolve() + "/fav.html");
    }

    static getListing(req, res) {
        res.sendFile(path.resolve() + "/listing.html");
    }

    static getLogin(req, res) {
        res.sendFile(path.resolve() + "/login.html");
    }
}

export default PageController;