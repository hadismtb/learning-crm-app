import connectDB from "@/utils/connectDB";
import User from "@/models/User";
import { sign } from "jsonwebtoken";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import { serialize } from "cookie";

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
  console.log(process.env.SECRET_KEY, process);
  const secretKey = process.env.SECRET_KEY || "XYZ124";
  const expiration = 24 * 60 * 60;

  if (!email || !password) {
    return res.status(422).json({ status: "failed", message: "Invalid data" });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res
      .status(404)
      .json({ status: "failed", message: "User not found!" });
  }

  const isValid = await isValid(password, user.password);
  if (!isValid) {
    return res.status(422).json({
      status: "failed",
      message: "Username or password is incorrect!",
    });
  }

  const token = sign({ email }, secretKey, { expiresIn: expiration });

  const serialized = serialize("token", token, {
    httpOnly: true,
    path: "/",
    maxAge: expiration,
  });

  return res.status(200).setHeader("Set-Cookie", serialized).json({
    status: "success",
    message: "Successfully logged in",
    data: { email },
  });
}

export default handler;
