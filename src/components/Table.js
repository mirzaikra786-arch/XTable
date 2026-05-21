export default function Table(data){
   return ( <table>
   <thead>  
        <tr>
          <th>id</th>
          <th>Date</th>  
          <th>Views</th>  
          <th>Article</th>
        </tr>   
    </thead>
    <tbody>
        {( data.state.map((ele)=>(
          <tr key={ele.id} >
            {Object.values(ele).map((val)=>(
              <td style={{paddingRight:"20px",paddingLeft:"10px"}}>{val}</td> 
            ))}
          </tr>  
        )))
        }
      </tbody>
      </table>)
}