import './index.css';
import {useState,useEffect} from 'react';
import Modal from '../Modal';
const CommunityDiv=(props)=>
{
    const[showDelete,setshowDelete]=useState(false);
    const{communityobj,deletecommunitydata}=props;
    return(<><div className="community" onMouseOver={(()=>setshowDelete(true))} onMouseLeave={(()=>setshowDelete(false))}>
        {showDelete&&<div className="deletebuttondiv">
            <i class="material-icons" onClick={()=>deletecommunitydata(communityobj.id)}>delete</i></div>}<ul>
                <li class="header"><h2>{communityobj.Statusupdate}</h2></li>
                <li>{communityobj.Upcomingliveevent}</li>
    <li>{communityobj.Link}</li></ul>
    </div></>);
}
export default CommunityDiv;