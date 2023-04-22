class Auth {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  _checkResponse(res) {
    return res.ok
      ? res.json()
      : Promise.reject(
          new Error(`Error ${res.status}: ${res.statusText}`)
        );
  }

  register({ email, password }) {
    const url = `${this._baseUrl}/signup`;
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((res) => this._checkResponse(res));
  }

  authorize({ email, password }) {
    const url = `${this._baseUrl}/signin`;
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((res) => this._checkResponse(res));
  }

  checkToken(token) {
    const url = `${this._baseUrl}/users/me`;
    return fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => this._checkResponse(res));
  }
}

const auth = new Auth("https://auth.nomoreparties.co");

export default auth;
