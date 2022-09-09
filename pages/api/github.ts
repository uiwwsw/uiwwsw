// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("djawdlkjawdjlawkjd");
  try {
    const result = await fetch("//api.github.com/users/uiwwsw/repos", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: "failed to load data" });
  }
}
