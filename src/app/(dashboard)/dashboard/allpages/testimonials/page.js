import ShareComponent from "../../../../../components/shareComponent/ShareComponent";
const page = async () => {
  const editRoute = "dashboard/allpages/testimonials/editTestimonials";
  const endPoints = "testimonials";
  const { testimonialRouteAllMetaData } = await getTestimonialMetaData();
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
  try {
    const res = await fetch("http://localhost:8080/api/testimonials", {
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
