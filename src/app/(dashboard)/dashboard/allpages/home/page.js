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
  try {
    const res = await fetch("http://localhost:3000/api/home", {
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
