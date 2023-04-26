import React from 'react'
import "../newPost/style.css";

import { blogFetch } from '../../axios/config';

import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

export const NewPost = () => {

const navigate = useNavigate();

const[title, SetTitle] = useState()
const[body, setBody] = useState()


const createPost = async (e)=>{
e.preventDefault();
const post = {title, body, userId: 1};
await blogFetch.post("/posts",{
body: post,


});
navigate('/')
};
  return (
    <div className='new-post'>
      <h2>Inserir novo Post</h2>
      <form onSubmit={(e) => createPost(e)} >
        <div className="form-control">
          <label htmlFor="title">Título:</label>
          <input
            id='title'
            type="text"
            name='title'
            placeholder='Digite o título'
            onChange={(e)=>SetTitle(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label htmlFor="body">Conteúdo</label>
          <textarea
            name="body"
            id="body"
            placeholder='Digite o conteúdo'
            onChange={(e)=>setBody(e.target.value)}
            
            >
              

          </textarea>
          <input id="btn" type="submit" value="Criar Post" />
        </div>


      </form>

    </div>
  )
}


