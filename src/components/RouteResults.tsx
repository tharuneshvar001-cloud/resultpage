import React, { useState } from 'react';
import { Route as RouteIcon, Shield, AlertTriangle, CheckCircle, MapPin } from 'lucide-react';
import { Route } from '../types/route';
import RouteCard from './RouteCard';
import WarningModal from './WarningModal';
import { mockRoutes } from '../data/mockRoutes';

const RouteResults: React.FC = () => {
  const [selectedRoute, setSelectedRoute] = useState<Route | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const safeRoutes = mockRoutes.filter(route => route.riskLevel === 'safe');
  const moderateRoutes = mockRoutes.filter(route => route.riskLevel === 'moderate');
  const highRiskRoutes = mockRoutes.filter(route => route.riskLevel === 'high');

  const handleRouteClick = (route: Route) => {
    if (route.riskLevel === 'safe') {
      openGoogleMaps(route);
    } else {
      setSelectedRoute(route);
      setIsModalOpen(true);
    }
  };

  const openGoogleMaps = (route: Route) => {
    // Create waypoints string for Google Maps
    const waypoints = route.coordinates.map(coord => `${coord.lat},${coord.lng}`).join('|');
    const origin = route.coordinates[0];
    const destination = route.coordinates[route.coordinates.length - 1];
    
    const googleMapsUrl = `https://www.google.com/maps/dir/${origin.lat},${origin.lng}/${destination.lat},${destination.lng}`;
    window.open(googleMapsUrl, '_blank');
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedRoute(null);
  };

  const handleModalProceed = () => {
    if (selectedRoute) {
      openGoogleMaps(selectedRoute);
    }
    handleModalClose();
  };

  const SectionHeader = ({ 
    title, 
    count, 
    icon, 
    colorClass, 
    bgClass, 
    borderClass 
  }: { 
    title: string;
    count: number;
    icon: React.ReactNode;
    colorClass: string;
    bgClass: string;
    borderClass: string;
  }) => (
    <div className={`${bgClass} ${borderClass} border-l-4 rounded-lg p-4 mb-4`}>
      <div className="flex items-center space-x-3">
        <div className={`${colorClass} p-2 ${bgClass} rounded-full border ${borderClass}`}>
          {icon}
        </div>
        <div>
          <h2 className={`text-lg font-bold ${colorClass}`}>{title}</h2>
          <p className="text-sm text-gray-600">{count} route{count !== 1 ? 's' : ''} available</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-100 p-3 rounded-full">
              <RouteIcon className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Route Analysis Results</h1>
              <p className="text-gray-600 mt-1">
                AI-powered route safety assessment • Total routes: {mockRoutes.length}
              </p>
            </div>
          </div>
          
          {/* Summary Stats */}
          <div className="flex items-center space-x-6 mt-6 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-600">{safeRoutes.length} Safe Routes</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span className="text-gray-600">{moderateRoutes.length} Moderate Risk</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="text-gray-600">{highRiskRoutes.length} High Risk</span>
            </div>
          </div>
        </div>
      </div>

      {/* Results Container */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Safe Routes Section */}
        {safeRoutes.length > 0 && (
          <section className="mb-8">
            <SectionHeader
              title="Safe Routes"
              count={safeRoutes.length}
              icon={<CheckCircle className="w-5 h-5" />}
              colorClass="text-green-700"
              bgClass="bg-green-50"
              borderClass="border-green-200"
            />
            <div className="space-y-3">
              {safeRoutes.map((route) => (
                <RouteCard
                  key={route.id}
                  route={route}
                  onClick={handleRouteClick}
                />
              ))}
            </div>
          </section>
        )}

        {/* Moderate Risk Routes Section */}
        {moderateRoutes.length > 0 && (
          <section className="mb-8">
            <SectionHeader
              title="Moderate Risk Routes"
              count={moderateRoutes.length}
              icon={<Shield className="w-5 h-5" />}
              colorClass="text-yellow-700"
              bgClass="bg-yellow-50"
              borderClass="border-yellow-200"
            />
            <div className="space-y-3">
              {moderateRoutes.map((route) => (
                <RouteCard
                  key={route.id}
                  route={route}
                  onClick={handleRouteClick}
                />
              ))}
            </div>
          </section>
        )}

        {/* High Risk Routes Section */}
        {highRiskRoutes.length > 0 && (
          <section className="mb-8">
            <SectionHeader
              title="High Risk Routes"
              count={highRiskRoutes.length}
              icon={<AlertTriangle className="w-5 h-5" />}
              colorClass="text-red-700"
              bgClass="bg-red-50"
              borderClass="border-red-200"
            />
            <div className="space-y-3">
              {highRiskRoutes.map((route) => (
                <RouteCard
                  key={route.id}
                  route={route}
                  onClick={handleRouteClick}
                />
              ))}
            </div>
          </section>
        )}

        {/* Footer Info */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mt-8">
          <div className="flex items-start space-x-3">
            <MapPin className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">How to Use Route Results</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <p>• <strong>Safe Routes (Green):</strong> Click to navigate directly via Google Maps</p>
                <p>• <strong>Moderate/High Risk Routes:</strong> Shows safety warnings before navigation</p>
                <p>• Routes are analyzed using AI models considering traffic, crime data, and road conditions</p>
                <p>• Always follow traffic rules and stay alert while driving</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Warning Modal */}
      <WarningModal
        isOpen={isModalOpen}
        route={selectedRoute}
        onClose={handleModalClose}
        onProceed={handleModalProceed}
      />
    </div>
  );
};

export default RouteResults;