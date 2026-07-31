import React from 'react';
import { Button } from '@/components/ui/button';

export default function StudentFacilitiesPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-foreground tracking-tight">Campus Facilities</h1>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
        {/* Library Section */}
        <div className="bg-card rounded-xl border border-border shadow-sm p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded bg-primary/10 text-primary flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
            </div>
            <h3 className="text-xl font-semibold">Library Search</h3>
          </div>
          
          <div className="flex gap-3 mb-6">
            <input type="text" placeholder="Search books by title or author..." className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring" />
            <Button>Search</Button>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-medium text-muted-foreground">Currently Issued</h4>
            <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50 border border-border/50">
              <div>
                <p className="font-semibold text-primary">Introduction to Algorithms</p>
                <p className="text-sm text-muted-foreground">Due in 3 days</p>
              </div>
              <Button variant="outline" size="sm">Renew</Button>
            </div>
          </div>
        </div>

        {/* Hostel Section */}
        <div className="bg-card rounded-xl border border-border shadow-sm p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded bg-accent/10 text-accent flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
            </div>
            <h3 className="text-xl font-semibold">Hostel Allocation</h3>
          </div>

          <div className="p-4 rounded-lg bg-muted/50 border border-border/50 space-y-3">
            <div className="flex justify-between items-center border-b border-border/50 pb-3">
              <span className="text-muted-foreground">Status</span>
              <span className="font-medium text-green-500">Allocated</span>
            </div>
            <div className="flex justify-between items-center border-b border-border/50 pb-3">
              <span className="text-muted-foreground">Building</span>
              <span className="font-medium">Block A (Boys Hostel)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Room Number</span>
              <span className="font-medium">A-304</span>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <Button variant="outline" className="text-accent hover:text-accent">Raise Maintenance Request</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
