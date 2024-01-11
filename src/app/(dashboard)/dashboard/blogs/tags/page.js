import React from "react";
import CreateUpdateTag from "../../../../../components/blogsComponent/CreateUpdateTag/CreateUpdateTag";
import TagList from "../../../../../components/blogsComponent/TagList/TagList";
export default async function page() {
  const { blogTags } = await getAllTagData();
  return (
    <div>
      <TagList allTaglist={blogTags} />
    </div>
  );
}

const getAllTagData = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/blogTag", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch metaData");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading metadata: ", error);
  }
};
