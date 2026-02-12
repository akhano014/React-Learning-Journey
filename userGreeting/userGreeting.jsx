import Styles from "./userGreeting.module.css"
import PropTypes from "prop-types"

function UserGreeting(props){
    const welcomemsg = <h1 className={Styles.welcomemsg}>Welcome {props.username} </h1> 
    const tryagianmsg= <h2 className={Styles.tryagainmsg}>Please Try again Thank you</h2>

    return(props.isLoggedin ? welcomemsg: tryagianmsg );
}

UserGreeting.PropTypes{
    welcomemsg:PropTypes.bool
    tryagainmsg:PropTypes.string
}

UserGreeting.defaultProps{
    isLoggedin:false
    username:"Guest"
}
export default UserGreeting 