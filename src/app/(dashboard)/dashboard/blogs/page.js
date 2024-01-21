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
  const baseAPIUrl = process.env.BASE_API_URL
  try {
    const res = await fetch(`${baseAPIUrl}/api/blogContent`, {
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
