import { Route } from '../types/route';

export const mockRoutes: Route[] = [
  // Safe Routes
  {
    id: '1',
    path: 'Kurichi -> Ukkadam -> Gandhipuram -> Saravanampatti',
    riskLevel: 'safe',
    coordinates: [
      { lat: 11.0168, lng: 76.9558, name: 'Kurichi' },
      { lat: 11.0237, lng: 76.9703, name: 'Ukkadam' },
      { lat: 11.0041, lng: 76.9691, name: 'Gandhipuram' },
      { lat: 11.0777, lng: 76.8718, name: 'Saravanampatti' }
    ],
    estimatedTime: '25 mins',
    distance: '12.5 km'
  },
  {
    id: '2',
    path: 'RS Puram -> Race Course -> Town Hall -> Peelamedu',
    riskLevel: 'safe',
    coordinates: [
      { lat: 11.0015, lng: 76.9615, name: 'RS Puram' },
      { lat: 10.9969, lng: 76.9761, name: 'Race Course' },
      { lat: 11.0052, lng: 76.9773, name: 'Town Hall' },
      { lat: 11.0296, lng: 76.9478, name: 'Peelamedu' }
    ],
    estimatedTime: '18 mins',
    distance: '8.3 km'
  },
  {
    id: '3',
    path: 'Singanallur -> Hopes College -> Tidel Park',
    riskLevel: 'safe',
    coordinates: [
      { lat: 11.0094, lng: 77.0365, name: 'Singanallur' },
      { lat: 11.0169, lng: 77.0233, name: 'Hopes College' },
      { lat: 11.0240, lng: 77.0064, name: 'Tidel Park' }
    ],
    estimatedTime: '15 mins',
    distance: '6.2 km'
  },

  // Moderate Risk Routes
  {
    id: '4',
    path: 'Podanur -> Kuniyamuthur -> Lakshmi Mills -> Ganapathy',
    riskLevel: 'moderate',
    coordinates: [
      { lat: 10.9751, lng: 76.9729, name: 'Podanur' },
      { lat: 10.9891, lng: 76.9506, name: 'Kuniyamuthur' },
      { lat: 10.9996, lng: 76.9531, name: 'Lakshmi Mills' },
      { lat: 11.0651, lng: 76.9194, name: 'Ganapathy' }
    ],
    estimatedTime: '32 mins',
    distance: '15.8 km'
  },
  {
    id: '5',
    path: 'Vadavalli -> Marudhamalai -> Mettupalayam Road',
    riskLevel: 'moderate',
    coordinates: [
      { lat: 11.0711, lng: 76.8983, name: 'Vadavalli' },
      { lat: 11.0911, lng: 76.8640, name: 'Marudhamalai' },
      { lat: 11.1106, lng: 76.8394, name: 'Mettupalayam Road' }
    ],
    estimatedTime: '28 mins',
    distance: '13.4 km'
  },

  // High Risk Routes
  {
    id: '6',
    path: 'Pollachi -> Kinathukadavu -> Sulur -> Coimbatore',
    riskLevel: 'high',
    coordinates: [
      { lat: 10.6586, lng: 77.0081, name: 'Pollachi' },
      { lat: 10.8217, lng: 76.9554, name: 'Kinathukadavu' },
      { lat: 11.0234, lng: 77.1286, name: 'Sulur' },
      { lat: 11.0168, lng: 76.9558, name: 'Coimbatore' }
    ],
    estimatedTime: '45 mins',
    distance: '38.2 km'
  },
  {
    id: '7',
    path: 'Annur -> Avinashi Road -> Thudiyalur -> Sarcarsamakulam',
    riskLevel: 'high',
    coordinates: [
      { lat: 11.2350, lng: 77.1061, name: 'Annur' },
      { lat: 11.0677, lng: 77.0351, name: 'Avinashi Road' },
      { lat: 11.0899, lng: 76.9165, name: 'Thudiyalur' },
      { lat: 11.1001, lng: 76.8901, name: 'Sarcarsamakulam' }
    ],
    estimatedTime: '42 mins',
    distance: '35.7 km'
  }
];