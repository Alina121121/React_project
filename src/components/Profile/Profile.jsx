
import React from 'react';
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts.jsx"

const Profile = () => {
    return (
<div className={s.content}>
        <MyPosts /> 
    </div>
    )
}

export default Profile