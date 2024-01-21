import ShareComponent from "@/components/shareComponent/ShareComponent";
import React from "react";

const page = async ({ params }) => {
  const { id } = params;
  const { home } = await getHomeMetaDataById(id);
  const endPoints = "home";

  const { title, description, keywords } = home;
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

const getHomeMetaDataById = async (id) => {
  const baseAPIUrl = process.env.BASE_API_URL
  try {
    const res = await fetch(`${baseAPIUrl}/api/home/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch home");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};
