import './TweetBox.css'
import { Avatar, Button } from '@mui/material'
import { deepPurple } from '@mui/material/colors';


function TweetBox() {
  return (
    <div className='tweetBox'>
        <form action=''>
            <div className='tweetBox__input'>
                <Avatar sx={{ bgcolor: deepPurple[500] }}>R</Avatar>
                <input placeholder="What's happening?" type="text" />
            </div>
            <Button className='tweetBox__button'>Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox