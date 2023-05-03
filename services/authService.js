class AuthService {
  login({ email, password }) {
    return new Promise((resolve, reject) => {
      if (email === process.env.NEXT_PUBLIC_DEMO_EMAIL && password === process.env.NEXT_PUBLIC_DEMO_PASSWORD) {
        resolve({ email, password });
      } else {
        reject({ error: 'AuthService(login): wrong email or password' });
      }
    });
  }
}

export default new AuthService();
