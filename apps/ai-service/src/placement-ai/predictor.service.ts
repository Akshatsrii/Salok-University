/**
 * Service to predict expected placement packages for students.
 */

export const predictPlacementPackage = async (studentProfile: {
  cgpa: number;
  skills: string[];
  projectsCount: number;
  internships: number;
}) => {
  console.log(`[Placement AI] Analyzing profile for expected package...`);
  
  // Real implementation: Call an ML model deployed via an API endpoint.
  // For the stub, we calculate a score.
  
  let basePackage = 3.5; // Base 3.5 LPA
  
  // CGPA weight
  if (studentProfile.cgpa >= 9.0) basePackage += 4;
  else if (studentProfile.cgpa >= 8.0) basePackage += 2;
  else if (studentProfile.cgpa >= 7.0) basePackage += 1;
  
  // Skills weight
  const highValueSkills = ['React', 'Node.js', 'Machine Learning', 'AWS', 'Docker'];
  const matchedSkills = studentProfile.skills.filter(s => highValueSkills.includes(s)).length;
  basePackage += (matchedSkills * 0.5);
  
  // Experience weight
  basePackage += (studentProfile.internships * 1.5);
  basePackage += (studentProfile.projectsCount * 0.5);
  
  return {
    predictedPackage: `${basePackage.toFixed(1)} LPA`,
    confidence: '85%',
    improvementTips: [
      "Add more cloud-native skills like AWS or Docker.",
      "Try to secure one more internship to boost expected CTC."
    ]
  };
};
