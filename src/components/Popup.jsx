import React , { useState }  from "react";
import { MdPhoneInTalk } from "react-icons/md";
import { HiMail } from "react-icons/hi";
import { TiLocation } from "react-icons/ti";
import { MdOutlineClose } from "react-icons/md";
const Popup = () => {
  // const[popup, setPopup]=useState(false);

  const hidePopup=()=>{
    document.getElementById("popupmain").style.display="none"
  }
  return (
    <div className="popupmain" id="popupmain">
      <div className="popup">
        <div className=" close"> <MdOutlineClose onClick={() => hidePopup()} style={{cursor:'pointer'}}/></div>
  
        <di className="phoneicon"><MdPhoneInTalk className="phone1"/> <span></span></di>
        <di className="phoneno">+44 7405412543 <span></span> +91 9746050774<span></span> +91 9656888796</di>
        <di className="gmailicon"><HiMail/></di>
        <di className="gmail">info@lafareinternational.com</di>
        <di className="locationicon"><TiLocation/></di>
        <di className="address">Your address here <br/> Street name London-6666</di>
      </div>
      
    </div>
  );
};

export default Popup;
