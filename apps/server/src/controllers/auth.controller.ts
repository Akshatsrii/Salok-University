import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';
import { loginSchema, mfaVerifySchema } from '../validators/auth.validator';
import { verifyRefreshToken, generateAccessToken } from '../utils/token.util';

export const login = async (req: Request, res: Response) => {
  try {
    const data = loginSchema.parse(req.body);
    const result = await AuthService.login(data.email, data.password);

    if (result.mfaRequired) {
      return res.status(200).json({ mfaRequired: true, email: result.email });
    }

    res.cookie('refreshToken', result.refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.cookie('accessToken', result.accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 15 * 60 * 1000, // 15 mins
    });
    
    res.cookie('role', result.user?.role, {
      secure: process.env.NODE_ENV === 'production',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      accessToken: result.accessToken,
      user: result.user,
    });
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};

export const mfaVerify = async (req: Request, res: Response) => {
  try {
    const data = mfaVerifySchema.parse(req.body);
    const result = await AuthService.verifyMFA(data.email, data.token);

    res.cookie('refreshToken', result.refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    
    res.cookie('accessToken', result.accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 15 * 60 * 1000,
    });

    res.cookie('role', result.user?.role, {
      secure: process.env.NODE_ENV === 'production',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      accessToken: result.accessToken,
      user: result.user,
    });
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};

export const refresh = async (req: Request, res: Response) => {
  const token = req.cookies?.refreshToken;
  if (!token) return res.status(401).json({ message: 'No refresh token provided' });

  const decoded = verifyRefreshToken(token);
  if (!decoded) return res.status(403).json({ message: 'Invalid refresh token' });

  const payload = {
    userId: decoded.userId,
    tenantId: decoded.tenantId,
    role: decoded.role,
  };

  const accessToken = generateAccessToken(payload);
  
  res.cookie('accessToken', accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 15 * 60 * 1000,
  });
  
  return res.status(200).json({ accessToken });
};

export const logout = async (req: Request, res: Response) => {
  res.clearCookie('refreshToken');
  res.clearCookie('accessToken');
  res.clearCookie('role');
  return res.status(200).json({ message: 'Logged out successfully' });
};

