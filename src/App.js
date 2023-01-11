import './App.css';
import React from 'react';
import Profile from './Profile/ProfileComponent/Profile';
import img1 from './images/mohamedFelah.jpg';


function App() {
  const styleObject = {color:"blue"}
  const handleName = name => 
  alert(`
  hello : ${name}
  `);
  
  return (
      <div style ={styleObject}>
        <Profile><img src = {img1} alt = "logo"></img> {handleName}</Profile>
      </div>
  
   
  );
}



export default App;
