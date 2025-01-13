import { connectToDatabase } from "@/db/db";
import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  const { password, id } = req.query;

  const client = await connectToDatabase();

  if (!client) {
    return res.status(500).json({ message: "Unable to connect to database" });
  }

  const db = client.db();

  if (method === "GET") {
    try {
      const objectId = new ObjectId(id as string);
      const gallery = await db
        .collection("gallery")
        .find({
          _id: objectId,
        })
        .toArray();

      if (gallery[0].password !== password) {
        return res
          .status(200)
          .json({ message: "Invalid password", success: false });
      } else {
        return res.status(200).json({ message: "Success", success: true });
      }
    } catch (error) {
      return res.status(500).json({ message: "Failed to fetch gallery" });
    } finally {
      await client.close();
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).json({ message: `Method ${method} Not Allowed` });
  }
};

export default handler;
