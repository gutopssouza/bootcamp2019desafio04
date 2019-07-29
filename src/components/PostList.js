import React, { Component } from "react";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Augusto Pacheco",
          avatar: ""
        },
        date: "29 Jul 2019",
        content: "Primeiro post desafio 04 bootcamp",
        comments: [{}]
      }
    ]
  };

  render() {
    return (
      <div className="postlist">
        {this.state.posts.map(post => (
          <p key={post.id} className="post-content">
            {post.content}
          </p>
        ))}
      </div>
    );
  }
}

export default PostList;
