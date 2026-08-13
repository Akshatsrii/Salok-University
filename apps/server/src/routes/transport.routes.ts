import { Router } from 'express';
import { getBuses, getRouteStops, updateBusLocation, logBoarding } from '../controllers/transport.controller';

const router = Router();

router.get('/buses', getBuses);
router.get('/routes/:routeId/stops', getRouteStops);
router.put('/buses/:id/location', updateBusLocation);
router.post('/boarding', logBoarding);

export default router;
