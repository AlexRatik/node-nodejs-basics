import path from "node:path";
import fs from "node:fs";

export const read = async () => {
    const fileToRead = path.join(path.resolve(), "files", "fileToRead.txt");
    const stream = fs.createReadStream(fileToRead, { encoding: "utf-8" });
    stream.on("data", (data) => {
        console.log("\n\n" + data);
    });
};

read();
