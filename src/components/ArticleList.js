import React from "react";
import Article from "./Article";


function ArticleList({posts}){
    
   
    return <main>
     <Article data={posts}/>
    </main>
}



export default ArticleList;