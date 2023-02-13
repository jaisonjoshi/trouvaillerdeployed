import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import useFetch from '../../hooks/useFetch';
import { useEffect, useState } from 'react';

const columns = [
  { field: 'username', headerName: 'username', width: 200 },
  { field: 'email', headerName: 'email', width: 250 },

  {
    field: 'phone',
    headerName: 'phone',
    width: 200,
    },
 
];


export default function DataTable({row}) {
  


  return (
    <div style={{ height: 650, width: '100%' }}>
     
       <DataGrid
        rows={row}
        columns={columns}
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