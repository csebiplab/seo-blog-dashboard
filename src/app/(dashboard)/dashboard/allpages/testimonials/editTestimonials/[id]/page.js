import ShareComponent from "@/components/shareComponent/ShareComponent";
import React from "react";

const page = async ({ params }) => {
  const { id } = params;
  const { testimonials } = await getTestimonialMetaDataById(id);
  const endPoints = "testimonials";

  const { title, description, keywords } = testimonials;
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

const getTestimonialMetaDataById = async (id) => {
  const baseAPIUrl = process.env.BASE_API_URL
  try {
    const res = await fetch(`/api/testimonials/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch testimonials");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};
