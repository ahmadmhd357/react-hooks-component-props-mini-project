import React from "react";



function Article({data}){
    
    const articalElement = data.map((el)=>{
      return <article key={el.id}>
        <h3>{el.title}</h3>
        <small>{el.date || "January 1, 1970" }</small>
        <p>{el.preview}</p>
        </article> 
    })
    
    
    
    return <>{articalElement}</>
}










export default Article