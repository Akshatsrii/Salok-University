import { Request, Response, NextFunction } from 'express';

// Middleware to ensure DB queries are scoped to the user's tenant
// Typically used to inject the tenantId into the request query/body so controllers use it
export const scopeToTenant = (req: Request, res: Response, next: NextFunction) => {
  if (!req.user) {
    return res.status(401).json({ message: 'Authentication required' });
  }

  // Inject tenantId into query for GET requests, or body for POST/PUT
  if (req.method === 'GET') {
    req.query.tenantId = req.user.tenantId;
  } else {
    req.body.tenantId = req.user.tenantId;
  }

  next();
};
