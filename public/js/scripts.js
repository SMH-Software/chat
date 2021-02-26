$(function sendMessage() {
    const socket = io()

    $("form").submit(function (e){
        e.preventDefault()

        socket.emit('chat message', $("#message").val())
        $("#message").val("")
        return false
    })

    socket.on('chat message', function(message){
        $("#msg").append($("<p>").text(message))
    })
})