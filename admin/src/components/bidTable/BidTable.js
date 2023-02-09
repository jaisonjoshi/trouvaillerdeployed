import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './bidTable.scss'

const BidTable = ({dat}) => {



    

    const actionColumn = [
        {
            field : "action",
            headerName: "Action",
            width: 200,
            flex:1,
            renderCell : (params) => {
                return (
                    <div className='cell-action'>
                        <Link className='cellAction-btn' to={`/bids/${params.row._id}`}>View</Link>
                    </div>
                )
            }
        }
    ]

    const columns = [

        { field: 'username', headerName : 'User', width:100 },
        { field: 'categories', headerName : 'Category', width:200},
        { field : 'destination' , headerName : 'Destination', width:200},
        { field : 'checkIn' , headerName : "CheckIn Date" ,width:200},
        { field : 'checkOut' , headerName : "CheckOut Date" ,width:200},
        { field : 'status', headerName : "Status", width:200,
            renderCell:(params) => {
                return (
                    <div className='statusCell'>Accepted by : { params.row.accepted.length }</div>
                )
            } 
    }
    ]


    return (
        <div style={{ height: 650, width: '100%' }}>
            <DataGrid className='data-grid'
                    rows={dat }
                    columns= {columns.concat(actionColumn)}
                    sx={{
                        boxShadow: 5,
                        my:5,
                        px:2,
                        py:2,
                        fontSize:18,
                        
                      }}
                      pageSize={10}
                      rowsPerPageOptions={[10]}
                      getRowId={(row) => row._id}
                    />
        </div>
        
                
    )
}

export default BidTable
