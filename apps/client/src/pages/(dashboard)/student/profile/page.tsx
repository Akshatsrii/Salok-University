import { HeroHeader } from '../../../../components/student/profile/HeroHeader';
import { SkillsRadarChart } from '../../../../components/student/profile/SkillsRadarChart';
import { AcademicTimeline } from '../../../../components/student/profile/AcademicTimeline';

export default function StudentProfilePage() {
  return (
    <div className="space-y-6">
      <HeroHeader />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <AcademicTimeline />
        <SkillsRadarChart />
      </div>
    </div>
  );
}
