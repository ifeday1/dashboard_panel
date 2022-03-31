import React from 'react'
import "./widget.scss"
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SubtitlesIcon from '@mui/icons-material/Subtitles';
import AddCardIcon from '@mui/icons-material/AddCard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const Widget = ({type}) => {

    let data;

    const amount =100;
    const diff =20;
    switch(type){
        case "users":
            data={
                title:"USERS",
                isMoney:false,
                link:"see all users",
                icon: 
                    < AccountCircleIcon 
                    className='icon' 
                    style={{color:"crimson", backgroundColor:"rgba(255,0,0,0.2)",
                }}
                />,
                  };
            break;
            case "orders":
            data={
                title:"ORDERS",
                isMoney:false,
                link:"view all orders",
                icon: < SubtitlesIcon className='icon' style={{color:"goldenrod", backgroundColor:"rgba(218,165,32,0.2)",
            }}/>,
                
            };
            break;
            case "earnings":
            data={
                title:"EARNINGS",
                isMoney:true,
                link:"view net earnings",
                icon: < AddCardIcon className='icon' style={{color:"green", backgroundColor:"rgba(0,128,0,0.2)",
            }}/>,
                
            };
            break;
            case "balance":
            data={
                title:"BALANCE",
                isMoney:true,
                link:"see details",
                icon: < AccountBalanceWalletIcon className='icon' style={{color:"purple", backgroundColor:"rgba(218,0,218,0.2)",
            }} />,
                
            };
            break;
            default:
                break;
    }

  return (
      <div className='widget'>
    <div className='left'>
    <span className='title'>{data.title}</span>
    <span className='counter'>{data.isMoney && "$"}{amount}</span>
    <span className='link'>{data.link}</span>
    </div>

   <div className='right'>
   <div className='percentage positive'>
   <ArrowDropUpIcon/>
   {diff}%
   </div>
    {data.icon}
   </div>
    </div>
  )
}

export default Widget