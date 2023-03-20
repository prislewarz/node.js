const { response } = require("express");
const express = require("express");
const app = express();
const port = 3000;

app.listen(port,()=>{
    console.log("서버가 정상적으로 실행되었습니다!");
});

app.get("/",(request,response)=>{
    response.send("성공입니다!");
});