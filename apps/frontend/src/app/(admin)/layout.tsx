import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-background font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-primary text-primary-foreground flex flex-col shadow-xl">
        <div className="h-20 flex items-center px-6 border-b border-primary-foreground/10">
          <div className="w-8 h-8 rounded bg-accent flex items-center justify-center text-accent-foreground font-bold mr-3">S</div>
          <span className="font-bold text-xl tracking-tight">SALOK Admin</span>
        </div>
        <nav className="flex-1 py-6 px-4 space-y-2">
          <Link href="/dashboard" className="block px-4 py-3 rounded-lg bg-accent/20 text-accent font-medium transition-colors">
            Overview
          </Link>
          <Link href="/dashboard/universities" className="block px-4 py-3 rounded-lg hover:bg-primary-foreground/10 transition-colors">
            Universities
          </Link>
          <Link href="/dashboard/infrastructure" className="block px-4 py-3 rounded-lg hover:bg-primary-foreground/10 transition-colors">
            Infrastructure
          </Link>
          <Link href="/dashboard/academics" className="block px-4 py-3 rounded-lg hover:bg-primary-foreground/10 transition-colors">
            Academics
          </Link>
        </nav>
        <div className="p-4 border-t border-primary-foreground/10">
          <div className="flex items-center gap-3 px-4 py-2">
            <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm">
              AD
            </div>
            <div>
              <p className="text-sm font-medium">Super Admin</p>
              <p className="text-xs text-primary-foreground/70">admin@salok.com</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <header className="h-20 bg-card border-b border-border flex items-center justify-between px-8">
          <h2 className="text-xl font-semibold text-foreground">Dashboard</h2>
          <Button variant="outline" className="border-border">Log out</Button>
        </header>
        <div className="flex-1 overflow-auto p-8 bg-muted/30">
          {children}
        </div>
      </main>
    </div>
  );
}
