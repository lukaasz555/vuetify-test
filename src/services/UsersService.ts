import http from "../http-common";

type User = {
  [key: string]: string;
};

class UsersService {
  fetchAll() {
    console.log("fetch all UsersService");
    return http.get("/users");
  }
  addUser(user: User) {
    return http.post("/users", user);
  }
}

export default new UsersService();
