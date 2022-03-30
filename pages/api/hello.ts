import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
	name?: string;
	error?: string;
};

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	if (req.method !== "POST")
		return res.status(404).json({ error: "Wrong type of request !" });
	res.status(200).json({ name: "John Doe" });
}
