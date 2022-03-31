import React from 'react'
import "./table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {

    const rows = [
       {
           id: 12,
           product: "HP",
           img: "https://hk-media.apjonlinecdn.com/catalog/product/s/t/strelkafelicette_15_fogblue_cloudblue_nonodd_fpr_coreset_rearleft_2_.png" ,
           customer: "Ifeoluwa Oladeni",
           Date: "March 23",
           amount:576,
           method:"cash on delivery",
           status:"Approved",
       },
       {
        id: 123,
        product: "Mackbook",
        img: "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/photo_1517336714731_489689fd1ca8_9.jpeg" ,
        customer: "oreofe Oladeni",
        Date: "April 1",
        amount:1000,
        method:"pay online",
        status:"Pending",
    },
    {
        id: 1234,
        product: "Iphone",
        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-blue-select-2020?wid=940&hei=1112&fmt=png-alpha&.v=1604343704000" ,
        customer: "Ifeoluwa Oladeni",
        Date: "Feb 23",
        amount:900,
        method:"pay online",
        status:"Pending",
    },
   
       
      ];
      
    
      return (
        <TableContainer component={Paper} className="table">
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className='tableCell'> Tracking ID</TableCell>
                <TableCell className='tableCell'> Product</TableCell>
                <TableCell className='tableCell'> Customer</TableCell>
                <TableCell className='tableCell'> Date </TableCell>
                <TableCell className='tableCell'> Amount</TableCell>
                <TableCell className='tableCell'> Payment Mathod</TableCell>
                <TableCell className='tableCell'> Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.id} >
                  <TableCell > {row.id}</TableCell> 
                  <TableCell className='tableCell'>
                  <div className='cellWrapper'>
                  <img src={row.img} alt="" className='image' />
                  {row.product}
                  </div>
                  </TableCell>
                  <TableCell className='tableCell'>{row.customer}</TableCell>
                  <TableCell className='tableCell'>{row.Date}</TableCell>
                  <TableCell className='tableCell'>{row.amount}</TableCell>
                  <TableCell className='tableCell'>{row.method}</TableCell>
                  <TableCell className='tableCell'>
                  <span className={`status ${row.status}`}>{row.status}</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
}

export default List