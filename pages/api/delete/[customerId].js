import connectDB from "@/utils/connectDB";
import Customer from "@/models/Customer";

export default async function handler(req, res) {
  try {
    await connectDB();
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: "failed", message: "Error in connecting to database" });
  }

  if (req.method === "DELETE") {
    const id = req.query.customerId;

    try {
      await Customer.deleteOne({ _id: id });
      res
        .status(200)
        .json({ status: "success", message: "Successfully deleted" });
    } catch (err) {
      console.log(err.message);
      return res
        .status(500)
        .json({ status: "failed", message: "Error in deleting customer" });
    }
  }
}
