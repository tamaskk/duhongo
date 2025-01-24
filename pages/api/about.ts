import { connectToDatabase } from "@/db/db";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  const client = await connectToDatabase();

  if (!client) {
    res.status(500).json({ message: "Unable to connect to database" });
    return; // Ensure the function exits after sending the response
  }

  const db = client.db();

  try {
    if (method === "GET") {
      const about = await db.collection("about").find().toArray();
      res.status(200).json({ about }); // Send response
    } else {
      res.setHeader("Allow", ["GET"]);
      res.status(405).json({ message: `Method ${method} Not Allowed` }); // Send response for unsupported methods
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal Server Error" }); // Handle errors
  } finally {
    await client.close(); // Ensure the database connection is closed
  }
};

export default handler;
