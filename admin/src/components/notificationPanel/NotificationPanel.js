import { useState } from 'react'
import './notificationPanel.scss'


const NotificationPanel = () => {
   
    let notification;
    
    const [noti , setNoti] = useState("")

    if(noti == "bid"){
        notification = <h4>A new bid id placed. Check out now</h4>;
    }
    if(noti == "newuser"){
        notification = <h4>A new user is created</h4>;
    }
    return(
        <div className='noti-con'>
            <h3>Notifications</h3>
            <div className="noti-box">
                <Notification type={notification} />
            </div>
        </div>
    )
}

const Notification = (notification) => {
    <div className='notification'>
        {notification}
    </div>
}


export default NotificationPanel