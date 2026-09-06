import React from 'react';
import { StreakWidget } from '@/components/coding/StreakWidget';
import { ContestCard } from '@/components/coding/ContestCard';
import { LeaderboardTable } from '@/components/coding/LeaderboardTable';
import { Code2, Trophy, Target, BookOpen, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CodingDashboard() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <Code2 className="w-8 h-8 text-[#8a1538]" />
            Salok Coding Platform
          </h1>
          <p className="text-gray-500 mt-1 text-sm">
            Master algorithms, compete with peers, and prepare for placements.
          </p>
        </div>
        
        <div className="flex gap-4">
          <div className="bg-amber-50 border border-amber-200 p-3 rounded-xl flex items-center gap-3">
            <Trophy className="w-8 h-8 text-amber-500" />
            <div>
              <p className="text-xs font-bold text-amber-700 uppercase tracking-wider">Your Rating</p>
              <p className="text-xl font-bold text-amber-600">1452</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Daily Challenge */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-6 text-white shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
              <Code2 className="w-48 h-48" />
            </div>
            
            <div className="relative z-10">
              <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wider mb-4 inline-block">Daily Challenge</span>
              <h2 className="text-2xl font-bold mb-2">Two Sum - O(n) Solution</h2>
              <p className="text-gray-300 mb-6 max-w-lg">Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.</p>
              
              <div className="flex gap-3">
                <Link to="/student/coding/problems/1" className="bg-white text-gray-900 px-6 py-2.5 rounded-lg font-bold hover:bg-gray-100 transition-colors flex items-center gap-2">
                  Solve Now <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link to="/student/coding/problems" className="bg-white p-5 rounded-xl border hover:border-[#8a1538] transition-colors flex items-center gap-4 group">
              <div className="bg-blue-50 p-3 rounded-lg text-blue-600 group-hover:bg-blue-100 transition-colors">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Problem Set</h3>
                <p className="text-sm text-gray-500">Practice 500+ questions</p>
              </div>
            </Link>
            
            <Link to="/student/coding/sheets" className="bg-white p-5 rounded-xl border hover:border-[#8a1538] transition-colors flex items-center gap-4 group">
              <div className="bg-purple-50 p-3 rounded-lg text-purple-600 group-hover:bg-purple-100 transition-colors">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">DSA Sheets</h3>
                <p className="text-sm text-gray-500">Curated interview lists</p>
              </div>
            </Link>
          </div>

          {/* Leaderboard Preview */}
          <LeaderboardTable />
        </div>

        <div className="lg:col-span-1 space-y-6">
          <StreakWidget />
          <ContestCard />
        </div>
      </div>
    </div>
  );
}
