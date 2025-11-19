import { useState } from "react";
import styles from './../css/NotesForm.module.css'

const NotesForm = ({listnotes, setlistNotes})=>{
        const [note,setNote]=useState('')
        const[priority,setPriority] = useState ('')
        const[errores, setErrores] = useState({note: '', priority: ''})
    
        const addNote =(e)=>{
            e.preventDefault()
            const errorCopy = {...errores}
            !note? errorCopy.note = "empty input ": errorCopy.note = '';
            !priority? errorCopy.priority = "no selecction"  : errorCopy.priority= '';
            if (!note || !priority){
                setErrores(errorCopy)
                return;
            }

            setlistNotes([...listnotes, {note, priority}])
            setNote('')
            setPriority('')
            setErrores({note: '', priority: ''})
        }

    return(
        <div>
            <form onSubmit={(e)=> addNote(e)}>
                <div>
                    <input type="text" placeholder="Escribe tus notas!" name="note" id={styles.note} value={note} onChange={e=> setNote(e.target.value)}/>
                    {errores.note && <p style={{color:"red"}} >{errores.note} </p> }
                </div>
                <div>
                    <select name="priority" id={styles.priority} value={priority} onChange={e=> setPriority(e.target.value) } >
                        <option value="---">---</option>
                        <option value="High">High</option>
                        <option value="Medium"> Medium </option>
                        <option value="Low"> Low </option>
                    </select>
                    {errores.priority && <p style = {{color: "red"}} >{errores.priority}</p>}
                </div>
                <button className={`btn btn-primary ${styles.addBtn}`}>  Agrega Nota</button>
            </form>
        </div>
    )}

export default NotesForm;