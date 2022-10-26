
import { useState } from 'react';
import './App.css';
// import Mail from '../public/email.svg'
import Inbox from './svg/inbox.svg'


const tabsInfo = [
  {
    label: "Inbox",
    value: 'inbox'
  },
  {
    label: "Sent",
    value: 'sent'
  },
  {
    label: "Spam",
    value: 'spam'
  },
  {
    label: "Starred",
    value: 'starred'
  }
]

function Sidebar({isNavShrinked, handleNavWidth, selectedTab, handleTabSelection }) {

  return (
    <div className={isNavShrinked? 'sidebar bg folded' : 'sidebar bg'}>
      {tabsInfo.map((tab) => (
        <div className={selectedTab === tab.value ? 'd-center nav-item selected' : 'd-center nav-item'} 
        onClick={() => {handleTabSelection(tab.value)}} 
        key = {tab.value}
        onMouseOver={() => { handleNavWidth(false)}}
        >
          <img src={Inbox} width="20" height="20" />
          {!isNavShrinked && <div style={{marginLeft:"8px"}}>{tab.label}</div>}
        </div>
      ))}
    </div>
  );
}

export default Sidebar;