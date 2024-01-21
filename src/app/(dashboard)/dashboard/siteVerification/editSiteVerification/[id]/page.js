import SiteVerificationComponent from "@/components/siteVerificationComponent/SiteVerificationComponent";
import React from "react";

const page = async ({ params }) => {
  const { id } = params;
  const { verificationData } = await getVerificationMetaDataById(id);
  const { title, url } = verificationData;
  return (
    <SiteVerificationComponent id={id} titleValue={title} urlValue={url} />
  );
};

export default page;

const getVerificationMetaDataById = async (id) => {
  const baseAPIUrl = process.env.BASE_API_URL
  try {
    const res = await fetch(`${baseAPIUrl}/api/verificationUrl/${id}`, {
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
