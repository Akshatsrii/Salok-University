export interface Route {
  id: string;
  name: string;
  startPoint: string;
  endPoint: string;
  busNumber: string;
  driverName: string;
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Stop {
  id: string;
  name: string;
  location: Coordinates;
  eta: string;
}

export interface FuelLog {
  id: string;
  busNumber: string;
  date: string;
  liters: number;
  cost: number;
  receiptUrl?: string;
}

export interface MaintenanceLog {
  id: string;
  busNumber: string;
  date: string;
  description: string;
  cost: number;
  status: 'SCHEDULED' | 'COMPLETED';
}
