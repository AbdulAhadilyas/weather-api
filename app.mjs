import express from "express";
import karachData from "./karachi.json" assert {type: 'json'}
import lahoreData from "./lahore.json" assert {type: 'json'}
import islamabadData from "./islamabad.json" assert {type: 'json'}
import balochistanData from "./balochistan.json" assert {type: 'json'}
import cors from "cors"
import path from "path";

const app = express();
app.use(cors())
let port = process.env.PORT || 3002;




app.get("/weather/:cityName", (req, res) => {
  if (req.params.cityName === "karachi") {
    res.send(karachData);
  } else if (req.params.cityName === "lahore") {
    res.send(lahoreData);
  }
  else if (req.params.cityName === "islamabad") {
    res.send(islamabadData);
  }
  else if (req.params.cityName === "balochistan") {
    res.send(balochistanData);
  }
});

app.listen(port);
