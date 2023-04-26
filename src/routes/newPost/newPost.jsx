import React from 'react'
import "../newPost/style.css";



export const NewPost = () => {
  return (
    <div className='new-post'>
      <h2>Inserir novo Post</h2>
      <form >
        <div className="form-control">
          <label htmlFor="title">Título:</label>
          <input
            id='title'
            type="text"
            name='title'
            placeholder='Digite o título'
          />
        </div>

        <div className="form-control">
          <label htmlFor="body">Conteúdo</label>
          <textarea
            name="body"
            id="body"
            placeholder='Digite o conteúdo'>

          </textarea>
          <input id="btn" type="submit" value="Criar Post" />
        </div>


      </form>

    </div>
  )
}


