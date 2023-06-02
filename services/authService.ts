import { JWT_KEY } from '@/constants/keys.const';
import { IAuth } from '@/models/auth';
import http from './http';

const authApi = http(process.env.NEXT_PUBLIC_AUTH_API_URL || 'http://localhost:3000')

const user = {
  email: process.env.NEXT_PUBLIC_DEMO_EMAIL,
  password: process.env.NEXT_PUBLIC_DEMO_PASSWORD,
  name: process.env.NEXT_PUBLIC_DEMO_NAME,
};

class AuthService {
  getSelf() {
    return new Promise((resolve, reject) => {
      const token = sessionStorage.getItem(JWT_KEY);
      if (token) {
        resolve(user);
      } else {
        reject({ error: 'AuthService(getSelf): user is not authenticated' });
      }
    });
  }

  checkAuth() {
    const token = sessionStorage.getItem(JWT_KEY);

    return !!token;
  }

  async login(authParams: Partial<IAuth>) {
    const response = await authApi.post('auth/login', authParams)
    sessionStorage.setItem(JWT_KEY, response.token);

    return response
  }

  async register(authParams: Partial<IAuth>) {
    const response = await authApi.post('auth/register', authParams)
    sessionStorage.setItem(JWT_KEY, response.token);

    return response
  }

  logout() {
    return new Promise((resolve) => {
      sessionStorage.removeItem(JWT_KEY);

      return resolve(true);
    });
  }
}

export default new AuthService();
