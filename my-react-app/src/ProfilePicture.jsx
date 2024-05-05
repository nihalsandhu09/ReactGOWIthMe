
import profilePic from './assets/Profile.jpg'

function ProfilePicture(){
const handleClick =(e)=> e.target.style.display = "none";
    // const imageUrl = './src/assests/Profile.jpg'
return(<img className='Image' onClick={(e) => handleClick(e) } src={profilePic} ></img>);
}
export default ProfilePicture