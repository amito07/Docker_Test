import express  from "express";
import { deleteUser, getUser, getUsers, updateUser, userCreate } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get('/all-user', getUsers);
userRouter.get('/user/:id', getUser);
userRouter.post('/create-user',userCreate);
userRouter.patch('/update-user',updateUser);
userRouter.delete('/user-delete',deleteUser);

export default userRouter;
