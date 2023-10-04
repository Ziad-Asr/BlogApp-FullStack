import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import "./SinglePostComp.css";

const SinglePostComp = () => {
  const location = useLocation()
  const path = location.pathname.split('/')[2]

  const [post, setPost] = useState({})

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`/posts/${path}`);
      setPost(res.data)
    }
    getPost();
  }, [path])

  return (
    <div className="single-post-comp">
      <div className="singlePostWrapper">
      {post.photo && 
        <img
        className="singlePostImg"
        src={post.photo}
        alt=""
      />
      }
        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b className="singlePostAuthor">{post.userName}</b>
          </span>
          <span>{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="singlePostDesc">
          {post.desc}
        </p>
      </div>
    </div>
  );
};

export default SinglePostComp;
