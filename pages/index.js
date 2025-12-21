import connectDB from "@/utils/connectDB";
import Customer from "@/models/Customer";

export default function Index({ customers }) {
  console.log(customers);
  return <h1>index page</h1>;
}

export async function getServerSideProps() {
  try {
    await connectDB();
    const customers = await Customer.find();
    return {
      props: { customers: JSON.parse(JSON.stringify(customers)) },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
