
const api = 'http://localhost:10010';

function validation(data) {
  return data;
}

function json(data) {
  return data.json();
}

class Http {
  constructor() {
    this.base = api;
  }

  request(url, config) {
    return fetch(
      url,
      config,
    )
      .then(validation)
      .then(json);
  }

  get(endpoint) {
    const url = `${this.base}${endpoint}`;
    const config = {
      method: 'GET',
    };

    return this.request(url, config);
  }
}

export default new Http();
