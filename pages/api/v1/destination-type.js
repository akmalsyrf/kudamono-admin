// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createRouter } from 'next-connect';
import models from '@/db'

const router = createRouter();

router.get(async (req, res) => {
  const destinationType = await models.m_destination_type.findAll()
  res.status(200).send(destinationType)
})


export default router.handler();
