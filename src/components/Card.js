import React from "react";
import {FcLike,FcLikePlaceholder} from "react-icons/fc"
import './Card.css';
import {toast} from 'react-toastify'

const Card = (props) => {

    
    let course =props.course;
    let likedCourses =props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function clickHandler(){
         if(likedCourses.includes(course.id)){
            setLikedCourses((prev) =>prev.filter((cid)=>( cid !== course.id )));
            toast.warning("liked removed");
         }
         else{
            if(likedCourses.length===0){
                setLikedCourses([course.id])
            }
            else{
                setLikedCourses((prev) =>[...prev, course.id])
            }
            toast.success("liked successfullyy");
         }
    }
    return(
        <div className="wrap">
            <div className="img">
                <img src={course.image.url}/>
                <div className="button-container">
                <button onClick={clickHandler}>
                     {
                        likedCourses.includes(course.id)?( <FcLike fontSize="1.75rem"/>):(<FcLikePlaceholder fontSize="1.75rem"/>)
                    } 
                </button>
               </div>
            </div>
            
            <div className="para">
                <p>{course.title}</p>
                <p>{
                course.description.length>100?(course.description.substr(0,100))+"...":(course.description)
                }</p>
            </div>
        </div>
    )
}

export default Card;