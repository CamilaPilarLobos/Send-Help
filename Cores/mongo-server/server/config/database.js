import { connect } from "mongoose";
import dotenv from 'dotenv'

dotenv.config()
const BD = process.env.BD;
const toConnectToBd = async ( )=> {
    try {
        await connect (BD)
        console.log ('the bd is up and conected')
    } catch (e){
        console.log ('the bd had issues',e)
    }
}
export default toConnectToBd;