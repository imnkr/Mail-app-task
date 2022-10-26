import { useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Content from './content'
import Mail from './svg/email.svg'
import Menu from './svg/menu.svg'

function App() {
  const [isNavShrinked, setNavShrink] = useState(false)
  const [selectedTab, setTabSelection] = useState("inbox")


  function handleNavWidth(value) {
    setNavShrink(value);
  }

  function handleTabSelection(tab) {
    setTabSelection(tab)
  }

  return (
    <div>
      <div style={{padding: "18px 35px"}} className="bg">
        <div className="d-center" style={{width:"15%"}}>
          <img src={Menu} width="30" height="30" className='pointer' onClick={() => { handleNavWidth(!isNavShrinked)}}/>
          <img src={Mail} width="30" height="30" style={{marginLeft: "20px"}}/>
          <div style={{marginLeft: "10px"}}>Gmail</div>
        </div>
      </div>
      <div className="app">
        <Sidebar 
         isNavShrinked={isNavShrinked}
         selectedTab={selectedTab}
         handleNavWidth={handleNavWidth}
         handleTabSelection={handleTabSelection}
         />
         <Content
           selectedTab={selectedTab}
         />
      </div>
   </div>
)
}

export default App;
