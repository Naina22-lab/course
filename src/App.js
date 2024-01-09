import logo from './logo.svg';
import './App.css';
import React from "react";
import {useState , useEffect} from "react";
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import  Cards from './components/Cards';
import { apiUrl , filterData } from './data';
import Spinner from './components/Spinner';
import {toast} from 'react-toastify'



const App = () =>{

  const[courses , setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category , setCategory] = useState(filterData[0].title);


  async function fetchData(){
    setLoading(true);
    try{
      let response = await fetch(apiUrl);
      let output = await response.json();

      setCourses(output.data);
    }
    catch(error){
      toast.error("404! Module Not Found");
    }
    setLoading(false);
  }
  

  useEffect(() =>{
    fetchData();
  },[])
  
  return(
    <div  className="wrapper">
      <div >
        <Navbar/>
      </div>
      <div className='filter'>
        <div>
        <Filter filterData={filterData} category={category} setCategory={setCategory}/>
      </div>
      <div className='loading'>
        {
          loading ? (<Spinner/>):(<Cards courses ={courses}  category={category}/>)
        }
        </div>
      </div>
    
    </div>
  )
};

export default App;
