import { IAuth } from '@/models/auth';

const JWT_TOKEN = 'jwt-token';

const user = {
  email: process.env.NEXT_PUBLIC_DEMO_EMAIL,
  password: process.env.NEXT_PUBLIC_DEMO_PASSWORD,
  name: process.env.NEXT_PUBLIC_DEMO_NAME,
};

class AuthService {
  getSelf() {
    return new Promise((resolve, reject) => {
      const token = sessionStorage.getItem(JWT_TOKEN);
      if (token) {
        resolve(user);
      } else {
        reject({ error: 'AuthService(getSelf): user is not authenticated' });
      }
    });
  }

  checkAuth() {
    const token = sessionStorage.getItem(JWT_TOKEN);

    return !!token;
  }

  login({ email, password }: IAuth) {
    return new Promise((resolve, reject) => {
      if (email === user.email && password === user.password) {
        sessionStorage.setItem(JWT_TOKEN, 'demo-token');

        resolve(user);
      } else {
        reject({ error: 'AuthService(login): wrong email or password' });
      }
    });
  }

  logout() {
    return new Promise((resolve) => {
      sessionStorage.removeItem(JWT_TOKEN);

      return resolve(true);
    });
  }
}

export default new AuthService();
