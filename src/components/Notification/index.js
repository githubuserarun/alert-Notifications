import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {children} = props

  return (
    <div className="notification_container">
      <div>{children}</div>
      <div>
        <GrFormClose />
      </div>
    </div>
  )
}

export default Notification
