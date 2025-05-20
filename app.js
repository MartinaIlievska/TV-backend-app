const express = require("express");
const db = require("./pkg/database/index");
const app = express();



const TVControler = require("./controler/tvControler");
const vraboteni = require("./controler/vrboteniControler")
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.use(express.static("public"));

db.init();

app.get("/api/v1/TV", TVControler.getAllTv);
app.get("/api/v1/TV/:id", TVControler.getTVById);
app.post("/api/v1/TV", TVControler.createTv);
app.patch("/api/v1/TV/:id", TVControler.updateTV);
app.delete("/api/v1/TV/:id", TVControler.deleteTV);

app.get("/api/v1/vraboteni", vraboteni.getAllVraboteni);
app.get("/api/v1/vraboten/:id", vraboteni.getVraboten);
app.post("/api/v1/vraboten", vraboteni.addVraboten);
app.patch("/api/v1/vraboten/:id", vraboteni.updateVraboten);
app.delete("/api/v1/vraboten/:id", vraboteni.deleteVraboten);


app.listen(process.env.PORT, (err) => {
  if (err) {
    return console.log("could not start service");
  }
  console.log(`service started successfully on port ${process.env.PORT}`);
});
