import { Router } from 'express';
import { bookingRoom, changeBooking, listBooking } from '@/controllers';
import { authenticateToken } from '@/middlewares';

const bookingRouter = Router();

bookingRouter.all('/*', authenticateToken).get('', listBooking).post('', bookingRoom).put('/:bookingId', changeBooking);

export { bookingRouter };
