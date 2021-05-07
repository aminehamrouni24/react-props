import React from "react";
import PropTypes from "prop-types";


 

export const Profile = (props) => {
   
    return (
        <div>
        {props.handleName(props.name)}
        <h1 style= {{color:"gold" , textAlign :"center", fontSize:"60px"}} >Hi ! I am {props.name} </h1>
         <h1 style= {{color:"gold" , textAlign :"center" , marginBottom:"20px"}}>{props.description}</h1>
         
         
         <h1 style= {{ backgroundColor :"purple" , color:"gold" , padding :"10px" , textAlign :"center"}}>
        This is ME !!!</h1>
        <div >
             {props.children}
        </div>

         <h1 style= {{ backgroundColor :"purple" , color:"gold" , padding :"10px"}}>{props.subTitle}</h1>
        <div >
        <h1 style= {{color:"gold" , padding :"10px"}}>Some of my diploma</h1>
        <ul style={{paddingLeft:"100px",fontSize:"20px", lineHeight:"35px"}}>
        {props.introToMyCareer.map((el,i)=>(
            <li key={i}>{el}</li>
        ))}
        </ul>
        <h1 style= {{ backgroundColor :"purple" , color:"gold" , padding :"10px"}}>
        A small Description of My Profession</h1>
        <p style={{padding :"10px", fontSize:"20px" , lineHeight:"35px" , textAlign: "center"}}>{props.profession}</p>
        </div>
        
        
    

        </div>
    )
}

Profile.defaultProps ={
    name:"this is my name",
    description :"this should my future gooal",
    subTitle :"All about My bio and my profession",
    introToMyCareer:"What i really do in my life !!"
}

Profile.propTypes={
    name: PropTypes.string.isRequired ,
    description: PropTypes.string.isRequired ,
    subTitle: PropTypes.string.isRequired ,
    introToMyCareer: PropTypes.arrayOf(PropTypes.string) ,
    profession : PropTypes.string.isRequired,
    handleName : PropTypes.func

}

