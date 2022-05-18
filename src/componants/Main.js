import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';
import PostView from './PostView';
import loadingImage from '../files/images/loading2.gif';
import '../styles/Main.css';
import Navbar from './Navbar'

function Main() {
    const dispatch = useDispatch("");
    const posts = useSelector(state=>state.data.posts);
    const r = useSelector(state=>state.data.r);
    const s = useSelector(state=>state.data.s);
    const loading = useSelector(state=>state.data.loading);

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

       {loading && (<div className='loadingimageCont'>
         <img src={loadingImage} className='loadingimage'/>
       </div>)}
      
    </div>


   
    
       
       </div>
  )
}

export default Main