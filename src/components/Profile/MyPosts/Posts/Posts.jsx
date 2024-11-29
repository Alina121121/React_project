import Post from '../Post/Post'
import s from './Posts.module.css'
const Posts = () => {
    return (
<div className={s.posts}>
            <h1>My post</h1>
            <input type="text" placeholder="Your message"></input>
            <button>Send</button>
            <div className={s.krug}></div>
            <div className={s.krug1}></div>
</div>
    )
}

export default Posts