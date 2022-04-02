import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import "./new.scss"

const New = ({inputs, title}) => {
  return (
    <div className='new'>
    <Sidebar />
    <div className='newContainer'>
    <Navbar />
    <div className='top'>
    <h1>{title}</h1>
    </div>
    <div className='bottom'>
    <div className='left'>
    <img src='https://media.istockphoto.com/vectors/no-image-available-sign-vector-id922962354?k=20&m=922962354&s=612x612&w=0&h=f-9tPXlFXtz9vg_-WonCXKCdBuPUevOBkp3DQ-i0xqo='
    alt='' />
    </div>
    <div className='right'>
    <form>
    <div className='formInput'>
    <label>Image:<DriveFolderUploadIcon htmlFor="file" className='icon'/></label>
    <input type="file" id="file" style={{display:"none"}} />
    </div>
    {inputs.map((input)=>(
      <div className='formInput' key={input.id}>
    <label>{input.label}</label>
    <input type={input.type} placeholder={input.placeholder}/>
    </div>
    ))}
    
    
    <button>Send</button>
    </form>
    </div>
    </div>
    </div>
    </div>
  )
}

export default New