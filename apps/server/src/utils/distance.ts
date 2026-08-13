/**
 * Utility to calculate distance between two coordinates in meters using the Haversine formula.
 * Useful for triggering notifications when a bus is near a stop.
 */
export const calculateDistanceMeters = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
  const R = 6371e3; // Earth radius in meters
  const φ1 = lat1 * Math.PI / 180;
  const φ2 = lat2 * Math.PI / 180;
  const Δφ = (lat2 - lat1) * Math.PI / 180;
  const Δλ = (lon2 - lon1) * Math.PI / 180;

  const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
};

/**
 * Check if a bus is within a certain radius of a stop
 */
export const isNearStop = (busLat: number, busLng: number, stopLat: number, stopLng: number, radiusMeters: number = 500): boolean => {
  return calculateDistanceMeters(busLat, busLng, stopLat, stopLng) <= radiusMeters;
};
