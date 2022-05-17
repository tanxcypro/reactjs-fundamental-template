import React,{useState} from "react";

//Create Component PrivatePage
function PrivatePage(props) {
  return(
    <div>
      <h1>hallo</h1>
      <button onClick={props.logout}>logout</button>
    </div>
  )
  
}

//Create Component GuestPage
function GuestPage(props) {
  return(
    <div>
      <h1>hallo</h1>
      <button onClick={props.login}>login</button>
    </div>
  )
  
}

function ConditionRenderin() {
  //init State
  const [isLogin,setIsLogin]=useState(false)
  console.log(isLogin);
  return (
    // Code Inside div
    <div>{isLogin?(
      <PrivatePage logout={()=>setIsLogin(!isLogin)}/>
    ):(
      <GuestPage login={()=>setIsLogin(!isLogin)}/>
    )}</div>
  );
}

export default ConditionRenderin;
