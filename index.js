const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const dotenv = require('dotenv')
dotenv.config()

app.set('view engine', 'ejs')
app.use(require('express').static("public"))

app.get('/', (req, res) => {
    res.render('index')
})

io.on('connection', (socket) => {
    console.log('Nouvelle utilisateur connecté.')

    socket.on('disconnect', () => {
        console.log('Utilisateur déconnecté')
    })

    socket.on('chat message', (message) => {
       io.emit('chat message', message)
    })
})


server.listen(process.env.PORT, () => console.log(`Server Runing on Port:http://localhost:${process.env.PORT}`))



