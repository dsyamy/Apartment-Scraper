import path from "path";
import LoginAccessor from "../db_accessor/login.accessor.js";
import ListingAccessor from "../db_accessor/listing.accessor.js";


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

    static async getListing(req, res) {
        const listing = await ListingAccessor.getListingbyLister("Justin");
        res.render("listing", { listing });
        //res.sendFile(path.resolve() + "/listing.html");
    }

    static async postListing(req, res) {
        //const allListing = await ListingAccessor.postLister(req.body);
        res.json(req.body);
        const listingToPost = {
            lister: req.body.lister,
            date: req.body.date,
            url: req.body.url,
        };
    
        ListingAccessor.postListing(listingToPost);
    
        res.redirect("/listing");
    }

    static async getLogin(req, res) {
        const login = await LoginAccessor.getUserByName("Amy"); // ejs - rendering
        res.render("login", { login });
        //res.sendFile(path.resolve() + "/login.html"); for html
    }
}

export default PageController;