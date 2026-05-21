//import logo from './logo.svg';
import { useState } from 'react';
//import Table from './components/Table';
import './App.css';

function App() {
  const data=[
{ id:1,date: "2022-09-01",views: 100,article: "Article 1" },
{ id:2,date: "2023-09-01",views: 100,article: "Article 1" },
{ id:3,date: "2023-09-02",views: 150,article: "Article 2" },
{ id:4,date: "2023-09-02",views: 120,article: "Article 3" },
{ id:5,date: "2020-09-03",views: 200,article: "Article 4" }
  ]
  const [state, setState]=useState(data);

  function SortbyDate(){
     let sortedbydate=state.sort((a,b)=> new Date(b.date) - new Date(a.date))
     console.log(sortedbydate)
     setState(sortedbydate)
     console.log(state)
  }
  function SortbyViews(){
    let sortedbyviews=state.sort((a,b)=>b.views - a.views)
     console.log(sortedbyviews)
     setState(sortedbyviews)
     console.log(state)
  }
 // console.log(state);
//  useEffect(() => {
  
//  }, [state])
  return (
   <div className="App">
     <h1 
     style={{fontFamily:"-apple-system",paddingRight:"300px"}}>
      Date and Views Table
      </h1>
      <div style={{paddingRight:"400px"}}>
        <button onClick={SortbyDate}>Sort by Date</button> 
      <button onClick={SortbyViews}>Sort by Views</button></div>
     <table>
   <thead>  
        <tr>
          <th>id</th>
          <th>Date</th>  
          <th>Views</th>  
          <th>Article</th>
        </tr>   
    </thead>
    <tbody>
        {( state.map((ele)=>(
          <tr key={ele.id} >
            {Object.values(ele).map((val)=>(
              <td style={{paddingRight:"20px",paddingLeft:"10px"}}>{val}</td> 
            ))}
          </tr>  
        )))
        }
      </tbody>
      </table>
    </div>
  );
}

export default App;
