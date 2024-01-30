import request from "../utils/request";

export const login = (data: LoginData) =>
  request.post<LoginResponse>("/api/login", data);
