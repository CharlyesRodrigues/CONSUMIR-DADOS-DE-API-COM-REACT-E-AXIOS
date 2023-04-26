import axios from "axios";
import "../home/style.css";

import React from 'react'

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


export const Home = () => {


  const [posts, setPosts] = useState([]);


  // Função que resgatará os dados da API
  // console.log("testando"); Colocar dentro da função getPosts para testar o funcionamento da função no useEffect
  const getPosts = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      const data = response.data;
      setPosts(data);

    } catch (error) {
      console.log(error);
    }

  }
  // Agora iremos fazer uma função para que a cada renderização ela executena quantidade que nós determinamos
  //},[])  esse array na última linha faz com que a função execute uma vez

  useEffect(() => {
    getPosts();



  }, [])


  return (
    <div className="teste">
      <h1>Últimos Posts</h1>
      {posts.length === 0 ? <p>Carregando...</p> : (
        posts.map((posts) => (


          <div className="posts" key={posts.id}>
            <h2>{posts.title} </h2>
            <p>{posts.body} </p>
            <Link to={`/posts/${posts.id}`} className="btn" >Ler mais...</Link>

          </div>


        ))


      )}

    </div>
  )

}

