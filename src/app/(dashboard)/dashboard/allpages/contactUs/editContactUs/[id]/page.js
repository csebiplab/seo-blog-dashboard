import ShareComponent from "@/components/shareComponent/ShareComponent";
import React from "react";

const Page = async ({ params }) => {
  const { id } = params;
  const { contactUs } = await getcontactMetaDataById(id) ?? {};
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

export default Page;

const getcontactMetaDataById = async (id) => {
  const baseAPIUrl = process.env.BASE_API_URL
  try {
    const res = await fetch(`${baseAPIUrl}/api/contactUs/${id}`, {
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
