/* FIRST TASK */
const express = require("express");
const app = express();

const router = require("./router");
const port = 3000;
/* FIRST TASK */
app.use(express.static("public")); //folder name to JS sstyle//
/* THIRD TASK */

/* SECOND TASK*/
app.set("views", "views");
//1st value needs to be views 2nd is the folder//
//Decirle a express qué template uso//
app.set("view engine", "ejs"); // 2nd value - pug ejs handlebar -//
//npm install ejs//
/* SECOND TASK*/

app.use("/", router);
app.listen(port);

/* FIRST TASK */
