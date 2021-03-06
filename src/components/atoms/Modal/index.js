import './index.css';
import {useState,useEffect} from 'react';
const Modal=()=>
{
const[isOpen,setisOpen]=useState(true);
return(<div class="modal"><button onClick={()=>setisOpen(false)}>Close Modal</button></div>);
}
export default Modal;