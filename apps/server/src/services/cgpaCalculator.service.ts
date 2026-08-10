export class CGPACalculatorService {
  /**
   * Calculates SGPA based on marks and max marks for a set of subjects.
   * Standard 10-point scale assumed.
   */
  static calculateSGPA(marks: { scoredMarks: number; maxMarks: number; isPass: boolean }[]): number {
    if (!marks || marks.length === 0) return 0;
    
    let totalPoints = 0;
    let totalCredits = 0; // Assuming each subject is 3 credits for simplicity
    const creditsPerSubject = 3;

    marks.forEach(m => {
      totalCredits += creditsPerSubject;
      if (m.isPass) {
        const percentage = (m.scoredMarks / m.maxMarks) * 100;
        let gradePoint = 0;
        
        if (percentage >= 90) gradePoint = 10;
        else if (percentage >= 80) gradePoint = 9;
        else if (percentage >= 70) gradePoint = 8;
        else if (percentage >= 60) gradePoint = 7;
        else if (percentage >= 50) gradePoint = 6;
        else if (percentage >= 40) gradePoint = 5;
        
        totalPoints += gradePoint * creditsPerSubject;
      }
    });

    return totalCredits === 0 ? 0 : parseFloat((totalPoints / totalCredits).toFixed(2));
  }

  /**
   * Checks if there are any backlogs in the current result set.
   */
  static checkBacklogs(marks: { isPass: boolean }[]): boolean {
    return marks.some(m => !m.isPass);
  }
}
