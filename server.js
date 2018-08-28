// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Resrevation tables (DATA)
// =============================================================
var tables = [
    {
        customerName: "Spencer Vigil",
        phoneNumber: "6823651637",
        customerEmail: "spencervigil27@gmail.com",
        customerID: "+6265"
    },
    {
        customerName: "Bob Marley",
        phoneNumber: "4205981568",
        customerEmail: "nowomannocry",
        customerID: "Peace"
    }
];



// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    // res.send("Welcome to the Reservation Page!")
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/view", function (req, res) {
    // res.send("Welcome to the Reservation Page!")
    res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/make", function (req, res) {
    // res.send("Welcome to the Reservation Page!")
    res.sendFile(path.join(__dirname, "make.html"));
});

// Displays all tables
app.get("/api/tables", function (req, res) {
    return res.json(tables);
});

// Displays a single table, or returns false
app.get("/api/tables/:table", function (req, res) {
    var chosen = req.params.table;

    console.log(chosen);

    for (var i = 0; i < tables.length; i++) {
        if (chosen === tables[i].routeName) {
            return res.json(tables[i]);
        }
    }

    return res.json(false);
});

// Create New tables - takes in JSON input
app.post("/api/tables", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newtable = req.body;

    console.log(newtable);

    // We then add the json the user sent to the table array
    tables.push(newtable);

    // We then display the JSON to the users
    res.json(newtable);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
