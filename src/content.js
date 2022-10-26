
import { createRef, useEffect, useState } from 'react';
import './App.css';


const view = {
  inbox : {
    subTabs: [{
     name: "Primary",
     key: "primary"
    },
    {
     name: "Updates",
     key: "updates"
    },
    {
      name: "Social",
      key: "social"
    }
   ]

  },
  sent: {
    subTabs: []
  },
  spam: {
    subTabs: []
  },
  starred: {
    subTabs: []
  }

}

function Content({ selectedTab }) {
 let [activeSubtab, setSelectedSubtab] = useState("primary")
 let [content, setContent] = useState({ isLoading : false, data: []});
 let {subTabs} = view[selectedTab];

 useEffect(() => {
  fetchData()
  return () => {
    setSelectedSubtab('primary')
  }
 }, [selectedTab])

 async function fetchData() {
  setContent({isLoading: true, data : []})
  let response = await fetch('https://official-joke-api.appspot.com/jokes/ten')
  let data = await response.json();
  setContent({isLoading: false, data})
 }

 function handleSubTabchange(key) {
  setSelectedSubtab(key);
  fetchData();
 }

  return (
    <div  style={{width: "100%"}}>
      <div className='d-flex'>
        {subTabs && subTabs.map((tab) => (
          <div className={`subtab pointer ${activeSubtab === tab.key? 'active' : ''}`}
          onClick={() => {handleSubTabchange(tab.key)}} 
          key = {tab.key}
          >
            {tab.name}
          </div>
        ))}
      </div>
      <div>
      {content.isLoading ? 
      <div className={"row"} style={{textAlign: "center", borderBottom: "none"}}>...Loading</div>
      : content.data.map((row) => (
        <div key={`${row.punchline} ${row.index}`} className='d-flex row pointer'>
          <div>{row.type}</div>
          <div>{row.setup}</div>
          <div>{row.punchline}</div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Content;