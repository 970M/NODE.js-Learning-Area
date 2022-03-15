const fs = require("fs");

fileName = "villes_guadeloupe.csv";

// Lire un fichier (méthode asynchone)
fs.readFile(fileName, "utf8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    // console.log(typeof data);

    // for (i = 0; i < data; i++) {
    //     console.log(i);
    // }
});

// ---------------------------------------
// csv-parse module : https://csv.js.org/
// ---------------------------------------

let parse = require("csv-parse");

// --- READ csv files

// Async method
console.log(parse);
fs.readFile(fileName, function (err, fileData) {
    parse.parse(
        fileData,
        { columns: false, trim: false, delimiter: ";" },
        function (err, rows) {
            // Your CSV data is in an array of arrys passed to this callback as rows.
            console.log("row:", rows);

            for (i = 0; i < rows.length; i++) {
                console.log(rows[i]);
            }
        }
    );
});

// Streams method
const data = [];
fs.createReadStream(fileName)
    .pipe(parse.parse({ columns: true, trim: false, delimiter: ";" }))
    .on("data", (r) => {
        console.log("r=", r);
        data.push(r);
    })
    .on("end", () => {
        console.log("data=", data);
    });

// --- WRITE csv files

// ---------------------------------------
// csv-parser module : https://www.npmjs.com/package/csv-parser
// ---------------------------------------

// Streams method
const csv = require("csv-parser");
fs.createReadStream(fileName)
    .pipe(csv({ separator: ";" }))
    .on("data", (row) => {
        console.log("row=", row);
    })
    .on("end", () => {
        console.log("CSV file successfully processed");
    });
