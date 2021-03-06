import './index.css';
import {Link} from 'react-router-dom';
import {useState} from 'react';
const SideNavbar=()=>
{ 
    const[show,setshow]=useState(false);
    return(
<div class="sidebar1">
<header><span class="material-icons hamburger" onClick={()=>{show?setshow(false):setshow(true)}}>menu</span><span class="material-icons">
mic
</span>Podcast</header>
{show&&
<>
<div class="sidebar">
<ul class="list">
<li><Link to={"Home"}><span class="material-icons">home</span>Home</Link></li>

<li><Link to={"Search"} className="navbar-brand"><span class="material-icons">search</span>Search</Link></li>

<li><Link to={"MyChannel"}><span class="material-icons">account_circle</span>My Profile</Link></li>

<li><Link to={"PodcastActivity"} className="navbar-brand"><span class="material-icons">podcasts</span>Podcast Activity</Link></li>

<li><Link to={"MyDrafts"}><span class="material-icons">drafts</span>My Drafts</Link></li>

<li><Link to={"Live"}><span class="material-icons">live_tv</span>Live</Link></li>

<li><Link to={"Analytics"}><span class="material-icons">show_chart</span>Analytics</Link></li>
</ul>
</div>
</>
}
{!show&&
<>
<div class="sidebar sidebar2">
<ul class="list">
<li><Link to={"Home"}><span class="material-icons">home</span></Link></li>

<li><Link to={"Search"} className="navbar-brand"><span class="material-icons">search</span></Link></li>

<li><Link to={"MyChannel"}><span class="material-icons">account_circle</span></Link></li>

<li><Link to={"PodcastActivity"} className="navbar-brand"><span class="material-icons">podcasts</span></Link></li>

<li><Link to={"MyDrafts"}><span class="material-icons">drafts</span></Link></li>

<li><Link to={"Live"}><span class="material-icons">live_tv</span></Link></li>

<li><Link to={"Analytics"}><span class="material-icons">show_chart</span></Link></li>
</ul>
</div>
</>
}
</div>

);
}
export default SideNavbar;