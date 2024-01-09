import React, { useState } from "react";
import Card from './Card';
import './Cards.css'

const Cards = (props) => {
     let courses = props.courses;
     let category=props.category;
     const[likedCourses,setLikedCourses] = useState([]);

     
     
     function getCourses(){
        if(category==="All"){
            let allCourses =[];
        Object.values(courses).forEach(array => {
            array.forEach(courseData => {
                allCourses.push(courseData);
            })
        })
        return allCourses;
        }
        else{
            return courses[category];
        }
        
     }


    return(
        <div className="map">
{
    getCourses().map((course) =>(
        <Card key ={course.id} course={course}
         likedCourses = {likedCourses} 
         setLikedCourses = {setLikedCourses} 
         />
    ))
}
        </div>
    )
}

export default Cards