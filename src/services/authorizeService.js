import axios from "../services/api-interceptor";
import { toast } from 'react-toastify';
import APIAddress from "./APIAddress";
import jwt from 'jwt-decode';

export async function loginUser(loginData){
    try{
        console.log(loginData);
        const response = await axios.post(APIAddress.value+"Authenticate/login", 
        {
            Email: loginData.email,
            Password: loginData.password
        }).then(function (response){
            const token = response.data.token;
            localStorage.setItem('token', token);
            let user = jwt(token);
            localStorage.setItem('username',user["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"]);
            return response;
        }).catch(err =>{
            toast.error(err.response.data.message);
        });
        console.log(response);
        return response;
    }catch (err){
        toast.error(err.response.data.message);
        return false;
    }
}

export async function registerUser(registerData){
    console.log(registerData)
    try{
        const response = await axios.post(APIAddress.value+"Authenticate/register",{
            Email: registerData.Email,
            Username: registerData.Username,
            Password: registerData.Password
        }).then(function (response){
            toast.success(response.data.message);
        }).catch(function(e){
            console.log(e);
            toast.error(e.response.data.message);
        });
        return response;
        }catch (err){
        toast.error(err.response.data.message);
    }
}

export function createRegisterDTO(email,username, password){
    let registerDTO = {
        Email: email,
        Username: username,
        Password: password,
    }
    return registerDTO;
}