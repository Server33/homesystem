var PORT = process.env.PORT || 3000;

const io = require("socket.io")(PORT);

io.on("connection", function (socket) {
    
    //socket.emit("addFinger",'{"type":"changeMod","currentMod":"addFinger","fingerId":"2"}');
    socket.on("chipMessage",(msg) =>{
        socket.emit("herokuApp","connection success");
    });
    socket.on("appMessage",(msg)=>{
        socket.emit("herokuApp","connection success");
        
    })
})

io.on("disconnect",()=>{
    console.log("disconnect");
})