import React from 'react';
import { Button } from '@/components/ui/button';

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-3xl w-full space-y-8 bg-card p-10 rounded-2xl shadow-xl border border-border">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-primary">
            University Admission Portal
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Complete your application and upload documents for AI verification.
          </p>
        </div>
        
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground">Full Name</label>
              <input id="name" name="name" type="text" required className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring" placeholder="John Doe" />
            </div>
            
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground">Email</label>
                <input id="email" name="email" type="email" required className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring" placeholder="john@example.com" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground">Phone Number</label>
                <input id="phone" name="phone" type="tel" required className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring" placeholder="+91 9876543210" />
              </div>
            </div>

            <div>
              <label htmlFor="aadhaar" className="block text-sm font-medium text-foreground">Aadhaar Number</label>
              <input id="aadhaar" name="aadhaar" type="text" required className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring" placeholder="1234 5678 9012" />
            </div>

            <div className="pt-4">
              <h3 className="text-lg font-medium text-foreground mb-4">Document Upload</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="border-2 border-dashed border-border rounded-lg p-4 text-center hover:bg-muted/50 transition-colors cursor-pointer">
                  <p className="text-sm font-medium text-primary">Upload Photo</p>
                  <p className="text-xs text-muted-foreground mt-1">JPG, PNG</p>
                </div>
                <div className="border-2 border-dashed border-border rounded-lg p-4 text-center hover:bg-muted/50 transition-colors cursor-pointer">
                  <p className="text-sm font-medium text-primary">Upload Aadhaar</p>
                  <p className="text-xs text-muted-foreground mt-1">PDF, JPG</p>
                </div>
                <div className="border-2 border-dashed border-border rounded-lg p-4 text-center hover:bg-muted/50 transition-colors cursor-pointer">
                  <p className="text-sm font-medium text-primary">Upload Marksheet</p>
                  <p className="text-xs text-muted-foreground mt-1">PDF, JPG</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-secondary/30 p-4 rounded-lg flex items-start gap-3">
            <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <p className="text-xs text-muted-foreground">
              By submitting this application, you agree to our terms. Your documents will be securely processed and verified using our AI OCR system.
            </p>
          </div>

          <div>
            <Button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium">
              Submit Application
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
