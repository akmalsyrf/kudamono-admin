// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createRouter } from 'next-connect';
import models from '@/db'

const router = createRouter();

router.get(async (req, res) => {
  const hotel = await models.m_hotel.findAll()
  res.status(200).send(hotel)
})


export default router.handler();
