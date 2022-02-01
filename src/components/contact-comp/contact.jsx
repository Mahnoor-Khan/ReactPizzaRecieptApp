import React, { Component } from 'react';
import { PhoneOutlined , MailOutlined , FacebookOutlined , TwitterOutlined , LinkedinOutlined ,InstagramOutlined } from '@ant-design/icons';
import style from './style.contact.module.scss'


const Contact = () => {
    return (  
        <>
            <div className={style.contactDiv}>
                <div className={style.contactLogo}>Pizza</div>
                <div className={style.contactUs}>
                    <h2 className={style.ContactDataHeadings}>Contact Us</h2>
                    <p className={style.ContactData}><PhoneOutlined className={style.contactIcon}/>   012-3456-34</p>
                    <p className={style.ContactData}><MailOutlined className={style.contactIcon}/>   abc@gmail.com</p>
                    
                </div>
                <div className={style.FollowUs}>
                    <h2 className={style.ContactDataHeadings}>Follow Us</h2>
                    <FacebookOutlined  className={style.ContactIcons}/>
                    <TwitterOutlined className={style.ContactIcons}/>
                    <LinkedinOutlined className={style.ContactIcons}/>
                    <InstagramOutlined className={style.ContactIcons} />
                    
                </div>
                
            </div>
            <div className={style.contactFooter}> 
            <p>Copyright © 2022 | 1st Abc Pizza Co.</p>
            </div>
        </>
    );
}
 
export default Contact;