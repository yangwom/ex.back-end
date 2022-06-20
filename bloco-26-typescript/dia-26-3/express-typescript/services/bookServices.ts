import { Request, Response } from "express"
import modelBook from "../model/model.book";

export default {
    async getAll(req: Request, res: Response) {

    const data = await modelBook.getAll();

    return data;
    }
}