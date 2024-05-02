 // conditional rendring = allows you to control what gets rendered in your application based on certain conditions (show, hide  or change components)

import PropTypes from 'prop-types';

function UserGreeting(props){
 const welcomeMRssage =  <h2 className="welcome-message"> Welcome {props.username}</h2> 
 const LogInPrompt = <h2 className="LogIn-Prompt"> Please LOg in To Continue</h2> 
  return(props.isLoggedIn  ? welcomeMRssage :  LogInPrompt  )
    
}
UserGreeting.prototype = {
    isLoggedIn : PropTypes.bool,
    username : PropTypes.string,
}

UserGreeting.defaultProps = {
    idLoggedIn : false,
    username : "Guest",
}
export default UserGreeting