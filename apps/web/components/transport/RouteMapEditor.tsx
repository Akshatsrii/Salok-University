"use client";

import { useState } from 'react';
import { Map, Plus, MapPin } from 'lucide-react';
import type { Route, Stop } from '../../types/transport';

export const RouteMapEditor = () => {
  const [routes] = useState<Route[]>([
    { id: 'R1', name: 'City Center Express', startPoint: 'Main Square', endPoint: 'Campus', busNumber: 'UP32-AB-1234', driverName: 'Ramu Kaka' }
  ]);

  const [stops] = useState<Stop[]>([
    { id: 's1', name: 'Sector 18', location: { lat: 26.84, lng: 80.94 }, eta: '07:30 AM' },
    { id: 's2', name: 'Polytechnic Chauraha', location: { lat: 26.85, lng: 80.95 }, eta: '07:45 AM' }
  ]);

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mt-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <Map className="w-5 h-5 text-indigo-600" /> Route Editor
          </h3>
          <p className="text-sm text-gray-500">Define bus routes, assign drivers, and add pickup stops.</p>
        </div>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md font-medium text-sm hover:bg-indigo-700 flex items-center gap-2">
          <Plus className="w-4 h-4" /> New Route
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Route Details */}
        <div className="lg:col-span-1 space-y-4 border-r border-gray-200 pr-6">
          <h4 className="font-semibold text-gray-700">Active Routes</h4>
          {routes.map(route => (
            <div key={route.id} className="p-4 border border-indigo-200 bg-indigo-50 rounded-lg cursor-pointer">
              <div className="flex justify-between items-start mb-2">
                <span className="font-bold text-indigo-900">{route.name}</span>
                <span className="px-2 py-0.5 bg-indigo-200 text-indigo-800 text-xs font-bold rounded">{route.id}</span>
              </div>
              <p className="text-xs text-indigo-700 mb-1">Bus: {route.busNumber}</p>
              <p className="text-xs text-indigo-700">Driver: {route.driverName}</p>
            </div>
          ))}
        </div>

        {/* Stops Editor */}
        <div className="lg:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-semibold text-gray-700">Stops for City Center Express</h4>
            <button className="text-indigo-600 text-sm font-medium hover:underline">+ Add Stop</button>
          </div>
          
          <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
            {stops.map((stop, i) => (
              <div key={stop.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-indigo-100 text-indigo-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-gray-200 bg-white shadow-sm">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-gray-800">{stop.name}</span>
                    <span className="text-xs font-bold text-orange-500">ETA: {stop.eta}</span>
                  </div>
                  <p className="text-xs text-gray-400">Lat: {stop.location.lat}, Lng: {stop.location.lng}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
