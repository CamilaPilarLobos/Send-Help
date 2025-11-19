import { useState } from "react";

const SupForm = ({listaSups,setlistaSups}) =>{
    const arrayData ={
        name:"",
        lastName:"",
        email:"",
        password:"",
        passwordConfirm:""
    }

    const [state,setState] = useState(arrayData)
    const[errors,setErrors] = useState(arrayData)
    
    const updateState = (e) =>{
        setState({...state, [e.target.name]: e.target.value})
        console.log(e.target.type)
    }
    const crearSup= (e)=>{
        e.preventDefault();
        const errorsCopy = {...errors}
        state.name.length < 4? (errorsCopy.name = "the element should have more than 4 characters"):  (errorsCopy.name ="");
        state.lastName.length <4? (errorsCopy.lastName = "the element should have more than 4 characters"): (errorsCopy.lastName="")
        state.password != state.passwordConfirm ? (errorsCopy.passwordConfirm = 'the password confirm is not the same as the password') : (errorsCopy.passwordConfirm='');
        state.email.length < 10 || !state.email.includes('@')? (errorsCopy.email = "the email sould have an @"): (errorsCopy.email='');
        
        state.password.length < 12? (errorsCopy.password = "The password should have at least 12 characters"): (errorsCopy.password ='');
        if (errorsCopy.name|| errorsCopy.lastName|| errorsCopy.email|| errorsCopy.password|| errorsCopy.passwordConfirm){
                setErrors (errorsCopy)
                return;
        }

        setlistaSups([...listaSups, state])
        setState(arrayData)
        setErrors(arrayData)
    } 

    return(
        <> 
        <h3>Registro de superHeroes</h3>
        <form onSubmit={(e)=> crearSup(e)}>
            <div>
                <label htmlFor="name">Name:</label>
                <input className="input-group-text" type="text" id="name" name="name" value={state.name} onChange={(e)=>updateState(e)}/>
                {errors.name && <p style={{color: "red"}}>{errors.name} </p>}
            </div>
            <div>
                <label htmlFor="lastName">Last Name:</label>
                <input className="input-group-text" type="text" id="lastName" name="lastName" value={state.lastName}  onChange={(e)=> updateState(e) }/>
                {errors.lastName && <p style={{color: "red"}}>{errors.lastName}</p>}
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input className="input-group-text" type="email" id="email" name="email" value={state.email} onChange={(e)=>updateState(e)}/>
                {errors.email && <p style={{color: "red"}}>{errors.email}</p>}
            </div>
            <div>
                <label htmlFor="password"> Password:</label>
                <input className="input-group-text" type="password" id="password" name="password" value={state.password} onChange={(e)=>updateState(e)}/>
                {errors.password && <p style={{color: "red"}}>{errors.password}</p>}
            </div>
            <div>
                
                <label htmlFor="passwordConfirm">Password confirmation:</label>
                <input className="input-group-text" type="password" id="passwordConfirm" name="passwordConfirm" value={state.passwordConfirm}  onChange={(e)=> updateState(e) }/>
                {errors.passwordConfirm && <p style={{color: "red"}}>{errors.passwordConfirm}</p>}
            </div>
            <button className="btn btn-primary"> Add Superhero </button>
        </form>
        </>
    )
}

export default SupForm;