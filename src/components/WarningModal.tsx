import React from 'react';
import { AlertTriangle, X, Shield, Phone, MapPin, Clock } from 'lucide-react';
import { Route } from '../types/route';

interface WarningModalProps {
  isOpen: boolean;
  route: Route | null;
  onClose: () => void;
  onProceed: () => void;
}

const WarningModal: React.FC<WarningModalProps> = ({ isOpen, route, onClose, onProceed }) => {
  if (!isOpen || !route) return null;

  const isHighRisk = route.riskLevel === 'high';
  const riskText = isHighRisk ? 'High Risk' : 'Moderate Risk';
  const riskColor = isHighRisk ? 'text-red-600' : 'text-yellow-600';
  const borderColor = isHighRisk ? 'border-red-200' : 'border-yellow-200';
  const bgColor = isHighRisk ? 'bg-red-50' : 'bg-yellow-50';

  const precautions = [
    { icon: <MapPin className="w-4 h-4" />, text: 'Share your live location with a trusted contact' },
    { icon: <Clock className="w-4 h-4" />, text: 'Avoid late-night travel on this route' },
    { icon: <Phone className="w-4 h-4" />, text: 'Keep emergency numbers ready' },
    { icon: <Shield className="w-4 h-4" />, text: 'Stay alert and avoid distractions' }
  ];

  const emergencyNumbers = [
    { service: 'Police', number: '100' },
    { service: 'Ambulance', number: '108' },
    { service: "Women's Helpline", number: '1091' }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className={`${bgColor} ${borderColor} border-b px-6 py-4 rounded-t-xl`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`p-2 ${isHighRisk ? 'bg-red-100' : 'bg-yellow-100'} rounded-full`}>
                <AlertTriangle className={`w-6 h-6 ${riskColor}`} />
              </div>
              <div>
                <h2 className={`text-lg font-bold ${riskColor}`}>
                  ⚠️ {riskText} Route Detected
                </h2>
                <p className="text-sm text-gray-600 mt-1">Please take precautionary measures</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white hover:bg-opacity-50 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-4">
          {/* Route Info */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-2">Selected Route:</h3>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-sm font-medium text-gray-700">{route.path}</p>
              <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                <span>📍 {route.distance}</span>
                <span>⏱️ {route.estimatedTime}</span>
              </div>
            </div>
          </div>

          {/* Precautionary Measures */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
              <Shield className="w-4 h-4 mr-2" />
              Safety Precautions
            </h3>
            <div className="space-y-3">
              {precautions.map((precaution, index) => (
                <div key={index} className="flex items-start space-x-3 text-sm text-gray-600">
                  <div className="mt-0.5 text-blue-500 flex-shrink-0">
                    {precaution.icon}
                  </div>
                  <span>{precaution.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Emergency Numbers */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              Emergency Contacts
            </h3>
            <div className="grid grid-cols-1 gap-2">
              {emergencyNumbers.map((contact, index) => (
                <div key={index} className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2">
                  <span className="text-sm font-medium text-gray-700">{contact.service}</span>
                  <a
                    href={`tel:${contact.number}`}
                    className="text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    {contact.number}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-50 rounded-b-xl flex space-x-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
          >
            Cancel
          </button>
          <button
            onClick={onProceed}
            className={`flex-1 px-4 py-2 text-white rounded-lg font-medium transition-colors ${
              isHighRisk
                ? 'bg-red-600 hover:bg-red-700'
                : 'bg-yellow-500 hover:bg-yellow-600'
            }`}
          >
            Proceed to Maps
          </button>
        </div>
      </div>
    </div>
  );
};

export default WarningModal;