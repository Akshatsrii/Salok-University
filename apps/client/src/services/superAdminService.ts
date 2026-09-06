import api from './api';

export const superAdminService = {
  getUniversity: async () => (await api.get('/api/university')).data,
  updateUniversity: async (data: any) => (await api.put('/api/university', data)).data,
  getDepartments: async () => (await api.get('/api/academic-structure/departments')).data,
  createDepartment: async (data: any) => (await api.post('/api/academic-structure/departments', data)).data,
};
