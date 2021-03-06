import React from 'react';
import SideNavbar from '../../organisms/SideNavbar';
import ChannelNameBox from '../../organisms/ChannelNameBox';
import CommunityDiv from '../../atoms/CommunityDiv';
import axios from 'axios';
import {useState,useEffect} from 'react';
import './index.css';
const MyChannel=()=>
{
  const [community,getcommunity]=useState([]);
  useEffect(()=>{
    getChannelDiv();
    },[]);
  const getChannelDiv=async()=>
  {
    const com=await axios.get("http://localhost:3010/community");
getcommunity(com.data);
  }
  const deletecommunitydata=(id)=>
  {
    axios.delete(`http://localhost:3010/community/${id}`).then(response=>
    getChannelDiv());
  }
    return(<div>
        <SideNavbar/>
       <div className="container container1">
      <ChannelNameBox/>
        <div className="threedivs">
        <div className="insidediv"><ul><li>0</li><li>Playlist</li></ul></div>
        <div className="insidediv"><ul><li>1</li><li>Likes</li></ul></div>
        <div className="insidediv"><ul><li>2</li><li>Subscribers</li></ul></div>
        </div>
        {community.map((communityobj)=>{
        return(<CommunityDiv communityobj={communityobj} deletecommunitydata={deletecommunitydata}/>);
        }
        )}
        </div>
        </div>
        );
}
export default MyChannel;