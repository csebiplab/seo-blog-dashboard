import SiteVerificationComponent from "@/components/siteVerificationComponent/SiteVerificationComponent";
export default async function SeoSiteVerification() {
  const { verificationUrl } = await getVerificationData();
  return (
    <>
      <SiteVerificationComponent verificationUrl={verificationUrl} />
    </>
  );
}

const getVerificationData = async () => {
  try {
    const res = await fetch("http://localhost:8080/api/verificationUrl", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch verification url & meta title");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading metadata: ", error);
  }
};
