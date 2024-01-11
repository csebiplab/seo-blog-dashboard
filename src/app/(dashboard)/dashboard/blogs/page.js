import Link from "next/link";
import React from "react";
import { HiPencilAlt } from "react-icons/hi";
import BlogList from "../../../../components/blogsComponent/BlogList/BlogList";
export default async function page() {
  const data = await getAllBlogsData();
  return (
    <div>
      <BlogList allBlogList={data} />
    </div>
  );
}

const getAllBlogsData = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/blogContent", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch blogs list");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading blogs list: ", error);
  }
};
