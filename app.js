const express = require("express");
const bodyParser = require("body-parser")
const cors = require("cors");
const firebase = require("firebase");
firebase.initializeApp({
    apiKey: "AIzaSyCfVjffRf4G4F70UknHrTG9KDsh-oKH5MU",
    authDomain: "tesis-lglm.firebaseapp.com",
    databaseURL: "https://tesis-lglm.firebaseio.com",
    projectId: "tesis-lglm",
    storageBucket: "tesis-lglm.appspot.com",
    messagingSenderId: "333047728070"
});
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/transporte/:placa", async (req, res) => {
    try{
        const {
            query: { lat,lon,hour,date }
        } =req;
        const data = await firebase
            .database()
            .ref(`transportes/${placa}`)
            .update({
                lat,
                lon,
                hour,
                date
            });
            res.jason({ data, success: true});
    } catch (e) {
        res.json({ e,success: false});
    }
});

app.get("/", (req, res) => {
    res.send("API Welcome");
});

const port = process.env.PORT || 3000

app.listen(port, (req, res) => {
    console.log(`running on port ${port}`);
});