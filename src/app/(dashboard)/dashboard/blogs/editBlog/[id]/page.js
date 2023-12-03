import React from "react";
import CreateBlog from "../../../../../../components/blogsComponent/CreateBlog/CreateBlog";
const page = async ({ params }) => {
  const { id } = params;
  const data = await getBlogDataById(id);
  return <CreateBlog id={id} data={data} />;
};
export default page;

const getBlogDataById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/blogContent/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch blog");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
