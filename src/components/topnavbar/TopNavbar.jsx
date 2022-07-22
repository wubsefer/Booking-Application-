import { faClock, faMessage,faMailBulk } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './topnavbar.css'

const TopNavbar = () => {
  return (
    <div>
        <div className="topNavbar">
            <div className="topNavContainer">
                <div className="topNavItem">
                    <FontAwesomeIcon icon={faMailBulk} />
                    <span className="topNavText">+251 922 44 9047</span>
                    <FontAwesomeIcon icon={faMessage} />
                    <span className="topNavText">+251 922 44 9047</span>
                </div>
                <div className="topNavItem">
                    <FontAwesomeIcon icon={faClock } />
                    <span className="topNavText">Office Hour 08:00am - 6:00pm</span>
                    <button className="topNavButton">Contact Us</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopNavbar