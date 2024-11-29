import s from "./MyPosts.module.css"
import Post from "./Post/Post"
import Posts from "./Posts/Posts"
import Buttons from "./Buttons/Buttons"
const MyPosts = () => {
    return (
        <div>
        <div className={s.content1}>
        <img src='https://www.techopedia.com/wp-content/uploads/2024/09/apple-event-2024-what-to-expect.jpg' className={s.photo}/>
        <img src='https://s0.rbk.ru/v6_top_pics/media/img/8/67/754598750874678.jpeg' className={s.logo}/> 
        <h1>Steve Jobs</h1>
        <ul>
          <li>Date of birth: February 24</li>
          <li>City: San Francisco</li>
          <li>Profession: Businessman</li>
          <li>Web Site: <a href='https://en.wikipedia.org/wiki/Steve_Jobs'>https://en.wikipedia.org/wiki/Steve_Jobs</a></li>
        </ul>
        </div>
        <Posts />
       
        <Post message="Hey, what is your favourite company?"/>
        <Post message="Do you like Apple?"/>
        <Buttons dislike="No"/>
        <Buttons like="Yes"/>
        </div>
    )
}


export default MyPosts