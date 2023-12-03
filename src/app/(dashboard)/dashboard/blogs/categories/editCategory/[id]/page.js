// import ShareComponent from "@/components/shareComponent/ShareComponent";
import CreateCategory from "@/components/blogsComponent/CreateCategory/CreateCategory";
import React from "react";

const page = async ({ params }) => {
  const { id } = params;
  const data = await getAllCategoryDataById(id);
  return (
    <CreateCategory id={id} data={data} />
  );
};

export default page;

const getAllCategoryDataById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/blogCategory/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};
