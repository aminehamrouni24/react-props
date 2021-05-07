import './App.css';
import {  Profile } from './Profile/Profile';
import myPhoto from './Profile/img/myPhoto.jpg';
function App() {
  const handleName = (name)=>{
  window.alert(`You are browsing ${name} profile`)
  
  }
  return (
    <div className="App">
    <div>
    <Profile handleName={handleName}
    name="Amine Hamrouni"
    description ="I am a future FullStacks JS Developper"
    subTitle ="This is My Bio "
    introToMyCareer={[
    "2010 : Bachelor degree",
    "2013 : IT Network Data Licence with Network-Installing Speciality",
    "2015 : BTS degree in Installing Networks ",
    "2016 : Linux Level 1 Certificate",
    "2017 : Microsoft Office 365 Certificate ",
    "2018 : Windows Server 2012 Certificate",
    "2019 : SEO Certificate",
    "2020 : CCNA Routing & Switching Certificate/All Levels"
    ]}
    profession ="I have 5 years of experience in administrating networks ,
most of the time what i do is installing and configuring computer networks and systems,
identifying and solving any problems that arise with computer networks and systems,
consulting with clients to specify system requirements and design solutions,
budgeting for equipment and assembly costs,
assembling new systems,
maintaining existing software and hardware and upgrading any that have become obsolete,
monitoring computer networks and systems to identify how performance can be improved,
working with IT support personnel,
providing network administration and support.">
    <div>
        <img src={myPhoto} alt ="it's me"/>
    </div>

   
    </Profile>
    </div>
    
     
    </div>
  );
}

export default App;
