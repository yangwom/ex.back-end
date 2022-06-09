import { RowDataPacket } from "mysql2";
import modelBook from "../model/model.book";

export default {
    async getAll(): Promise<RowDataPacket[]> {

    const data = await modelBook.getAll();

    return data;
    }
}