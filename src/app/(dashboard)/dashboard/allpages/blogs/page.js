
import ShareComponent from "../../../../../components/shareComponent/ShareComponent";
const page = async () => {
  const editRoute = "dashboard/allpages/blogs/editblogs";
  const endPoints = "blogs";
  const { blogRouteAllMetaData } = await getBlogMetaData();
  // revalidatePath("/");
  return (
    <>
      <ShareComponent
        editPath={editRoute}
        blogRouteAllMetaData={blogRouteAllMetaData}
        endPoints={endPoints}
      />
    </>
  );
};

export default page;

const getBlogMetaData = async () => {
  const baseAPIUrl = process.env.BASE_API_URL
  try {
    const res = await fetch(`${base}/api/blogs`, {
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
