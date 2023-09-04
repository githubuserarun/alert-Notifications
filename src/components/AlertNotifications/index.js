import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import Notification from '../Notification'
import './index.css'

const AlertNotifications = () => {
  const successRender = () => (
    <Notification>
      <div className="notification_content">
        <div>
          <AiFillCheckCircle className="icon_img success_img" />
        </div>
        <div className="content">
          <h1>Success</h1>
          <p>You can access all the files in the folder</p>
        </div>
      </div>
    </Notification>
  )

  const errorRender = () => (
    <Notification>
      <div className="notification_content">
        <div>
          <RiErrorWarningFill className="icon_img error_img" />
        </div>
        <div className="content">
          <h1>Error</h1>
          <p>Sorry, you are not authorized to have access to delete the file</p>
        </div>
      </div>
    </Notification>
  )

  const warnRender = () => (
    <Notification>
      <div className="notification_content">
        <div>
          <MdWarning className="icon_img warn_img" />
        </div>
        <div className="content">
          <h1>Warning</h1>
          <p>Viewers of this file can see comments and suggestions</p>
        </div>
      </div>
    </Notification>
  )

  const infoRender = () => (
    <Notification>
      <div className="notification_content">
        <div>
          <MdInfo className="icon_img info_img" />
        </div>
        <div className="content">
          <h1>info</h1>
          <p>Anyone on the internet can view these files</p>
        </div>
      </div>
    </Notification>
  )
  return (
    <div className="bg_container">
      <h1 className="heading">Alert Notifications</h1>
      <div className="all_notification_container">
        {successRender()}
        {errorRender()}
        {warnRender()}
        {infoRender()}
      </div>
    </div>
  )
}
export default AlertNotifications
