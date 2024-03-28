
import express from "express";
import { Request, Response } from "express";
export class LoginController {
    async teste(request : Request, response : Response){
        const res = 'teste'
        return response.json(res);
    }
}