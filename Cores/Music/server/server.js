import express from 'express'
import {faker} from '@faker-js/faker'

const app = express()
const PORT = process.env.PORT || 8080;


const generarCancion = () => {
    return{
        id: faker.string.uuid(), //genera id unico 
            titulo: faker.music.songName(),
            artista: faker.person.fullName(),
            album: faker.lorem.words(2),
            duracion: `${faker.number.int({ min: 2, max: 5})}: ${faker.number.int({ min: 0, max: 59}).toString().padStart(2,'0')}`,
            genero: faker.music.genre(), 
            fechaLanzamiento: faker.date.past().toISOString().split('T')[0]    
    }
}

const generarPlaylist = () => {
    const cantidadCanciones = faker.number.int({ min: 3, max:10});
    const canciones = [];

    for (let i = 0; i < cantidadCanciones; i++){
    canciones.push(generarCancion());
}

return{
    idPlaylist: faker.string.uuid(),
    nombre: faker.lorem.words(2),
    descripcion: faker.lorem.sentence(),
    canciones: canciones,
    creador: faker.person.fullName(),
    fechaCreacion: faker.date.past().toISOString().split('T')[0] }
}



app.get('/api/cancion', (req, res) => {
    const cancion = generarCancion();
    res.json(cancion)
})
app.get ('/api/playlist', (req, res) => {
    const playlist = generarPlaylist();
    res.json(playlist)
})
app.listen (PORT, () => {
    console.log(`El servidor está activo en el puerto: ${PORT}`);
})