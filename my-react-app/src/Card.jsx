import profilePic from './assets/Profile.jpg'
function Card(){
return(
    <div className="card">

    <img className='Image' src= {profilePic} alt="Profile Picture"></img>
    <h2 className='card-title'>Nihal Sandhu</h2>
    <p className='card-text'>I am MCA Student and Learning React and I love TO play FootBall . </p>
    </div>
)
}
export default Card