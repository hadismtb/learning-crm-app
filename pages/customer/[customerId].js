import { useEffect, useState } from "react";
import { router } from "next/client";
import CustomerDetailsPage from "@/components/template/CustomerDetailsPage";

function Index() {
  const [data, setData] = useState(null);

  const {
    query: { customerId },
    isReady,
  } = router;

  useEffect(() => {
    if (!isReady) return;
    fetch(`/api/customer/${customerId}`)
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, [isReady]);

  if (data) return <CustomerDetailsPage data={data} />;
}

export default Index;
