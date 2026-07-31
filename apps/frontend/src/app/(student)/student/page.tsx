import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function StudentDashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-foreground tracking-tight">My Dashboard</h1>
        <Badge variant="outline" className="text-sm bg-accent/10 text-accent border-accent/20 px-3 py-1">
          Autumn Semester 2026
        </Badge>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
          <p className="text-sm font-medium text-muted-foreground mb-1">Current CGPA</p>
          <p className="text-3xl font-bold text-primary">8.74</p>
        </div>
        
        <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
          <p className="text-sm font-medium text-muted-foreground mb-1">Attendance</p>
          <div className="flex items-center gap-3">
            <p className="text-3xl font-bold text-primary">85%</p>
            <div className="flex-1 bg-muted rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
            </div>
          </div>
        </div>
        
        <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
          <p className="text-sm font-medium text-muted-foreground mb-1">Pending Assignments</p>
          <p className="text-3xl font-bold text-accent">3</p>
        </div>
        
        <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
          <p className="text-sm font-medium text-muted-foreground mb-1">Fee Dues</p>
          <p className="text-3xl font-bold text-destructive">₹ 0</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        {/* Today's Classes */}
        <div className="lg:col-span-2 bg-card rounded-xl border border-border shadow-sm p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Today's Classes</h3>
            <Button variant="link" className="text-sm">View Full Timetable</Button>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50 border border-border/50">
              <div>
                <p className="font-semibold text-primary">Data Structures and Algorithms</p>
                <p className="text-sm text-muted-foreground">Prof. Sharma • Room 304</p>
              </div>
              <div className="text-right">
                <p className="font-medium">09:00 AM</p>
                <p className="text-xs text-muted-foreground">1 hr 30 mins</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50 border border-border/50">
              <div>
                <p className="font-semibold text-primary">Database Management Systems</p>
                <p className="text-sm text-muted-foreground">Prof. Verma • Lab 2</p>
              </div>
              <div className="text-right">
                <p className="font-medium">11:00 AM</p>
                <p className="text-xs text-muted-foreground">2 hrs</p>
              </div>
            </div>
          </div>
        </div>

        {/* AI Advisor snippet */}
        <div className="bg-gradient-to-br from-primary/10 to-accent/5 rounded-xl border border-border shadow-sm p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <svg className="w-24 h-24 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded bg-primary text-primary-foreground flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 className="text-lg font-semibold text-primary">AI Academic Advisor</h3>
            </div>
            <p className="text-sm text-foreground/80 mb-4 leading-relaxed">
              Based on your recent performance in Data Structures, I recommend focusing on Graph Algorithms. Would you like me to generate a personalized practice sheet?
            </p>
            <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
              Generate Practice Sheet
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
