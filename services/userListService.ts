import { IUser } from "../interfaces/userInterface";
import baseService from "./baseService";


const MODULE_PATH = `/api/users`

const createUser = async (data: IUser) => {
    const url = `${MODULE_PATH}/`;
    return await baseService(url, 'post', data);
};


const editUser = async (data: IUser) => {
    const url = `${MODULE_PATH}/${data._id}`;
    return await baseService(url, 'put', data);
};

const deleteUser = async (id: string) => {
    const url = `${MODULE_PATH}/${id}`;
    return await baseService(url, 'delete');
};

const getAllUsers = async () => {
    const url = `${MODULE_PATH}`;
    return await baseService(url, 'get');
};

const getUserById = async (id: string) => {
    const url = `${MODULE_PATH}/${id}`;
    return await baseService(url, 'get');
};



export {
    createUser,
    editUser,
    deleteUser,
    getAllUsers,
    getUserById
};