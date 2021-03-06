import React from 'react';
import './index.css';
import CardandText from '../../molecules/CardandText';
import Nexticon from '../../atoms/Nexticon';
const PodcastList=(props)=>
{
    const{Playlist}=props;
    return(
        <>
           {Object.keys(Playlist).map((PlaylistName, index)=> {
            return(<><h3>{PlaylistName}</h3><div className='flex-container'><CardandText Playlist={Playlist} PlaylistName={PlaylistName}/><Nexticon/></div></>);
            })}
     </> 
    )
    
}
export default PodcastList;