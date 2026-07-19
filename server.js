import "dotenv/config"
import express from "express";

const app = express();


app.get("/", (req, res)=> {
  res.json("hlo from server with aws")
})


const PORT =process.env.PORT || 5000;


app.listen(PORT, ()=>{
  console.log(`SERVER is running at : ${PORT}`)
})