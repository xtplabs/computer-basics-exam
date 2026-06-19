const express = require("express");

function shuffle(array) {

    for (let i = array.length - 1; i > 0; i--) {

        let j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];

    }

    return array;
}
const Database = require("better-sqlite3");

const app = express();

const db = new Database("exam.db");


app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.set("view engine", "ejs");


db.exec(`

CREATE TABLE IF NOT EXISTS users(
id INTEGER PRIMARY KEY AUTOINCREMENT,
name TEXT,
phone TEXT
);


CREATE TABLE IF NOT EXISTS questions(
id INTEGER PRIMARY KEY AUTOINCREMENT,
question TEXT,
a TEXT,
b TEXT,
c TEXT,
d TEXT,
answer TEXT,
difficulty TEXT
);

`);





const total = db.prepare(
    "SELECT COUNT(*) total FROM questions"
).get();



if (total.total === 0) {


    const add = db.prepare(`

INSERT INTO questions
(question,a,b,c,d,answer,difficulty)

VALUES(?,?,?,?,?,?,?)

`);




    const questions = [


        // ========== EASY 30 ==========


        [
            "What is a computer?",
            "Electronic machine that processes data",
            "Chair",
            "Book",
            "Fan",
            "Electronic machine that processes data",
            "easy"
        ],


        [
            "Keyboard is an?",
            "Input device",
            "Output device",
            "Storage",
            "Software",
            "Input device",
            "easy"
        ],


        [
            "Monitor is?",
            "Output device",
            "Input device",
            "CPU",
            "Memory",
            "Output device",
            "easy"
        ],


        [
            "Mouse is used to?",
            "Control pointer",
            "Print",
            "Store files",
            "Scan",
            "Control pointer",
            "easy"
        ],


        [
            "CPU means?",
            "Central Processing Unit",
            "Computer Power Unit",
            "Control Program Unit",
            "Central Print Unit",
            "Central Processing Unit",
            "easy"
        ],


        [
            "RAM is?",
            "Temporary memory",
            "Permanent storage",
            "Printer",
            "Screen",
            "Temporary memory",
            "easy"
        ],


        [
            "ROM means?",
            "Read Only Memory",
            "Random Online Memory",
            "Remote Memory",
            "Run Memory",
            "Read Only Memory",
            "easy"
        ],


        [
            "Printer creates?",
            "Hard copy",
            "Software",
            "Database",
            "Internet",
            "Hard copy",
            "easy"
        ],


        [
            "Scanner creates?",
            "Digital copy",
            "Sound",
            "Video",
            "Password",
            "Digital copy",
            "easy"
        ],


        [
            "Microsoft Word is for?",
            "Documents",
            "Games",
            "Music",
            "Videos",
            "Documents",
            "easy"
        ],


        [
            "Excel is mainly for?",
            "Calculations",
            "Music",
            "Drawing",
            "Movies",
            "Calculations",
            "easy"
        ],


        [
            "PowerPoint creates?",
            "Presentations",
            "Games",
            "Programs",
            "Folders",
            "Presentations",
            "easy"
        ],


        [
            "Access is a?",
            "Database program",
            "Browser",
            "Game",
            "Printer",
            "Database program",
            "easy"
        ],


        [
            "Outlook is used for?",
            "Email",
            "Typing",
            "Gaming",
            "Drawing",
            "Email",
            "easy"
        ],


        [
            "Mavis Beacon teaches?",
            "Typing",
            "Programming",
            "Networking",
            "Design",
            "Typing",
            "easy"
        ],


        [
            "Windows is a?",
            "Operating system",
            "Browser",
            "Game",
            "Database",
            "Operating system",
            "easy"
        ],


        [
            "Chrome is a?",
            "Browser",
            "Printer",
            "CPU",
            "Keyboard",
            "Browser",
            "easy"
        ],


        [
            "File ending .docx belongs to?",
            "Word",
            "Excel",
            "PowerPoint",
            "Access",
            "Word",
            "easy"
        ],


        [
            "File ending .xlsx belongs to?",
            "Excel",
            "Word",
            "Access",
            "Paint",
            "Excel",
            "easy"
        ],


        [
            "File ending .pptx belongs to?",
            "PowerPoint",
            "Word",
            "Excel",
            "Access",
            "PowerPoint",
            "easy"
        ],


        [
            "Deleted files go to?",
            "Recycle Bin",
            "CPU",
            "RAM",
            "BIOS",
            "Recycle Bin",
            "easy"
        ],


        [
            "USB is used for?",
            "Data transfer",
            "Cooling",
            "Printing only",
            "Typing",
            "Data transfer",
            "easy"
        ],


        [
            "Internet connects?",
            "Computers worldwide",
            "Only printers",
            "Only monitors",
            "Only phones",
            "Computers worldwide",
            "easy"
        ],


        [
            "Folder stores?",
            "Files",
            "CPU",
            "RAM",
            "Screen",
            "Files",
            "easy"
        ],


        [
            "Password protects?",
            "Account",
            "Monitor",
            "Mouse",
            "Printer",
            "Account",
            "easy"
        ],


        [
            "Save command stores?",
            "Changes",
            "Deletes",
            "Formats",
            "Restarts",
            "Changes",
            "easy"
        ],


        [
            "Caps Lock changes?",
            "Letters to uppercase",
            "Volume",
            "Brightness",
            "Internet",
            "Letters to uppercase",
            "easy"
        ],


        [
            "Speaker produces?",
            "Sound",
            "Text",
            "Images",
            "Files",
            "Sound",
            "easy"
        ],


        [
            "Camera is an?",
            "Input device",
            "Output device",
            "Storage",
            "Software",
            "Input device",
            "easy"
        ],


        [
            "Touchscreen is?",
            "Input and output",
            "Only storage",
            "Only CPU",
            "Only printer",
            "Input and output",
            "easy"
        ]

    ];



    questions.forEach(q => {

        add.run(
            q[0], q[1], q[2], q[3], q[4], q[5], q[6]
        );

    });


    console.log("Questions added");

}
// =====================
// MEDIUM + HARD QUESTIONS
// =====================


const moreQuestions = [


    // ========== MEDIUM 30 ==========


    [
        "Ctrl + C means?",
        "Copy",
        "Paste",
        "Undo",
        "Save",
        "Copy",
        "medium"
    ],

    [
        "Ctrl + V means?",
        "Paste",
        "Copy",
        "Cut",
        "Print",
        "Paste",
        "medium"
    ],

    [
        "Ctrl + X means?",
        "Cut",
        "Copy",
        "Save",
        "Open",
        "Cut",
        "medium"
    ],

    [
        "Ctrl + Z means?",
        "Undo",
        "Redo",
        "Save",
        "Delete",
        "Undo",
        "medium"
    ],

    [
        "Ctrl + S means?",
        "Save",
        "Copy",
        "Paste",
        "Print",
        "Save",
        "medium"
    ],

    [
        "Excel formulas start with?",
        "=",
        "#",
        "@",
        "&",
        "=",
        "medium"
    ],

    [
        "SUM function does?",
        "Adds values",
        "Deletes values",
        "Sorts files",
        "Prints",
        "Adds values",
        "medium"
    ],

    [
        "AVERAGE gives?",
        "Mean",
        "Highest",
        "Lowest",
        "Text",
        "Mean",
        "medium"
    ],

    [
        "MAX gives?",
        "Highest value",
        "Lowest value",
        "Average",
        "Count",
        "Highest value",
        "medium"
    ],

    [
        "MIN gives?",
        "Lowest value",
        "Highest value",
        "Average",
        "Text",
        "Lowest value",
        "medium"
    ],

    [
        "Database stores?",
        "Organized data",
        "Music",
        "Games",
        "Videos",
        "Organized data",
        "medium"
    ],

    [
        "Primary key must be?",
        "Unique",
        "Repeated",
        "Empty",
        "Random",
        "Unique",
        "medium"
    ],

    [
        "Mail Merge creates?",
        "Many documents",
        "Games",
        "Movies",
        "Music",
        "Many documents",
        "medium"
    ],

    [
        "LAN means?",
        "Local Area Network",
        "Large Area Network",
        "Long Area Network",
        "Line Network",
        "Local Area Network",
        "medium"
    ],

    [
        "WAN means?",
        "Wide Area Network",
        "Web Area Network",
        "Wireless Number",
        "Windows Area Network",
        "Wide Area Network",
        "medium"
    ],

    [
        "IP address identifies?",
        "Device",
        "Folder",
        "File",
        "Printer",
        "Device",
        "medium"
    ],

    [
        "Browser is used to?",
        "Open websites",
        "Print papers",
        "Repair CPU",
        "Create RAM",
        "Open websites",
        "medium"
    ],

    [
        "URL means?",
        "Uniform Resource Locator",
        "User Record Link",
        "Universal Run List",
        "Unit Resource Line",
        "Uniform Resource Locator",
        "medium"
    ],

    [
        "Backup prevents?",
        "Data loss",
        "Typing",
        "Printing",
        "Browsing",
        "Data loss",
        "medium"
    ],

    [
        "Firewall protects?",
        "Network",
        "Keyboard",
        "Mouse",
        "Screen",
        "Network",
        "medium"
    ],

    [
        "Cloud storage means?",
        "Online storage",
        "CPU storage",
        "RAM storage",
        "Keyboard storage",
        "Online storage",
        "medium"
    ],

    [
        "Virus is?",
        "Malware",
        "Hardware",
        "Folder",
        "Browser",
        "Malware",
        "medium"
    ],

    [
        "Strong password contains?",
        "Letters numbers symbols",
        "Only name",
        "Only numbers",
        "Only letters",
        "Letters numbers symbols",
        "medium"
    ],

    [
        "Access tables store?",
        "Records",
        "Slides",
        "Pictures",
        "Music",
        "Records",
        "medium"
    ],

    [
        "PowerPoint slide change is?",
        "Transition",
        "Formula",
        "Database",
        "Folder",
        "Transition",
        "medium"
    ],

    [
        "Word page direction is?",
        "Orientation",
        "Animation",
        "Formula",
        "Query",
        "Orientation",
        "medium"
    ],

    [
        "Excel rows are?",
        "Horizontal",
        "Vertical",
        "Folders",
        "Files",
        "Horizontal",
        "medium"
    ],

    [
        "Excel columns are?",
        "Vertical",
        "Horizontal",
        "Pages",
        "Slides",
        "Vertical",
        "medium"
    ],

    [
        "Outlook manages?",
        "Emails",
        "Games",
        "Videos",
        "Pictures",
        "Emails",
        "medium"
    ],

    [
        "Merging cells means?",
        "Joining cells",
        "Deleting cells",
        "Printing cells",
        "Copying files",
        "Joining cells",
        "medium"
    ],




    // ========== HARD 30 ==========


    // ========== HARD 30 ==========



    [
        "CPU speed is measured in?",
        "GHz",
        "Bytes",
        "Pixels",
        "Volts",
        "GHz",
        "hard"
    ],

    [
        "RAM is called volatile because?",
        "It loses data when power is off",
        "It stores forever",
        "It is software",
        "It is a virus",
        "It loses data when power is off",
        "hard"
    ],

    [
        "Operating system manages?",
        "Hardware and software resources",
        "Only games",
        "Only files",
        "Only internet",
        "Hardware and software resources",
        "hard"
    ],

    [
        "HTTP stands for?",
        "HyperText Transfer Protocol",
        "High Transfer Text Program",
        "Hyper Tool Transfer Process",
        "Home Text Transfer Protocol",
        "HyperText Transfer Protocol",
        "hard"
    ],

    [
        "HTTPS adds?",
        "Security encryption",
        "More storage",
        "Faster CPU",
        "More RAM",
        "Security encryption",
        "hard"
    ],

    [
        "DNS converts?",
        "Domain names to IP addresses",
        "Files to folders",
        "RAM to ROM",
        "Text to images",
        "Domain names to IP addresses",
        "hard"
    ],

    [
        "SQL is used for?",
        "Managing databases",
        "Editing photos",
        "Making music",
        "Playing games",
        "Managing databases",
        "hard"
    ],

    [
        "HTML is used to create?",
        "Web pages",
        "Databases",
        "Operating systems",
        "Viruses",
        "Web pages",
        "hard"
    ],

    [
        "CSS controls?",
        "Web page styling",
        "Database storage",
        "Computer power",
        "Internet speed",
        "Web page styling",
        "hard"
    ],

    [
        "JavaScript adds?",
        "Interactivity",
        "Hardware",
        "RAM",
        "Power supply",
        "Interactivity",
        "hard"
    ],

    [
        "API allows?",
        "Software communication",
        "Printing only",
        "Storage only",
        "Gaming only",
        "Software communication",
        "hard"
    ],

    [
        "Encryption changes data into?",
        "Unreadable format",
        "Image format",
        "Audio format",
        "Folder format",
        "Unreadable format",
        "hard"
    ],

    [
        "Decryption means?",
        "Converting encrypted data back",
        "Deleting files",
        "Formatting disk",
        "Installing software",
        "Converting encrypted data back",
        "hard"
    ],

    [
        "Trojan horse is?",
        "Fake software malware",
        "Hardware device",
        "Printer type",
        "Browser",
        "Fake software malware",
        "hard"
    ],

    [
        "Spyware secretly?",
        "Monitors users",
        "Repairs computers",
        "Improves speed",
        "Creates RAM",
        "Monitors users",
        "hard"
    ],

    [
        "VPN provides?",
        "Private network connection",
        "More RAM",
        "CPU upgrade",
        "Free storage",
        "Private network connection",
        "hard"
    ],

    [
        "Router forwards?",
        "Network packets",
        "Pictures",
        "Documents",
        "Passwords",
        "Network packets",
        "hard"
    ],

    [
        "Switch connects?",
        "Devices in a network",
        "Only monitors",
        "Only printers",
        "Only CPUs",
        "Devices in a network",
        "hard"
    ],

    [
        "MAC address identifies?",
        "Network device",
        "File",
        "Folder",
        "Website",
        "Network device",
        "hard"
    ],

    [
        "SSD is faster than HDD because?",
        "No moving parts",
        "It uses paper",
        "It has a fan",
        "It uses cables",
        "No moving parts",
        "hard"
    ],

    [
        "Compiler converts?",
        "Source code to machine code",
        "Images to videos",
        "Files to folders",
        "Text to sound",
        "Source code to machine code",
        "hard"
    ],

    [
        "Algorithm is?",
        "Step-by-step solution",
        "Computer virus",
        "Hardware part",
        "File type",
        "Step-by-step solution",
        "hard"
    ],

    [
        "Firewall works by?",
        "Filtering network traffic",
        "Creating files",
        "Playing videos",
        "Charging battery",
        "Filtering network traffic",
        "hard"
    ],

    [
        "Database index improves?",
        "Search speed",
        "Screen quality",
        "Sound",
        "Typing",
        "Search speed",
        "hard"
    ],

    [
        "Cloud computing uses?",
        "Remote servers",
        "Keyboard memory",
        "Printer ink",
        "CPU fan",
        "Remote servers",
        "hard"
    ],

    [
        "Open source software means?",
        "Source code is available",
        "It is always paid",
        "It is hardware",
        "It cannot change",
        "Source code is available",
        "hard"
    ],

    [
        "Two-factor authentication uses?",
        "Two verification methods",
        "Two computers",
        "Two keyboards",
        "Two screens",
        "Two verification methods",
        "hard"
    ],

    [
        "Backup is important for?",
        "Data recovery",
        "Gaming",
        "Typing",
        "Cooling",
        "Data recovery",
        "hard"
    ],

    [
        "Phishing usually happens through?",
        "Fake messages/websites",
        "RAM",
        "CPU",
        "Keyboard",
        "Fake messages/websites",
        "hard"
    ],

    [
        "Machine learning allows computers to?",
        "Learn from data",
        "Replace electricity",
        "Increase monitor size",
        "Create hardware",
        "Learn from data",
        "hard"
    ]



];



moreQuestions.forEach(q => {

    db.prepare(`

INSERT INTO questions
(question,a,b,c,d,answer,difficulty)

VALUES(?,?,?,?,?,?,?)

`).run(
        q[0],
        q[1],
        q[2],
        q[3],
        q[4],
        q[5],
        q[6]
    );

});
// =====================
// ROUTES
// =====================



app.get("/", (req, res) => {

    res.render("home");

});





app.get("/register", (req, res) => {

    res.render("register");

});






app.post("/register", (req, res) => {

    const user = db.prepare(`
        INSERT INTO users(name,phone)
        VALUES(?,?)
    `).run(
        req.body.name,
        req.body.phone
    );


    const student = db.prepare(
        "SELECT * FROM users WHERE id=?"
    ).get(user.lastInsertRowid);



    let questions = db.prepare(`
        SELECT *
        FROM questions
        WHERE difficulty=?
        ORDER BY RANDOM()
        LIMIT 30
    `).all(req.body.mode);



    questions = questions.map(q => {


        let options = shuffle([
            q.a,
            q.b,
            q.c,
            q.d
        ]);


        return {
            ...q,
            a: options[0],
            b: options[1],
            c: options[2],
            d: options[3]
        };


    });



    res.render("exam", {
        student,
        questions,
        mode: req.body.mode
    });


});


app.post("/exam", (req, res) => {

    let score = 0;

    // ONLY numeric keys (question IDs)
    let questionIds = Object.keys(req.body).filter(key => !isNaN(key));

    questionIds.forEach(id => {

        const q = db.prepare(`
            SELECT *
            FROM questions
            WHERE id=?
        `).get(id);

        if (q && req.body[id] === q.answer) {
            score++;
        }
    });

    let total = questionIds.length;

    let percentage = Math.round((score / total) * 100);

    res.render("result", {
        score,
        total,
        percentage
    });

});


const PORT = process.env.PORT || 3000;



app.listen(PORT, () => {


    console.log(
        "Server running on " + PORT
    );


});