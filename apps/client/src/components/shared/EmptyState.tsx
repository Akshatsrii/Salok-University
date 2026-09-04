
import React from 'react';
import { LucideIcon, FileX } from 'lucide-react';

interface EmptyStateProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  actionLabel?: string;
  onAction?: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ 
  title, 
  description, 
  icon: Icon = FileX,
  actionLabel,
  onAction
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 bg-white rounded-3xl border border-gray-100 shadow-sm text-center">
      <div className="p-4 bg-gray-50 rounded-full mb-4 text-gray-400">
        <Icon className="w-12 h-12" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-500 max-w-sm mb-6">{description}</p>
      
      {actionLabel && onAction && (
        <button 
          onClick={onAction}
          className="bg-[#1a2b4c] text-white px-6 py-2.5 rounded-xl font-bold hover:bg-[#ffb800] hover:text-[#1a2b4c] transition-colors"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
};
