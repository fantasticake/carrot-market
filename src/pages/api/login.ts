import prisma from "@/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (!req.body.email && !req.body.phone) {
      res.status(400).json({ ok: false, error: "Email or Phone is required" });
      return;
    }

    const data = req.body.email
      ? { email: req.body.email }
      : { phone: req.body.phone };

    let user = await prisma.user.findUnique({
      where: data,
      select: { id: true },
    });
    if (!user)
      user = await prisma.user.create({
        data,
        select: { id: true },
      });

    await prisma.token.create({ data: { user: { connect: { id: user.id } } } });
    //send login link

    res.status(200).json({ ok: true });
  } catch (e) {
    console.log(e);
    res.status(500).json({ ok: false, error: "Internal Server Error" });
  }
}
