import React from "react";
import UserPost from "./UserPost";
import Post from "./Post";


export default function Feed() {
  return(
    <>
      <UserPost placeholder="What's happening?" />
      <Post />
    </>
  )
}