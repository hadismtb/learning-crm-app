import connectDB from "@/utils/connectDB";
import Customer from "@/models/Customer";
import HomePage from "@/components/template/HomePage";
import { verifyToken } from "@/utils/auth";

export default function Index({ customers }) {
  return <HomePage customers={customers} />;
}

export async function getServerSideProps(context) {
  const { token } = context.req.cookies;
  const secretKey = process.env.SECRET_KEY;

  const result = verifyToken(token, secretKey);

  if (!result) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  } else
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
