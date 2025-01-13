import { connectToDatabase } from "@/db/db";
import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  const { id } = req.query;

  const client = await connectToDatabase();

  if (!client) {
    return res.status(500).json({ message: "Unable to connect to database" });
  }

  const db = client.db();

  if (method === "GET") {
    try {
      let gallery;

      if (id) {
        const objectId = new ObjectId(id as string);
        gallery = await db
          .collection("gallery")
          .find({
            _id: objectId,
            isPublished: true,
          })
          .toArray();
      } else {
        gallery = await db
          .collection("gallery")
          .find({
            isPublished: true,
          })
          .toArray();
      }
      return res.status(200).json({ gallery });
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
