import ShareComponent from "../../../../../components/shareComponent/ShareComponent";
const page = async () => {
  const editRoute = "dashboard/allpages/home/editHome";
  const endPoints = "home";
  const { homeRouteAllMetaData } = await getHomeMetaData();
  return (
    <>
      <ShareComponent
        editPath={editRoute}
        blogRouteAllMetaData={homeRouteAllMetaData}
        endPoints={endPoints}
      />
    </>
  );
};

export default page;

const getHomeMetaData = async () => {
  const baseAPIUrl = process.env.BASE_API_URL
  try {
    const res = await fetch(`${baseAPIUrl}/api/home`, {
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
