import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function StudentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-background font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-card border-r border-border flex flex-col shadow-sm">
        <div className="h-20 flex items-center px-6 border-b border-border">
          <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-primary-foreground font-bold mr-3">S</div>
          <span className="font-bold text-xl text-primary tracking-tight">SALOK Student</span>
        </div>
        <nav className="flex-1 py-6 px-4 space-y-2">
          <Link href="/student" className="block px-4 py-3 rounded-lg bg-primary/10 text-primary font-medium transition-colors">
            Dashboard
          </Link>
          <Link href="/student/timetable" className="block px-4 py-3 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
            Timetable
          </Link>
          <Link href="/student/assignments" className="block px-4 py-3 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
            Assignments
          </Link>
          <Link href="/student/fees" className="block px-4 py-3 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
            Fees & Dues
          </Link>
        </nav>
        <div className="p-4 border-t border-border">
          <div className="flex items-center gap-3 px-4 py-2">
            <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm">
              JS
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">John Student</p>
              <p className="text-xs text-muted-foreground">B.Tech CSE - Sem 3</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <header className="h-20 bg-card border-b border-border flex items-center justify-between px-8 shadow-sm z-10">
          <h2 className="text-xl font-semibold text-foreground">Student Portal</h2>
          <Button variant="outline" className="border-border">Log out</Button>
        </header>
        <div className="flex-1 overflow-auto p-8 bg-muted/20">
          {children}
        </div>
      </main>
    </div>
  );
}
