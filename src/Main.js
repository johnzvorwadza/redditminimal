import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';
import PostView from './componants/PostView';
import Navbar from './Navbar';
import AdBar from './componants/AdBar';

function Main() {
    const dispatch = useDispatch("");
    const posts = useSelector(state=>state.data.posts);
    const r = useSelector(state=>state.data.r);
    const s = useSelector(state=>state.data.s);
    const loading = useSelector(state=>state.data.s);

    useEffect( () =>  {
      var url = `https://www.reddit.com/r/${r}.json?limit=25`;
      s === ""? url = url : url =  `https://www.reddit.com/r/${r}/search/.json?q=${s}`;

      
      dispatch({"type":"setLoading",payload:true});
      axios.get(url).then(res=>{
     dispatch({type:"setPosts", payload: res.data.data.children});
     dispatch({"type":"setLoading",payload:false});
    }).catch(err=>{
      dispatch({"type":"setLoading",payload:false});
  
    });
    }, [s, r]);
  
  return (<div className='main'>
    <div id="sideBar" display-visible="false" className='sideBar'>
      <Navbar/>
      
      </div>


    <div className='postsContainer'>
      {
      !loading && posts.filter(post=>post.data.title.includes("")).map((post, index) => (
       <PostView post={post} />))
       
       
       }
      
    </div>


   
    
       
       </div>
  )
}

export default Main