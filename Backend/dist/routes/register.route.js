"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const register_controller_1 = require("../Controllers/register.controller");
const registerRoute = (0, express_1.Router)();
registerRoute.post('/register', register_controller_1.registerUser);
exports.default = registerRoute;
