import { mongoose } from "mongoose";

const songsSch =  mongoose.Schema(
    {
        title : {
            type : String,
            minLength : [6, "short"],
            maxLength : [255, "too long "],
            required : [true, "obligatory titel"]
        },
        artist : {
            type: String,
            required : [ true, "add artist"],
            minLength : [10, " minimum 10"],
            maxLength : [255, " your name is  too long "]
        },
        yearOfRealease : {
            type: Number,
            required: [true, "the year is obligatory"],
            min: [1900, "Thats Old, very old"],
            max : [2026, "thats imposible sir"]
        },
        genero: {
            type: String,
            required: [true, "you have to git it a genra"]
        }
    },
        {timestamps: true}
)

const Songs = mongoose.model ('songs', songsSch)
export default Songs;