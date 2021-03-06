import './index.css';
import React,{useState,useEffect} from "react";
import Axios from "axios";
import  CardandText from '../../molecules/CardandText';
import ChannelNameBox from '../../organisms/ChannelNameBox';
import CommonNavbar from '../../organisms/CommonNavbar';
import PlaylistName from '../../atoms/PlaylistName';
import Nexticon from '../../atoms/Nexticon';
import PodcastList from '../../organisms/PodcastList';
import SideNavbar from '../../organisms/SideNavbar';
const PodcastActivity=()=>{
const[ChannelName,setChannelName]=useState([]);

  useEffect(()=>{
  getPodcasts();
  },[]);
  const getPodcasts=async()=>
  {
  const res=await Axios.get('http://localhost:3060/Channel');
 setChannelName(res.data);
  console.log(res.data);
  };
    return(
        <div>
             <SideNavbar/>  
         <div className="container .flex-containerimage"> 
        <ChannelNameBox/>
         </div>
        <div className="container box">
            {
                ChannelName.map((Playlist,i)=>
            {
             return(<><PodcastList Playlist={Playlist}/></>);
            }
            )
            }
        </div>
    
    </div>
);
            
            
        
};


export default PodcastActivity;
