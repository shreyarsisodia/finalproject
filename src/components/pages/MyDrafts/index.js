import './index.css';
import React,{useState,useEffect} from "react";
import Axios from "axios";
import SideNavbar from '../../organisms/SideNavbar';
import ChannelNameBox from '../../organisms/ChannelNameBox';
import DraftOrganism from '../../organisms/DraftOrganism';
const MyDrafts=({history})=>
{
const[ChannelName,setChannelName]=useState([]);

  useEffect(()=>{
  getPodcasts();
  },[]);
  const getPodcasts=async()=>
  {
  const res=await Axios.get('http://localhost:3050/MyDrafts');
 setChannelName(res.data);
  };
  const deletePodcasts=(id)=>
  {
    Axios.delete(`http://localhost:3050/MyDrafts/${id}`).then(response => {
      getPodcasts();});
  }
  
    return(<div>
            <SideNavbar/>
           <div className="container">
            <ChannelNameBox/>
            <h1>My Drafts</h1>
           <ul className="DraftList">
           {ChannelName.map(podcast=>
          {
           return(<ul className="DraftList"><li key={podcast.id}><DraftOrganism podcast={podcast} deletePodcasts={deletePodcasts}/></li></ul>);
           })}
           </ul>
        </div>
          </div>);
}
export default MyDrafts;