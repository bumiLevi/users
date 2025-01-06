import baseService from "./baseService";

const MODULE_PATH_AUTH = "/auth";

interface UserLoginReq {
  username: string;
  password: string;
}

export const userLoginService = async (data: UserLoginReq) => {
  const url = `/api/auth/login`;
  return await baseService(url, "post", data);
};

