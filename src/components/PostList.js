import React, { Component } from "react";

import PostItem from "./PostItem";
/*import profile1 from "../assets/perfil.jpg";
import profile2 from "../assets/ramos.jpg";
import profile3 from "../assets/zozo.jpg";
import profile4 from "../assets/je.jpg";
import profile5 from "../assets/de.jpg";*/

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
        comments: [
          {
            id: 2,
            author: {
              name: "Doutor Ramos",
              avatar: ""
            },
            date: "29 Jul 2019",
            content: "Queijo sem queijo com queijo"
          },
          {
            id: 3,
            author: {
              name: "ZOZO",
              avatar: ""
            },
            date: "29 Jul 2019",
            content: "Vou dominar o mundo"
          }
        ]
      },
      {
        id: 4,
        author: {
          name: "Augusto Pacheco",
          avatar: ""
        },
        date: "29 Jul 2019",
        content: "Segundo post desafio 04 bootcamp",
        comments: [
          {
            id: 5,
            author: {
              name: "Jecota",
              avatar: ""
            },
            date: "29 Jul 2019",
            content: "Bestão"
          },
          {
            id: 6,
            author: {
              name: "De linda",
              avatar: ""
            },
            date: "29 Jul 2019",
            content: "Amo vc"
          }
        ]
      }
    ]
  };

  render() {
    return (
      <div className="postlist">
        {this.state.posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;
