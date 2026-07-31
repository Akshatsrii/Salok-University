import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden font-sans">
      {/* Subtle Grid Background overlay */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* Navbar (Mock) */}
      <header className="relative z-10 w-full border-b border-border/40 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">S</div>
            <div>
              <h1 className="font-bold text-xl leading-none text-primary">SALOK</h1>
              <p className="text-xs text-muted-foreground">University Management</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/80">
            <a href="#" className="text-foreground">Home</a>
            <a href="#" className="hover:text-foreground">About Us</a>
            <a href="#" className="hover:text-foreground">Features</a>
            <a href="#" className="hover:text-foreground">Modules</a>
            <a href="#" className="hover:text-foreground">Contact</a>
          </nav>

          <Button variant="default" className="rounded-md font-semibold px-6">
            Get a Demo
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 container mx-auto px-4 pt-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col gap-6 max-w-xl">
            <Badge variant="secondary" className="w-fit text-accent font-semibold px-3 py-1 bg-accent/10 hover:bg-accent/15">
              <span className="w-2 h-2 rounded-full bg-accent mr-2 inline-block"></span>
              Next-Gen Education Ecosystem
            </Badge>

            <h1 className="text-5xl md:text-6xl font-extrabold text-primary tracking-tight leading-tight">
              Building Campuses That <br/>
              <span className="text-accent">Connect India</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              SALOK is a premier digital ecosystem for managing admissions, academics, faculty, finance, placements, research, and student life. We deliver world-class infrastructure for modern universities.
            </p>

            <div className="bg-secondary/40 p-6 rounded-2xl border border-secondary my-4">
              <p className="italic text-lg font-medium text-primary">
                "Building Tomorrow's Education, Today"
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Connecting communities, driving progress, building the future.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Button size="lg" className="rounded-md font-semibold px-8 h-12 text-base">
                View Features
              </Button>
              <Button size="lg" variant="outline" className="rounded-md font-semibold px-8 h-12 text-base border-border">
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Right Image/Card Area */}
          <div className="relative w-full h-[500px] bg-muted rounded-3xl overflow-hidden border border-border/50 shadow-2xl flex items-center justify-center">
            {/* Placeholder for the large infrastructure image */}
            <div className="text-muted-foreground font-medium flex flex-col items-center gap-2">
              <span>[ Hero Image / Illustration Placeholder ]</span>
            </div>
            
            {/* Overlay stat card */}
            <div className="absolute bottom-6 left-6 bg-card p-4 rounded-xl shadow-lg border border-border/50 flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
              </div>
              <div>
                <p className="font-bold text-2xl text-primary">2,500+</p>
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Students Managed</p>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
