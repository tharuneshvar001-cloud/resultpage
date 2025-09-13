export interface RouteCoordinate {
  lat: number;
  lng: number;
  name: string;
}

export interface Route {
  id: string;
  path: string;
  riskLevel: 'safe' | 'moderate' | 'high';
  coordinates: RouteCoordinate[];
  estimatedTime: string;
  distance: string;
}

export interface RiskConfig {
  level: 'safe' | 'moderate' | 'high';
  color: string;
  bgColor: string;
  borderColor: string;
  label: string;
}