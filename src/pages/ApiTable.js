import React, { useEffect, useState } from "react";
import axios from "axios";

const ApiTable = () => {
  const api = "https://jsonplaceholder.typicode.com/posts";
  const [posts, setPosts] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [updatePost, setUpdatePost] = useState("");

  const handleDelete = async (post) => {
    await axios.delete(api + "/" + post.id + post);
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const handleUpdate = async (post) => {
    post.title = updatePost;
    await axios.put(api + "/" + post.id);
    const postClone = [...posts];
    const index = postClone.indexOf(post);
    postClone[index] = { ...post };
    setPosts(postClone);
  };

  useEffect(() => {
    const getPost = async () => {
      const { data: res } = await axios.get(api);
      setPosts(res);
    };
    getPost();
  }, []);

  const addPost = async () => {
    const post = { title: newTitle };
    await axios.post(api, post);
    setPosts([post, ...posts]);
  };

  console.log(posts);

  return (
    <div className="container">
      <h1>There are {posts.length} posts in Database</h1>
      <div className="row">
        <div className="col">
          <input
            className="form-control"
            placeholder="Add post"
            onChange={(e) => {
              setNewTitle(e.target.value);
            }}
          />
        </div>
        <div className="col">
          <button className="btn btn-primary" onClick={addPost}>
            Add Post
          </button>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Tittle</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => {
            return (
              <tr key={index}>
                <td>{post.title}</td>
                <td>
                  <input
                    className="form-control"
                    placeholder="Update Article"
                    onChange={(e) => setUpdatePost(e.target.value)}
                  />
                  <button
                    className="btn btn-info"
                    onClick={() => handleUpdate(post)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(post)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
          <tr>
            <td>Tittle</td>
            <td>
              <input type="text" className="form-control" />
            </td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ApiTable;
