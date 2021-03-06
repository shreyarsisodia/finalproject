import React from 'react';
import './index.css';
import CardandText from '../../molecules/CardandText';
import PodcastTitleandDesc from '../../molecules/PodcastTitleandDesc';
import Cards from '../../atoms/Cards';
import {useEffect,useState} from 'react';
import Axios from 'axios';
const DraftOrganism=(props)=>{
 
    const[showDelete,setshowDelete]=useState(false);
     const{podcast,deletePodcasts}=props;
   return(<div className="flexbox" onMouseEnter={e=>setshowDelete(true)} onMouseLeave={e=>setshowDelete(false)}>
          <Cards imagelink={podcast.img}/>
          <PodcastTitleandDesc title={podcast.title} id={podcast.id}/>
          {showDelete&&
          <i class="material-icons micicon deleteicon" onClick={()=>deletePodcasts(podcast.id)}>delete</i>
          }
          
          </div>);
}
          export default DraftOrganism;