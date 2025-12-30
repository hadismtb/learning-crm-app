import connectDB from "@/utils/connectDB";
import User from "@/models/User";
import { hashPassword } from "@/utils/auth";

async function handler(req, res) {
  if (req.method !== "POST") return;

  try {
    await connectDB();
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: "failed", message: "Error in connecting to database" });
  }

  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({ status: "failed", message: "Invalid data" });
  }

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res
      .status(422)
      .json({ status: "failed", message: "User already exists" });
  }

  const hashedPassword = await hashPassword(password);

  const newUser = await User.create({ email, password: hashedPassword });
  return res.status(200).json({
    status: "success",
    message: "User created successfully.",
    data: newUser,
  });
}

export default handler;
