import React, { useState } from "react";
import { firestore } from "firebase";
import PostContainer from "./PostContainer";

import "./App.css";
import { Layout, Input, Button } from "antd";

const { Header } = Layout;
const { TextArea } = Input;
const App = () => {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [id, setId] = useState();

  const onTitleChange = event => {
    setTitle(event.target.value);
    setId(event.target.value);
  };

  const onContentChange = event => {
    setContent(event.target.value);
  };

  const onPostSubmit = () => {
    let post = { title, content, id };
    let postRef = firestore()
      .collection("create-post")
      .doc();

    postRef.set(post, { merge: true });
    setContent();
    setTitle();
    setId();
  };

  return (
    <div className="main-container">
      <Layout>
        <Header>
          <h1>Create Post</h1>
        </Header>
      </Layout>
      <div>
        <Input
          value={title}
          onChange={onTitleChange}
          placeholder="Enter title"
        />
      </div>
      <div>
        <h2>Create New Post</h2>
        <TextArea
          value={content}
          onChange={onContentChange}
          placeholder="Start writing post..."
          rows={16}
        ></TextArea>
      </div>
      <div>
        <Button onClick={onPostSubmit} type="primary">
          Post
        </Button>
      </div>
      <div>
        <PostContainer />
      </div>
    </div>
  );
};

export default App;
