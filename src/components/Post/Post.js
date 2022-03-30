import { Avatar } from "@mui/material"
import { deepPurple } from "@mui/material/colors"
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

import './Post.css'

function Post({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}) {
  return (
    <div className='post'>
        <div className="post__avatar">
            <Avatar sx={{ bgcolor: deepPurple[500] }}>R</Avatar>
        </div>
        <div className="post__body">
            <div className="post__header">
                <div className="post__headerText">
                    <h3>Roby <span className="post__headerSpecial">
                        <VerifiedIcon className='post__badge'/> @roby
                        </span>
                    </h3>
                </div>
                <div className="post__headerDescription">
                    <p>This is some filler text</p>
                </div>
            </div>
            <img src="https://media3.giphy.com/media/h1zJMhT5XOT927e0aw/giphy.gif?cid=ecf05e47350z5nw8ltggy1rubkty95iq6lous67ncjxgfm6z&rid=giphy.gif&ct=g" alt="Bender"/>
            <div className="post__footer">
                <ChatBubbleOutlineIcon fontSize='small'/>
                <RepeatIcon fontSize='small'/>
                <FavoriteBorderIcon fontSize='small'/>
                <PublishIcon fontSize='small'/>
            </div>
        </div>
    </div>
  )
}

export default Post