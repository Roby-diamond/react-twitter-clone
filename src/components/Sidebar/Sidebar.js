import './Sidebar.css'
import SidebarOption from '../SidebarOption/SidebarOption';
// MUI ICONS
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PersonIcon from '@mui/icons-material/Person';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Sidebar() {
  return (
    <div className='sidebar'>
        <TwitterIcon />
        <SidebarOption text='Home' Icon={HomeIcon}/>
        <SidebarOption text='Explore' Icon={SearchIcon}/>
        <SidebarOption text='Notifications' Icon={NotificationsIcon}/>
        <SidebarOption text='Messages' Icon={EmailIcon}/>
        <SidebarOption text='Bookmarks' Icon={BookmarkIcon}/>
        <SidebarOption text='Lists' Icon={ListAltIcon}/>
        <SidebarOption text='Profiles' Icon={PersonIcon}/>
        <SidebarOption text='More' Icon={MoreHorizIcon}/>
        {/* button -> tweet */}
    </div>
  )
}

export default Sidebar