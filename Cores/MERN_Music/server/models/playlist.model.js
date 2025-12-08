import mongoose from 'mongoose';
import {songsSch} from './songs.model.js';

const playlistSchema = mongoose.Schema(
    {
        name :{
            type : String,
            required : [true, 'El nombre es obligatorio'],
            unique : true
        },
        songs : [songsSch]
    },
    {timestamps : true}
)

const Playlist = mongoose.model("Playlist", playlistSchema);
export default Playlist;
