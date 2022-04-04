import './Widgets.css'

import {TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed} from 'react-twitter-embed'
import SearchIcon from '@material-ui/icons/Search'

function Widgets() {
  return (
    <div className='widgets'>
      <div className='widgets__input'>
        <SearchIcon className='widgets__searchIcon' />
        <input placeholder='Search Twitter' type="text" />
      </div>
      <div className='widgets__container'>
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId='603384079044759552'/>
        <TwitterTimelineEmbed
          sourceType='profile'
          screenName='Twitter'
          options={{ height: 400 }}
        />
        <TwitterShareButton 
          url='https://www.twitch.tv/robypalmer'
          options={{text: 'Click here for maximum entertainment', via: 'robypalmertv'}}  
        />
      </div>
    </div>
  )
}

export default Widgets