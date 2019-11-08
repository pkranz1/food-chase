
const auth = {
  isAuthenticated: false,
  authenticate(email, password) {
    return fetch('/api/auth/login', { 
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((response) => {
        if(!response.ok) {
          throw new Error('Login Failed');
        }

        return response.json();
      })
      .then((body) => {
        this.isAuthenticated = true;
        return body;
      });
  },
  signup(email, password, restaurantOwner) {
    return fetch('/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify({ email, password, restaurantOwner }),
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((response) => {
        if(!response.ok) {
          throw new Error('Sign up failed');
        }

        return response.json();
      })
      .then((body) => {
        this.isAuthenticated = true;
        return body;
      });
  },
  signout(cb) {
    return fetch('/api/auth/logout', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((response) => {
        if(!response.ok) {
          throw new Error('Logout Failed');
        }

        return response.json();
      })
      .then((body) => {
        this.isAuthenticated = false;
        return body;
      });
  }
}

export default auth;