export interface Company {
  id: string;
  name: string;
  industry: string;
  tier: 'TIER_1' | 'TIER_2' | 'TIER_3';
  website: string;
}

export interface PlacementDrive {
  id: string;
  companyName: string;
  role: string;
  package: string;
  deadline: string;
  status: 'UPCOMING' | 'ONGOING' | 'COMPLETED';
  eligibility: {
    cgpa: number;
    branches: string[];
  };
}

export interface ApplicationStatus {
  id: string;
  companyName: string;
  role: string;
  appliedDate: string;
  status: 'APPLIED' | 'SHORTLISTED' | 'APTITUDE_CLEARED' | 'TECH_CLEARED' | 'HR_CLEARED' | 'SELECTED' | 'REJECTED';
}
