"use client";

import React from 'react';

interface LoadingSkeletonProps {
  rows?: number;
  className?: string;
}

export const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({ rows = 5, className = "" }) => {
  return (
    <div className={`space-y-4 animate-pulse w-full ${className}`}>
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="flex space-x-4">
          <div className="h-12 bg-gray-200 rounded-xl w-full"></div>
        </div>
      ))}
    </div>
  );
};
