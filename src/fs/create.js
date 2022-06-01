import path from "path";
import fsPromises from "fs/promises";
import fs from "fs";

const OUTPATH = path.join(path.resolve(), "files", "fresh.txt");
const TEXTFORWRITE = "I am fresh and young";
const TEXTFORERROR = "FS operation failed";

export const create = async () => {
    fs.stat(OUTPATH, async (err) => {
        if (err == null) {
            throw new Error(TEXTFORERROR);
        } else {
            await fsPromises.writeFile(OUTPATH, TEXTFORWRITE);
        }
    });
};

create();
