 import "../home/style.css";
 
 import React from 'react'

 import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

 
 export const Home = ()=> {


  const[posts,setPosts] = useState([]); 


  // Função que resgatará os dados da API
  const getPosts = async() => {

console.log("testando");
  }
// Agora iremos fazer uma função para que a cada renderização ela executena quantidade que nós determinamos
//},[])  esse array na última linha faz com que a função execute uma vez

useEffect (()=>{

  getPosts();

},[])


   return (
     <div>home</div>
   )

 }
 
 