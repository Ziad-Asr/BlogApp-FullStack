import Post from "../Post/Post";

import "./Posts.css";

const Posts = ({posts}) => {
  return (
    <div className="posts">
      {posts.map(p => (
        <Post key={Math.random()} post={p} />
      ))}
    </div>
  );
};

export default Posts;
