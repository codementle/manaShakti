import React, { useRef,useState} from 'react';
import "./LoginSignUp.css";
import {Link} from "react-router-dom";
import MailOutlineIcon from "@mui/icons-material/MailOutline"
import LockOpenIcon from "@mui/icons-material/LockOpen";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import FaceIcon from "@mui/icons-material/Face";
import image from "./../../components/images/profilePng.png";
import { useNavigate } from 'react-router-dom';


const LoginSignUp = () => {
    

    const loginTab = useRef(null);
    const registerTab = useRef(null);
    const switcherTab = useRef(null);
    const navigate = useNavigate();
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    
    // var accessToken = gapi.auth.getToken().access_token;
    const [user,setUser] = useState({
        name : "",
        email : "",
        password : "",
        school_id : "",
    })

    const {name,email,password,school_id} = user;

    const [avatar,setAvatar] = useState()
    const [avatarPreview,setAvatarPreview] = useState(image)

    const loginSubmit = (e)=>{
        e.preventDefault();
        // dispatch(login(loginEmail,loginPassword))
        navigate('/services')
    }

    const registerSubmit = (e) =>{
        e.preventDefault();
        const myForm =new FormData();

        myForm.set("name",name);
        myForm.set("email",email);
        myForm.set("password",password);
        myForm.set("avatar",avatar);
        myForm.set("school_id",school_id);
        // dispatch(register(myForm))

}

const registerDataChange = (e)=>{
    if(e.target.name==="avatar")
    {
        const reader = new FileReader();
        reader.onload = () =>{
            if(reader.readyState===2)
            {
                setAvatarPreview(reader.result);
                setAvatar(reader.result);
            }
        }
        reader.readAsDataURL(e.target.files[0]);
    }
    else{
        setUser({...user,[e.target.name]:e.target.value})//If data present then update else create
        //This part will either add or update the value of the e.target.name field..
    }
}


        // const redirect=location.search ? location.search.split("=")[1] : "/account";
        // const redirect = location.pathname.includes("?") ? location.pathname.split("=")[1] : "/account";
        // const redirect = [...searchParam][0] ? (/${[...searchParam][0][1]}) : ('/account');
        // useEffect(() => {
        //   if(error)
        //   {
        //       console.log("Hello");
        //     alert.error(error);
        //     dispatch(clearErrors())
        //   }
        
        // }, [dispatch,error,alert,navigate,isAuthenticated,redirect])
        

    const switchTabs = (e,tab)=>{
        if(tab==="login")
        {
            switcherTab.current.classList.add("shiftToNeutral");
            switcherTab.current.classList.remove("shiftToRight");


            registerTab.current.classList.remove("shiftToNeutralForm");
            loginTab.current.classList.remove("shiftToLeft");
        }
        else if(tab==="register"){
            switcherTab.current.classList.remove("shiftToNeutral");
            switcherTab.current.classList.add("shiftToRight");


            registerTab.current.classList.add("shiftToNeutralForm");
            loginTab.current.classList.add("shiftToLeft");
        }
    }


  return (
    <>
        <div className="LoginSignUpContainer">
            <div className="LoginSignUpBox">
                <div>
                    <div className="login_signUp_toggle">
                    <p onClick={(e)=>switchTabs(e,"login")}>Login</p>
                    <p onClick={(e)=>switchTabs(e,"register")}>Register</p>
                    </div>
                    <button ref={switcherTab}></button>
                </div>
                <form action="" className="loginForm" ref={loginTab} onSubmit={loginSubmit}>
                <div className="loginEmail">
                    <MailOutlineIcon />
                    <input type="email" name="email" value={loginEmail} placeholder="Username" required onChange={(e)=>setLoginEmail(e.target.value)}/>
                </div>
                <div className="loginPassword">
                    <LockOpenIcon />
                    <input type="password" placeholder='Password' required value={loginPassword} onChange={(e)=>setLoginPassword(e.target.value)} />
                </div>
                <Link to="/password/forgot">Forgot Password ?</Link>
                <input type="submit" value="Login" className='loginBtn'/>
                </form>

                <form action="" className='signUpForm' ref={registerTab} encType='multipart/form-data' onSubmit={registerSubmit}>
                <div className="signUpName">
                    <FaceIcon />
                    <input type="text" name="name" value={name} placeholder="Name" required onChange={registerDataChange}/>
                </div>
                <div className="signUpEmail">
                    <MailOutlineIcon />
                    <input type="email" name="email" value={email}  placeholder="Username" required onChange={registerDataChange}/>
                </div>
                <div className="signUpEmail">
                    <AccountBalanceIcon />
                    <input type="text" name="school_id" value={school_id}  placeholder="School_id" required onChange={registerDataChange}/>
                </div>
                <div className="signUpPassword">
                    <LockOpenIcon />
                    <input type="password" name="password" value={password} placeholder="password" required onChange={registerDataChange}/>
                </div>
                <div id="registerImage">
                    <img src={avatarPreview} alt="Avatar Revie" />
                    <input type="file" name='avatar' accept="image/" onChange={registerDataChange} />
                </div>
                <input type="submit" value="Register" className='signUpBtn' />
                </form>
            </div>
        </div>
    </>
  )
}

export default LoginSignUp
