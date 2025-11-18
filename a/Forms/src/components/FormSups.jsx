import { useState } from "react"

const FormSups= ()=>{

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const[limkImg, setLinkImg] = useState("")
    return(
        <form>
            <div className="mb-3"> 
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" />
            </div>
            
            <div>
                <label htmlFor="description">description:</label>
                <input type="text" name="description" id="description" />
            </div>
            
            <div>
                <label htmlFor="linkImg">linkImg:</label>
                <input type="text" name="linkImg" id="linkImg" />
            </div>
            <div>
                <button className="btn btn-success" > Agregar super </button>
            </div>
        </form>
    )
}
export default FormSups