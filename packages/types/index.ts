export interface BaseUser {
  id: string;
  tenantId: string;
  name: string;
  email: string;
  role: 'superadmin' | 'universityadmin' | 'teacher' | 'student' | 'parent';
}
