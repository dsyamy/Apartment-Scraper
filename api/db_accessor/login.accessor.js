import Connection from "../db/connection.js";
import Login from "../models/login.js";

export default class LoginAccessor {
  static async getUserByName(loginUser) {
    await Connection.open("users");
    const loginDB = await Login.findOne({ title: loginUser });
    return loginDB;
  }

  static async getAllUsers() {
    await Connection.open("user");
    const allUsers = await Login.find({});
    return allUsers;
  }
}