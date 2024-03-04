//articles js combined with login context example below 

import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ListingSchema = new Schema({
    lister: {type: String, required: true},
    specs: {type: String, required: true}, // if not unique, just leave it out
    date: {type: Date, required: true}

}, {
    collection: 'listing'  // registered and not registered 
})

const db = mongoose.connection.useDb("listing");
const Listing = db.model("listing", ListingSchema);

export default Listing;

/* we need collection for article
const ArticleSchema = new Schema({
    name: {type: String, unique: true, required: true}, // if not unique, just leave it out
    author: {type: String, required: true}
}, {
    collection: 'articles'  
});
const db = mongoose.connection.useDb("article"); // make sure to add new connection w same name
const Article = db.model("user", ArticleSchema);

export default Article;
*/