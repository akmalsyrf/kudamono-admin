// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createRouter } from 'next-connect';
import models from '@/db'

const router = createRouter();

router.get(async (req, res) => {
  const city = await models.m_city.findAll()
  res.status(200).send(city)
})


export default router.handler();
