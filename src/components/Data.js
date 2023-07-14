import React, { useState } from 'react'
import axios from 'axios'

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import '../App.css'
        
const Data = () => {
  const [data,setData] = useState([])

   
           axios.get('https://jsonplaceholder.typicode.com/todos').then(
            response=>setData(response.data)
           )
  

  
    

  return (
    <div>       
          <table className="App">
          <tr>
              <th>ID</th>
              <th>UserId</th>
              <th>Title</th>
              <th>Completed</th>
          </tr>
          <tbody>
            {
              data.map(eachItem=>(
                <tr>
                  <td>{eachItem.id}</td>
                  <td>{eachItem.userId}</td>
                  <td>{eachItem.title}</td>
                  <td>{eachItem.completed ? "true" : "flase"}</td>
                </tr>
              ))
            }
          </tbody>

          
         
      </table>
       
            
    
    </div>
  )
}

export default Data