import React from 'react'
import ReactPlayer from 'react-player'
import PostFooter from './PostFooter'


function PostView({ post }) {
  const data = post.data;
  if(data.url.includes(".jpg") || data.url.includes(".mp4")){

  }else{
    return(<div></div>);
  }


 
  return (
    <div className='postViewContainer'>
      <div className='postViewHeader'>
        <img className='postViewProfilePic' src={data.thumbnail}/>

<div className='flex-column'>
  <h3>u/{data.author}</h3>
  <span>r/{data.subreddit} - {new Date(data.created_utc * 1000).toLocaleDateString()}</span></div>
      </div>
    <h4>{data.title}</h4>
    
    {data.url.includes(".jpg") && (<div>
      <img className='postViewImage' src={data.url}/>  
    </div>)}

    {data.url.includes(".mp4") && (<div>
        <ReactPlayer

        url={data.url}
        />
    </div>)}

    {
   data.selftext

   

    //JSON.stringify(post.data)
  }

  <PostFooter data={data}/>
    
    </div>
  )
}

export default PostView