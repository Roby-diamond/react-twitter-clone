import "./Main.css"
import TweetBox from "../TweetBox/TweetBox"
import Post from "../Post/Post"

function Main() {
  return (
    <div className="main">
        <div className="main__header">
            <h2>Home</h2>
        </div>
        <TweetBox />
        
        <Post />
        <Post />
        <Post />
        <Post />
    </div>
  )
}

export default Main