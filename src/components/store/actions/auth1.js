import{
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
}from "./type";
import axios from 'axios';
export const register=(email,
            username,
            password)=>(dispatch)=>
{
   return axios.post('api/auth/signup',
                     {
              email:email,
              username:username,
              password:password,
   })
            .then((response)=>{console.log(response)})
            .catch();
        
}
export const login=(username,password)=>(dispatch)=>
{
    return axios.post('api/auth/login',{
        username:username,
        password:password,
    })
    .then((response)=>{
        console.log(response)
    })
}
                  
                  

                  
    
    