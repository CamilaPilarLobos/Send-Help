const Filter = ({filter, setFilter}) => {

return(
    <select name="priority"
    id="priority" 
    className="form-select"
    value={filter} 
    onChange= {(e)=> setFilter (e.target.value) } >
    <option value="---">---</option>
    <option value="High">High</option>
    <option value="Medium"> Medium </option>
    <option value="Low"> Low </option>
    </select>
    )
};



export default Filter;
