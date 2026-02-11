

function userGreeting(props){
    return(props.isLoggedin ? <h1>Welcome {props.username} </h1> : <h2>Please Try again Thank you</h2>);
}

export default userGreeting 