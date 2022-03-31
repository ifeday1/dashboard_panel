import React from 'react'
import "./navbar.scss";
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import NightlightIcon from '@mui/icons-material/Nightlight';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import ChatIcon from '@mui/icons-material/Chat';
import ListIcon from '@mui/icons-material/List';



const navBar = () => {
  return (
    <div className='navbar'>
    <div className='wrapper'>
    <div className='search'>
    <input type="text" placeholder='Search...' />
    <SearchIcon/>
    </div>
    <div className='items'>
    <div className='item'>
    <LanguageIcon className='icon'/>
    English
    </div>
    <div className='item'>
    <NightlightIcon className='icon'/>
    
    </div>
    <div className='item'>
    <FullscreenExitIcon className='icon'/>
    
    </div>
    <div className='item'>
    <CircleNotificationsIcon className='icon'/>
    <div className='counter'>1</div>
    </div>
    <div className='item'>
    <ChatIcon className='icon'/>
    <div className='counter'>2</div>
    </div>
    <div className='item'>
    <ListIcon className='icon'/>
    </div>
    <div className='item'>
    <img src='../assets/DSC_3692.jpg' alt='pic' className='pic' />
    </div>
    </div>
    </div>
    </div>
  )
}

export default navBar