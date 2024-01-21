
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
  try {
    const res = await fetch("http://localhost:8080/api/blogs", {
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
