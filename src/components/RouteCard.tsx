import React from 'react';
import { MapPin, Clock, Navigation, Shield, AlertTriangle, CheckCircle } from 'lucide-react';
import { Route, RiskConfig } from '../types/route';

interface RouteCardProps {
  route: Route;
  onClick: (route: Route) => void;
}

const RouteCard: React.FC<RouteCardProps> = ({ route, onClick }) => {
  const riskConfigs: Record<string, RiskConfig> = {
    safe: {
      level: 'safe',
      color: 'text-green-700',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      label: 'Safe Route'
    },
    moderate: {
      level: 'moderate',
      color: 'text-yellow-700',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      label: 'Moderate Risk'
    },
    high: {
      level: 'high',
      color: 'text-red-700',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      label: 'High Risk'
    }
  };

  const config = riskConfigs[route.riskLevel];

  const getRiskIcon = () => {
    switch (route.riskLevel) {
      case 'safe':
        return <CheckCircle className="w-4 h-4" />;
      case 'moderate':
        return <Shield className="w-4 h-4" />;
      case 'high':
        return <AlertTriangle className="w-4 h-4" />;
      default:
        return <CheckCircle className="w-4 h-4" />;
    }
  };

  return (
    <div
      onClick={() => onClick(route)}
      className={`${config.bgColor} ${config.borderColor} border-l-4 rounded-lg p-4 cursor-pointer transition-all duration-200 hover:shadow-md hover:scale-[1.02] group`}
    >
      {/* Header with Risk Badge */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="font-semibold text-gray-800 text-sm leading-relaxed group-hover:text-gray-900 transition-colors">
            {route.path}
          </h3>
        </div>
        <div className={`${config.color} ${config.bgColor} px-2 py-1 rounded-full flex items-center space-x-1 text-xs font-medium border ${config.borderColor} ml-3 flex-shrink-0`}>
          {getRiskIcon()}
          <span>{config.label}</span>
        </div>
      </div>

      {/* Route Details */}
      <div className="flex items-center justify-between text-xs text-gray-600">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <MapPin className="w-3 h-3" />
            <span>{route.distance}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-3 h-3" />
            <span>{route.estimatedTime}</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-1 text-blue-600 group-hover:text-blue-700 transition-colors">
          <Navigation className="w-3 h-3" />
          <span className="font-medium">Navigate</span>
        </div>
      </div>

      {/* Hover Effect Indicator */}
      <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <div className="h-px bg-gradient-to-r from-blue-200 to-blue-300"></div>
      </div>
    </div>
  );
};

export default RouteCard;