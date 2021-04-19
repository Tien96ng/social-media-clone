import React from "react";
import UserPost from "./UserPost";
import Post from "./Post";


export default function Feed({profilePic, feed}) {
  
  const renderFeed = obj => obj.map(user => {
    return(
      <Post profilePic={user.profilePic} name={user.name} />
    )
  })

  return(
    <div className="feed">
      <UserPost placeholder="What's happening?" profilePic={profilePic} />
      <hr />
      {renderFeed(feed)}
    </div>
  )
}