import ShareComponent from "../../../../../components/shareComponent/ShareComponent";
const page = async () => {
  const editRoute = "dashboard/allpages/contactUs/editContactUs";
  const endPoints = "contactUs";
  const { contactRouteAllMetaData } = await getContactMetaData() ?? {};
  // revalidatePath("/");
  return (
    <>
      <ShareComponent
        editPath={editRoute}
        blogRouteAllMetaData={contactRouteAllMetaData}
        endPoints={endPoints}
      />
    </>
  );
};

export default page;

const getContactMetaData = async () => {
  const baseAPIUrl = process.env.BASE_API_URL
  try {
    const res = await fetch(`/api/contactUs`, {
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
