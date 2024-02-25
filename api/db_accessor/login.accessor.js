import Connection from "../db/connection.js";
import Login from "../models/login.js";

export default class LoginAccessor {
  static async getUserByName(loginUser) {
    await Connection.open("users");
    const loginDB = await Login.findOne({ user: loginUser });
    return loginDB;
  }

  static async getAllUsers() {
    await Connection.open("users");
    const allUsers = await Login.find({});
    return allUsers;
  }
}