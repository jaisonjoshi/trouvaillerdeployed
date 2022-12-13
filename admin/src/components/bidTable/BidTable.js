import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useFecth from '../../hooks/useFetch';
import './bidTable.scss'

const BidTable = ({count}) => {



    const [bids, setBids] = useState([]);
    const {data, loading, err} = useFecth("/bids");
    useEffect(() => {
        setBids(data);
    },[data]);

   console.log(bids)
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
                    <div className='statusCell'>Accepted by : {params.row.accepted.length}</div>
                )
            } 
    }
    ]


    return (
        <DataGrid className='data-grid'
                    rows={bids }
                    columns= {columns.concat(actionColumn)}
                    sx={{
                        boxShadow: 5,
                        my:5,
                        px:2,
                        py:2,
                        fontSize:18,
                        
                      }}
                      pageSize={count}
                      rowsPerPageOptions={[count]}
                      getRowId={(row) => row._id}
                    />
                
    )
}

export default BidTable
