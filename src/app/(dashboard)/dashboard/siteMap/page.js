import SiteMapComponent from "@/components/siteMapComponent/SiteMapComponent";
export default async function siteMap() {
  const { sitemap } = await getSitemapData();
  return (
    <>
      <SiteMapComponent sitemap={sitemap} />
    </>
  );
}

const getSitemapData = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/siteMap", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch sitemap url");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading sitemap: ", error);
  }
};
