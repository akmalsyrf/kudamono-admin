// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createRouter } from 'next-connect';
import models from '@/db'
import auth from '@/middleware/auth';

const router = createRouter();
router.use(auth)

router.get(async (req, res) => {
  try {
    const hotel = await models.m_hotel.findAll()
    res.status(200).send(hotel)
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: 'server error'
    })
  }
})


export default router.handler();
