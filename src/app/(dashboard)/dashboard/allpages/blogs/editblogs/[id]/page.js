import ShareComponent from "@/components/shareComponent/ShareComponent";
import React from "react";

const page = async ({ params }) => {
  const { id } = params;
  const { blogs } = await getblogMetaDataById(id);
  const endPoints = "blogs";

  const { title, description, keywords } = blogs;
  return (
    <ShareComponent
      id={id}
      titleValue={title}
      descriptionValue={description}
      keywordsValue={keywords}
      endPoints={endPoints}
    />
  );
};

export default page;

const getblogMetaDataById = async (id) => {
  const baseAPIUrl = process.env.BASE_API_URL
  try {
    const res = await fetch(`${baseAPIUrl}/api/blogs/${id}`, {
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
