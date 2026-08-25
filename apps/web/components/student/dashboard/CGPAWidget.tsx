import { Award } from 'lucide-react';
import { StatCard } from '../../shared/StatCard';

export const CGPAWidget = () => {
  return (
    <StatCard 
      title="Current CGPA (till Sem 5)" 
      value="8.92" 
      icon={Award} 
      trend={{ value: 2.3, isPositive: true }} 
      color="purple" 
    />
  );
};
