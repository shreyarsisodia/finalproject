import React from 'react';
import './index.css';
import {Link} from 'react-router-dom';
const PodcastTitleandDesc=(props)=>
{
    const{title,id}=props;
    return(
        <div className="flexBox">
           <ul className="listtype">
           <li><Link to={`/Playerpage/${id}/${title}`}><h4>{title}</h4></Link></li>
           <li>Podcast1</li>
           </ul>
           </div>);
}
export default PodcastTitleandDesc;