import posts from "../../../public/data/data.json";
import React from "react";
import BlogPost from "./BlogPost";

const Blog = () => {
  return (
    <div>
      <ul>
        <div className="grid grid-cols-1 gap-10">
          {posts.map((post, index) => (
            <BlogPost
              key={index}
              title={post.title}
              author={post.author}
              id={post.id}
            />
          ))}
        </div>
      </ul>
    </div>
  );
};

export default Blog;
