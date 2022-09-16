
import { NextApiRequest, NextApiResponse } from "next"
import prisma from "../../lib/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { project } = req.body;
    // const user: Prisma.UserCreateInput = JSON.parse(req.body);
    const savedUser = await prisma.project.create({
      data: project
    });
    res.status(200).json(savedUser);
  } catch (error) {
    res.status(400).json({ message: 'Something went wrong' })
  }
}

