var PORT = process.env.PORT || 3000;

const io = require("socket.io")(PORT);

io.on("connection", function (socket) {
    console.log("A user connected");
    //socket.emit("addFinger",'{"type":"changeMod","currentMod":"addFinger","fingerId":"2"}');
    socket.on("chipMessage",(msg) =>{
        console.log(msg.fingerId);
    });
})

io.on("disconnect",()=>{
    console.log("disconnect");
})