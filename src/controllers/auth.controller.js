import Error from "next/error";
import React from "react";

export default class AuthController {
  constructor(props) {
    this.fields = props?.fields ?? undefined;
  }
  async signIn() {
    try {
      if (!this.fields) {
        alert("This field must be defined");
        return [new Error("This field must be defined"), null];
      }
      console.log("user", user);
      const user = {
        id: 1,
        username: "johndoe",
        isBanned: false,
        email: "jhondoe@gmail.com",
        avatar: null,
      };

      return [null, user];
    } catch (error) {
      return [error, null];
    }
  }
}
