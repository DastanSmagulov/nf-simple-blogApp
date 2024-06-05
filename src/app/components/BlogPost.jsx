"use client";

import Link from "next/link";

const BlogPost = ({ title, author, id }) => {
  return (
    <div className="card w-full bg-white shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions justify-end">
          <p className="mt-5">By {author}</p>

          <Link href={`/post/${id}`}>
            <button className="btn btn-primary bg-black text-white border-white hover:bg-white hover:text-black">
              See more...
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
