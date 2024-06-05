"use client";
import Link from "next/link";
import posts from "../../../../public/data/data.json";
import Head from "next/head";

const Post = ({ params: { id } }) => {
  if (!id) {
    return <p>Loading...</p>; // Render a loading state while the router is not ready
  }

  const post = posts.filter((post) => post.id == parseInt(id))[0];

  return (
    <>
      <Head>
        <title>{post.title} - My Blog</title>
        <meta name="description" content={post.description} />
      </Head>
      <div className="container mx-auto p-6 min-h-[800px] flex items-center">
        <div className="py-10 max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-4">
            <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
            <p className="text-sm text-gray-500 mb-4">
              By {post.author} on {new Date(post.date).toLocaleDateString()}
            </p>
            <p className="text-lg text-gray-700 mb-4">{post.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
