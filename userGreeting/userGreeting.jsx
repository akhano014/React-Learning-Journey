import Styles from "./userGreeting.module.css"

function UserGreeting(props){
    return(props.isLoggedin ? <h1 className={Styles.welcomemsg}>Welcome {props.username} </h1> : <h2 className={Styles.tryagainmsg}>Please Try again Thank you</h2>);
}

export default UserGreeting 