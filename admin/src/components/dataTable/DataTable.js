import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import useFetch from '../../hooks/useFetch';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import axios from 'axios';
export default function DataTable({row}) {

  const navigate = useNavigate();

  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  })
  const columns = [
    { field: 'username', headerName: 'username', width: 200 },
    { field: 'email', headerName: 'email', width: 250 },
  
    {
      field: 'phone',
      headerName: 'phone',
      width: 200,
      },
   
  ];
  const userDelete = async (id) => {
    
    if(window.confirm("Delete this user ?") == true) {
      await axiosInstance.delete(`/user/${id}`);
      navigate('/')
    }
  }
  const actionColumn = [
    {
        field : "action",
        headerName: "Action",
        width: 200,
        flex:1,
        renderCell : (params) => {
            return (
                <div className='cell-action'>
                    <button className='cellAction-btn' onClick={()=>userDelete(params.row._id)}>Delete</button>
                </div>
            )
        }
    }
  ]

  return (
    <div style={{ height: 650, width: '100%' }}>
     
       <DataGrid
        rows={row}
        columns= {columns.concat(actionColumn)}
        sx={{
          boxShadow:5,
          my:3,
          px:1,
          py:2,
          fontSize:18,
        }}
        pageSize={10}
        rowsPerPageOptions={[10]}
        getRowId={(row) => row._id}

      /> 
    </div>
  );
}