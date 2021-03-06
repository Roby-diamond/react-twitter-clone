import './Sidebar.css'
import SidebarOption from '../SidebarOption/SidebarOption';
// MUI ICONS
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PersonIcon from '@mui/icons-material/Person';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@material-ui/core'

function Sidebar() {
  return (
    <div className='sidebar'>
        <TwitterIcon className='sidebar__twitterIcon'/>
        <SidebarOption active text='Home' Icon={HomeIcon}/>
        <SidebarOption text='Explore' Icon={TagIcon}/>
        <SidebarOption text='Notifications' Icon={NotificationsIcon}/>
        <SidebarOption text='Messages' Icon={EmailIcon}/>
        <SidebarOption text='Bookmarks' Icon={BookmarkIcon}/>
        <SidebarOption text='Lists' Icon={ListAltIcon}/>
        <SidebarOption text='Profiles' Icon={PersonIcon}/>
        <SidebarOption text='More' Icon={MoreHorizIcon}/>
        <Button variant='outlined' className='sidebar__tweet' fullWidth>Tweet</Button>
    </div>
  )
}

export default Sidebar