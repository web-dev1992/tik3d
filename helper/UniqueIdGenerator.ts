import { hash } from "bcryptjs";

let lastId = 0;
export async function uniqueIdGenerator(prefix = "id") {
    lastId++;
    const uniqueId = await hash(`${prefix}${lastId}`, 5);
    return uniqueId;
  }
