import ShareComponent from "@/components/shareComponent/ShareComponent";
import React from "react";

const page = async ({ params }) => {
  const { id } = params;
  const { contactUs } = await getcontactMetaDataById(id);
  const endPoints = "contactUs";

  const { title, description, keywords } = contactUs;
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

const getcontactMetaDataById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/contactUs/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch contactUs");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};
