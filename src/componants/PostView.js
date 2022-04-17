import React from 'react'
import ReactPlayer from 'react-player'


function PostView({ post }) {
  return (
    <div className='postViewContainer'>
      <div className='postViewHeader'>
        <img className='postViewProfilePic' src={post.data.thumbnail}/>

<div className='flex-column'>
  <h3>u/{post.data.author}</h3>
  <span>r/{post.data.subreddit} - {new Date(post.data.created_utc * 1000).toLocaleDateString()}</span></div>
      </div>
    <h4>{post.data.title}</h4>
    
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