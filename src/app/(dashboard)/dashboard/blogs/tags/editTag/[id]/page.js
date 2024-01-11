import React from "react";
import CreateUpdateTag from "../../../../../../../components/blogsComponent/CreateUpdateTag/CreateUpdateTag";

const page = async ({ params }) => {
  const { id } = params;
  const data = await getAllTagDataById(id);
  return <CreateUpdateTag id={id} data={data} />;
};

export default page;

const getAllTagDataById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/blogTag/${id}`, {
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
