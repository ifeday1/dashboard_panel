import React from 'react'
import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';    
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
  return (
    <div className='sidebar'>
    <div className='top'>
    <span className='logo'>ifeday</span>
    </div>
    <hr></hr>
    <div className='center'>
    <ul>
    <p className='title'>MAIN</p>
        <li>
        <DashboardIcon className='icon'/>
            <span>Dashboard</span>
        </li>
        <li>
        <SupervisedUserCircleIcon className='icon'/>
            <span>Usesrs</span>
        </li>
        <li>
        <ProductionQuantityLimitsIcon className='icon'/>
            <span>Products</span>
        </li>
        <p className='title'>USEFUL</p>
        <li>
        <LocalPostOfficeIcon className='icon'/>
            <span>Orders</span>
        </li>
        <li>
        <LocalShippingIcon className='icon'/>
            <span>Delivery</span>
        </li>
        <li>
        <QueryStatsIcon className='icon'/>
            <span>Stats</span>
        </li>
        <li>
        <CircleNotificationsIcon className='icon'/>
            <span>Notifications</span>
        </li>
        <p className='title'>SERVICE</p>
        <li>
        <SettingsSystemDaydreamIcon className='icon'/>
            <span>System health</span>
        </li>
        <li>
        <PsychologyIcon className='icon'/>
            <span>Logs</span>
        </li>
        <li>
        <SettingsIcon className='icon'/>
            <span>Settings</span>
        </li>
        <p className='title'>USER</p>
        <li>
        <AccountCircleIcon className='icon'/>
            <span>Profile</span>
        </li>
        <li>
        <LogoutIcon className='icon'/>
            <span>Logout</span>
        </li>
    </ul>
    </div>
    <div className='bottom'>
    <div className='colorOption'></div>
    <div className='colorOption'></div>
    
    </div>
    </div>
  )
}

export default Sidebar

