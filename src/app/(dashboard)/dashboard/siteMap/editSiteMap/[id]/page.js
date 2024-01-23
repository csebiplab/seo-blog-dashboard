import SiteMapComponent from "@/components/siteMapComponent/SiteMapComponent";
import React from "react";

const page = async ({ params }) => {
  const { id } = params;
  // console.log("siteMap data", await getSiteMapDataById(id));
  const sitemapData = await getSiteMapDataById(id);
  const { title, url } = sitemapData ?? {};
  return <SiteMapComponent id={id} titleValue={title} urlValue={url} />;
  // return <SiteMapComponent id={id} titleValue={"dd"} urlValue={"dd"} />;
};

export default page;

const getSiteMapDataById = async (id) => {
  const baseAPIUrl = process.env.BASE_API_URL
  try {
    const res = await fetch(`${baseAPIUrl}/api/siteMap/${id}`, {
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
