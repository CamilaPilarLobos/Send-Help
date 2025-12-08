import express from 'express'
import dotenv from 'dotenv'
import toConnectToBd from './config/database.js'
import songsRoutes from './routes/songs.Routes.js'
import playlistRoutes from './routes/playlist.routes.js'
import cors from 'cors'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 8090;

//middlware

app.use (express.json ())
app.use (express.urlencoded({extended : true}));
app.use(cors())

toConnectToBd()

app.use('/api/canciones', songsRoutes );
app.use('/api/playlist', playlistRoutes);

app.listen(PORT,()=> {
    console.log (`The bd is up and connected ${PORT} `)
})