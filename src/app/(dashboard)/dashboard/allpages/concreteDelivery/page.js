import ShareComponent from "../../../../../components/shareComponent/ShareComponent";
const page = async () => {
  const editRoute = "dashboard/allpages/concreteDelivery/editConcreteDelivery";
  const endPoints = "concreteDelivery";
  const { concreteDeliveryRouteAllMetaData } =
    await getConcreteDeliveryMetaData();
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
  try {
    const res = await fetch("http://localhost:3000/api/concreteDelivery", {
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
