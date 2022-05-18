import React from 'react'
import upVoteImage from '../files/images/arrow.png';
import commentsImage from '../files/images/comments.png';
import '../styles/PostFooter.css';

function PostFooter( {data}) {
  return (
    <div className='postfooter'>
        <div className='upvotescont'>
        <img className='upvote' src={upVoteImage}/>
        <span>{data.ups - data.downs} upvotes</span>
        <img className='upvote downvote' src={upVoteImage}/>
        </div>
        <div className='commentcont'>
        <img className='comment' src={commentsImage}/>
        <span>{data.num_comments} comments</span>
        </div>
       
    </div>
  )
}

export default PostFooter