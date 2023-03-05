import './App.css';
import profilepic from './LinkedInPic.jpg'

const NavBar = () => {
  return(
    <div className = 'Navbar'>
      <h1 className ='Header'>PY</h1>
      <div className='Header_Container'>
        
          <div className='List'> Home </div>
          <div className='List'> About Me</div>
          <div className='List'> Resume </div>
          <div className='List'> Projects</div>
        
      </div>
    </div>

  )
}
const Introduction = () => {
  return (
    <div className='Intro'>
      <div className='Intro_Words'>
        <h4>Hello! My name is</h4>
        <h1>Philip Yi</h1>
        <p>
          I am a student at Duke University majoring in Electrical & Computer Engineering
          and Computer Science. I am interested in Robotics, Full-Stack Development, Machine Learning, 
          and many other topics!
        </p>
      </div>
      
      <div className='profilePic'>
        <img src = {profilepic} alt = "picture of me!" className='profilePic'></img>
      </div>
    </div>
  );
}
const App = () => {
  return(
    <div className='App'>
      <NavBar />
      <Introduction />
    </div>
  )
}


export default App;
