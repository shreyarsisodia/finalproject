import './index.css';
import React,{useState,useEffect} from "react";
import Axios from "axios";
import SideNavbar from '../../organisms/SideNavbar';
import ChannelNameBox from '../../organisms/ChannelNameBox';
import DraftOrganism from '../../organisms/DraftOrganism';
const PlaylistPage=()=>
{
const[ChannelName,setChannelName]=useState([]);

  useEffect(()=>{
  getPodcasts();
  },[]);
  const getPodcasts=async()=>
  {
  const res=await Axios.get('http://localhost:3000/PlaylistPage');
 setChannelName(res.data);
  };
  const deletePodcasts=(id)=>
  {
    Axios.delete(`http://localhost:3000/PlaylistPage/${id}`).then(response => {
      getPodcasts();});
  }
    return(<div>
            <SideNavbar/>  
           <div className="container">
        <ChannelNameBox/>
            <h1>PlaylistPage</h1>
           <ul className="DraftList">
           {ChannelName.map(podcast=>
          {
           return(<ul className="DraftList"><li><DraftOrganism  deletePodcasts={deletePodcasts} podcast={podcast}/></li></ul>);
           })}
           </ul>
        </div>
          </div>);
}
export default PlaylistPage;