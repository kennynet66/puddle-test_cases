import { Router } from "express";
import { registerUser } from "../Controllers/register.controller";

const registerRoute = Router();

registerRoute.post('/register', registerUser);

export default registerRoute;