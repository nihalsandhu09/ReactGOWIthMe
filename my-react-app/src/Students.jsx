// {/* now its time to learn props - props are read only properties that are shared between components, A parent component can send datat to a child component
{/* < Component Key = value> */} 
{/* proptypes =  a mechanism that ensure that the passed value is of  the correct datatype > age : PropTypes.number */}

// DefaultProps = default values for props in case they are not passed from the parent component 
// name : "guest"

import PropTypes from 'prop-types'
function Student(props){

    return(
        <div className="Student"> 
            <p>Name : {props.name}</p>
            <p>Age : {props.age}</p>
            <p>Student : {props.isStudent ? "yes" : "No"}</p>
        </div>
    )
}
Student.propTypes = {
name : PropTypes.string,
age : PropTypes.number,
isStudent : PropTypes.bool,
}
Student.defaultProps = {
    name : "Guest",
    age : 0,
    isStudent : false,
}
export default Student