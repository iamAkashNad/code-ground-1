const fs = require("fs");

const readFile = () => {
    fs.readFile("data.txt", (error, buffer) => {
        if(error) {
            console.log("Failed to read the file!");
            return;
        }

        const data = buffer.toString();
        let count = 0;
        data.split(/[" ", \r, !, ., ?]/).forEach(word => {
            count += word.length > 0 ? 1 : 0;
        });
        console.log(count);
    })
};

readFile();
