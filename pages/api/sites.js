// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import got from "got";

export default async function handler(_, res) {
  const url = "https://2fa.directory/api/v3/u2f.json";
  const response = await got(url).json();

  res.setHeader("Cache-Control", "s-maxage=86400");
  res.status(200).json(response)

}
