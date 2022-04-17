import React from 'react'
import ReactPlayer from 'react-player'


function PostView({ post }) {
  return (
    <div className='postViewContainer'>
      <div className='postViewHeader'>
        <img className='postViewProfilePic' src={post.data.thumbnail}/>
<h3>{post.data.author}</h3>
<span>{new Date(post.data.created_utc * 1000).toLocaleDateString()}</span>
      </div>
      <hr/>
    <h3>{post.data.title}</h3>
    
    {post.data.url.includes(".jpg") && (<div>
      <img className='postViewImage' src={post.data.url}/>  
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