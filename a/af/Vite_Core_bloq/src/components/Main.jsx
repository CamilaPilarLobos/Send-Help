import styles from './../css/Main.module.css'
import Advertisement from './Advertisement.jsx';
import SubContent from './SubContent.jsx';


const Main = ()=> {
    return <div className={styles.main}>
        < SubContent /> 
        < SubContent />
        < SubContent /> 
        < Advertisement />
    </div>
}

export default Main;