import React from 'react'
import "./single.scss";
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Chart from "../../components/chart/Chart"
import Table from "../../components/table/Table"

const Single = () => {
  return (
    <div className='single'>
    <Sidebar />
    <div className='singleContainer'>
    <Navbar />
    <div className='top'>
    <div className='left'>
    <div className='editButton'>Edit</div>
    <h1 className='title'>Information</h1>
    <div className='item'>
    <img src='https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/photo_1517336714731_489689fd1ca8_9.jpeg'
    alt='' className='itemImg' />
    <div className='details'>
    <h1 className='itemTitle'>Oladeni Ifeoluwa</h1>
    <div className='detailItem'>
    <span className='itemKey'>Email:</span>
    <span className='itemValue'>Email:Oladeniifeoluwa@ggmail.com</span>
    </div>
    <div className='detailItem'>
    <span className='itemKey'>Phone:</span>
    <span className='itemValue'>+234 810 822 728</span>
    </div>
    <div className='detailItem'>
    <span className='itemKey'>Address:</span>
    <span className='itemValue'>5, Adebayo Adekoya Street Gbagadad, Lagos.</span>
    </div>
    <div className='detailItem'>
    <span className='itemKey'>Conutry:</span>
    <span className='itemValue'>Nigeria</span>
    </div>

    </div>
    </div>
    </div>
    <div className='right'>
    <Chart aspect={3 /1} title="User Spending (last 6 months)"/>
    </div>
    </div>
    <div className='bottom'>
    <h1 className='title'>Last Transactions</h1>
    <Table />
   <list />
    </div>
    </div>
    </div>
  )
}

export default Single