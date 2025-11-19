import styles from  './../css/Note.module.css'

const Note = ({note, priority, setlistNotes, listnotes,index}) => {
    
    const deleteNote =()=>{
    setlistNotes (listnotes.filter((note,i)=> i!==index))}

    return(
        <div className={`border bg-light ${styles.noteCard}` } >
            <p className='mb-0' > {note} - <span className={priority=== "high"? styles.high : priority=="low"? styles.low: styles.medium} > {priority} </span> </p>
            <button className='btn btn-danger'  onClick={deleteNote}> Borrar </button>
        </div>
    )
} 
export default Note;

