import http from "../http-common";

type User = {
  [key: string]: string;
};

export interface Params {
  itemsPerPage: number;
  currentPage: number;
  totalRecords: number;
}

class UsersService {
  fetchAll(params: Params) {
    return http.get("/users", { params });
  }
  addUser(user: User) {
    return http.post("/users", user);
  }
}

export default new UsersService();
