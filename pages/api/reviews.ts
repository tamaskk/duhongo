import fetch from "node-fetch";

export default async function handler(req: any, res: any) {
  try {
    const { placeid } = req.query;

    const apiKey = process.env.GOOGLE_API_KEY || 'AIzaSyCTlKbNEPiDQE8SFtRRVqQLhJFFqZhMrps'; // Secure your API key in an env file
    const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeid}&key=${apiKey}&language=hu`;

    const response = await fetch(url);
    const data: any = await response.json();

    if (!data) {
      res.status(400).json({ error: data.error_message });
    }

    if (response.ok) {
      res.status(200).json(data.result.reviews);
    } else {
      res.status(response.status).json({ error: data.error_message });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch reviews" });
  }
}
