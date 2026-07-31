export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-foreground tracking-tight">Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
          <p className="text-sm font-medium text-muted-foreground mb-1">Total Universities</p>
          <p className="text-3xl font-bold text-primary">12</p>
        </div>
        
        <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
          <p className="text-sm font-medium text-muted-foreground mb-1">Total Campuses</p>
          <p className="text-3xl font-bold text-primary">45</p>
        </div>
        
        <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
          <p className="text-sm font-medium text-muted-foreground mb-1">Active Students</p>
          <p className="text-3xl font-bold text-primary">2,500+</p>
        </div>
        
        <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
          <p className="text-sm font-medium text-muted-foreground mb-1">System Status</p>
          <div className="flex items-center gap-2 mt-1">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <p className="text-xl font-bold text-primary">Healthy</p>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-card rounded-xl border border-border shadow-sm p-8">
        <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
        <p className="text-muted-foreground">Activity logs will appear here...</p>
      </div>
    </div>
  );
}
