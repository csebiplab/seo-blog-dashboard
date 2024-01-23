import ShareComponent from "../../../../../components/shareComponent/ShareComponent";
const page = async () => {
  const editRoute = "dashboard/allpages/testimonials/editTestimonials";
  const endPoints = "testimonials";
  const { testimonialRouteAllMetaData } = await getTestimonialMetaData() ?? {};
  return (
    <>
      <ShareComponent
        editPath={editRoute}
        blogRouteAllMetaData={testimonialRouteAllMetaData}
        endPoints={endPoints}
      />
    </>
  );
};

export default page;

const getTestimonialMetaData = async () => {
  const baseAPIUrl = process.env.BASE_API_URL
  try {
    const res = await fetch(`${baseAPIUrl}/api/testimonials`, {
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
