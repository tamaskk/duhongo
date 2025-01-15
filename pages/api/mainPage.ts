import { connectToDatabase } from "@/db/db";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  const client = await connectToDatabase();

  if (!client) {
    return res.status(500).json({ message: "Unable to connect to database" });
  }

  const db = client.db();

  if (method === "GET") {
    try {
      const sections = await db.collection("sections").find().toArray();
      const presentation = await db.collection("presentation").find({}).toArray();

      return res.status(200).json({ sections, presentation });
    } catch (error) {
      return res.status(500).json({ message: "Failed to fetch Sections" });
    } finally {
      await client.close();
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).json({ message: `Method ${method} Not Allowed` });
  }
};

export default handler;
