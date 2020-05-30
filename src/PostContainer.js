import React, { useState, useEffect } from "react";
import { firestore } from "firebase";

const PostContainer = props => {
  const [posts = [], setPosts] = useState();

  useEffect(() => {
    let postRef = firestore().collection("create-post");

    postRef.onSnapshot(snapshot => {
      const posts = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.data().id.charAt(doc.data().id.length - 1)
      }));
      setPosts(posts);
    });
  }, []);
  console.log(posts);
  return (
    <div>
      {posts.map(post => {
        return (
          <div key={post.id}>
            {post.id}
            <div>
              <h1>{post.title}</h1>
            </div>
            <div>
              <h3>{post.content}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostContainer;
