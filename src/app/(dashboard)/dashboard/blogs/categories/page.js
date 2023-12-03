import React from "react";
import CategoryList from "@/components/blogsComponent/CategoryList/CategoryList";
export default async function page() {
  const { blogCategories } = await getAllCategoryData();
  return (
    <div>
      <CategoryList allCategorylist={blogCategories} />
    </div>
  );
}

const getAllCategoryData = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/blogCategory", {
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
