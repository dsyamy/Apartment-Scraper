//articles js combined with login context example below 

import mongoose from "mongoose";

const Schema = mongoose.Schema;

const LoginSchema = new Schema({
    name: {type: String, unique: true, required: true}, // if not unique, just leave it out
    pass: {type: String, unique: true, required: true}
}, {
    collection: 'users'  // registered and not registered 
})

const db = mongoose.connection.useDb("users");
const Login = db.model("user", LoginSchema);

export default Login;

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