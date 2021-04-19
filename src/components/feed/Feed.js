import React from "react";
import UserPost from "./UserPost";
import Post from "./Post";


export default function Feed() {
  return(
    <div className="feed">
      <UserPost placeholder="What's happening?" />
      <Post />
    </div>
  )
}