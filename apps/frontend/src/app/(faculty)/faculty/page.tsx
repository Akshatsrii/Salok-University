import React from 'react';
import { Button } from '@/components/ui/button';

export default function FacultyDashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-foreground tracking-tight">Overview</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
          <p className="text-sm font-medium text-muted-foreground mb-1">Today's Classes</p>
          <p className="text-3xl font-bold text-primary">3</p>
        </div>
        
        <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
          <p className="text-sm font-medium text-muted-foreground mb-1">Pending Evaluations</p>
          <p className="text-3xl font-bold text-accent">45</p>
        </div>
        
        <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
          <p className="text-sm font-medium text-muted-foreground mb-1">Upcoming Meetings</p>
          <p className="text-3xl font-bold text-primary">2</p>
        </div>
      </div>

      <div className="mt-8 bg-card rounded-xl border border-border shadow-sm p-8">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">Today's Schedule</h3>
          <Button variant="outline" size="sm">Mark Attendance</Button>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50 border border-border/50">
            <div>
              <p className="font-semibold text-primary">Data Structures and Algorithms</p>
              <p className="text-sm text-muted-foreground">B.Tech CSE Sem 3 • Room 304</p>
            </div>
            <div className="text-right flex items-center gap-4">
              <div>
                <p className="font-medium">09:00 AM</p>
                <p className="text-xs text-muted-foreground">1 hr 30 mins</p>
              </div>
              <Button size="sm">Start Class</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
