"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
let users = [];
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, fullName, userName, password, phoneNumber } = req.body;
    const hashPwd = yield bcrypt_1.default.hash(password, 5);
    try {
        let user = {
            email: email,
            fullName: fullName,
            userName: userName,
            password: hashPwd,
            phoneNumber: phoneNumber
        };
        users.push(user);
        res.status(200).json({
            message: "User created successfully",
            users
        });
    }
    catch (error) {
        res.status(500).json({
            errorMsg: "Internal Server error",
            error
        });
    }
});
exports.registerUser = registerUser;
