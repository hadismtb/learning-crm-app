import connectDB from "@/utils/connectDB";
import Customer from "@/models/Customer";

export default async function handler(req, res) {
  try {
    await connectDB();
  } catch (error) {
    // alert(error);
    console.log(error);
    res
      .status(500)
      .json({ message: "Internal Server Error", status: "failed" });
    return;
  }

  if (req.method === "POST") {
    const data = req.body.data;

    if (!data?.name || !data?.lastName || !data?.email) {
      return res
        .status(400)
        .json({ error: "Missing required field", status: "failed" });
    }

    try {
      const customer = await Customer.create(data);

      res.status(201).json({
        data: customer,
        status: "success",
        message: "Data created successfully",
      });
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .json({ message: "Internal Server Error", status: "failed" });
    }
  }
}
