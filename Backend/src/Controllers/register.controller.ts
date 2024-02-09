import { Request, Response } from "express";
import bcrypt from 'bcrypt'
import { newUser } from "../interface/user.interface";

let users:newUser[] = []

export const registerUser = async (req: Request, res: Response)=> {
    const {email, fullName, userName, password, phoneNumber}:newUser = req.body

    const hashPwd = await bcrypt.hash(password, 5);

    try {
        let user:newUser = {
            email: email,
            fullName: fullName,
            userName: userName,
            password: hashPwd,
            phoneNumber: phoneNumber
        }
        users.push(user);
        res.status(200).json({
            message: "User created successfully",
            users
        })
    } catch (error) {
        res.status(500).json({
            errorMsg: "Internal Server error",
            error
        })
    }
}