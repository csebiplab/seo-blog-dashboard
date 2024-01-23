import ShareComponent from "../../../../../components/shareComponent/ShareComponent";

const page = async () => {
  const editRoute = "dashboard/allpages/concreteDelivery/editConcreteDelivery";
  const endPoints = "concreteDelivery";
  const { concreteDeliveryRouteAllMetaData } =
    await getConcreteDeliveryMetaData() ?? {};
  // revalidatePath("/");
  return (
    <>
      <ShareComponent
        editPath={editRoute}
        blogRouteAllMetaData={concreteDeliveryRouteAllMetaData}
        endPoints={endPoints}
      />
    </>
  );
};

export default page;

const getConcreteDeliveryMetaData = async () => {
  const baseAPIUrl = process.env.BASE_API_URL;
  try {
    const res = await fetch(`${baseAPIUrl}/api/concreteDelivery`, {
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
