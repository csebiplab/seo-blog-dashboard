import ShareComponent from "@/components/shareComponent/ShareComponent";
import React from "react";

const page = async ({ params }) => {
  const { id } = params;
  const { concreteDelivery } = await getConcreteDeliveryMetaDataById(id);
  const endPoints = "concreteDelivery";

  const { title, description, keywords } = concreteDelivery;
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

const getConcreteDeliveryMetaDataById = async (id) => {
  const baseAPIUrl = process.env.BASE_API_URL
  try {
    const res = await fetch(
      `${baseAPIUrl}/api/concreteDelivery/${id}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};
