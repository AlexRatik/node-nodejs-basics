import path from "node:path";
import fs from "node:fs";
import { stdin } from "node:process";

export const write = async () => {
    const fileToWrite = path.join(path.resolve(), "files", "fileToWrite.txt");
    const stream = fs.createWriteStream(fileToWrite);
    stdin.pipe(stream);
};

write();
