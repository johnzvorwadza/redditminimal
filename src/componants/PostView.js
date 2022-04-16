import React from 'react'
import ReactPlayer from 'react-player'


function PostView({ post }) {
  return (
    <div className='postViewContainer'>
    <h3>{post.data.title}</h3>
    {post.data.author} - {new Date(post.data.created_utc * 1000).toLocaleDateString()}<br/>
    
    {post.data.url.includes(".jpg") && (<div>
      <img src={post.data.url}/>  
    </div>)}

    {post.data.url.includes(".mp4") && (<div>
        <ReactPlayer

        url={post.data.url}
        />
    </div>)}

    {
    post.data.selftext

    //JSON.stringify(post.data)
  }

    
    </div>
  )
}

export default PostView