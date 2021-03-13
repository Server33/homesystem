window.onload = function () {
    var socket = io("http://192.168.188.120:3000");
    socket.emit("join-web","web1");
    socket.on("message",function (msg) {
        console.log(msg);
    });
    $(".btn").click(function () {
        socket.emit("changeToBluetooth","");
    });
    socket.on("web-test",function (msg) {
         console.log(msg);
    })

}