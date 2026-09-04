import { User } from '../models/User';
import { comparePassword, hashPassword } from '../utils/password.util';
import { generateAccessToken, generateRefreshToken } from '../utils/token.util';
import speakeasy from 'speakeasy';

export class AuthService {
    static async register(data: any) {
    const existing = await User.findOne({ email: data.email });
    if (existing) throw new Error('Email already registered');
    
    const passwordHash = await hashPassword(data.password);
    const user = new User({
      name: { first: data.firstName, last: data.lastName },
      email: data.email,
      passwordHash,
      role: data.role || 'student',
      tenantId: '60d0fe4f5311236168a109ca', // mock tenant ID
      mfaEnabled: false,
      isActive: true,
    });
    await user.save();
    return {
      id: user._id,
      email: user.email,
      role: user.role
    };
  }

  static async login(email: string, password: string) {
    const user = await User.findOne({ email });
    if (!user || !user.isActive) {
      throw new Error('Invalid credentials or inactive account');
    }

    const isValid = await comparePassword(password, user.passwordHash);
    if (!isValid) {
      throw new Error('Invalid credentials');
    }

    if (user.mfaEnabled) {
      return { mfaRequired: true, email: user.email };
    }

    user.lastLogin = new Date();
    await user.save();

    const payload = {
      userId: user._id.toString(),
      tenantId: user.tenantId.toString(),
      role: user.role,
    };

    return {
      accessToken: generateAccessToken(payload),
      refreshToken: generateRefreshToken(payload),
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    };
  }

  static async verifyMFA(email: string, token: string) {
    const user = await User.findOne({ email });
    if (!user) throw new Error('User not found');

    // In a real scenario, the secret is stored in DB. For demo, assuming a fixed or mocked secret checking.
    // Here we'd verify the token against user's mfaSecret.
    // const verified = speakeasy.totp.verify({ secret: user.mfaSecret, encoding: 'base32', token });
    const verified = token === '123456'; // Mock for now

    if (!verified) throw new Error('Invalid MFA token');

    user.lastLogin = new Date();
    await user.save();

    const payload = {
      userId: user._id.toString(),
      tenantId: user.tenantId.toString(),
      role: user.role,
    };

    return {
      accessToken: generateAccessToken(payload),
      refreshToken: generateRefreshToken(payload),
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    };
  }
}

