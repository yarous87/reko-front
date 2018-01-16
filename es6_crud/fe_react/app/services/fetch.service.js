import base64 from 'base-64';

class FetchService {
    constructor() {
        this.listeners = {};
        this.headers = new Headers();

        this.headers.append(
            'Authorization', `Basic ${base64.encode('test:test')}`
        );

        this.headers.append(
            'Content-Type', 'application/json'
        );
    }

    get(url) {
        return fetch(url, {
            method: 'GET',
            headers: this.headers
        })
            .then(response => response.json());
    }

    post(url, data) {
        return fetch(url, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(data)
        })
            .then(response => response.json());
    }
    
    put(url, data) {
        return fetch(url, {
            method: 'PUT',
            headers: this.headers,
            body: JSON.stringify(data)
        })
            .then(response => response.json());
    }

    delete(url) {
        return fetch(url, {
            method: 'DELETE',
            headers: this.headers
        })
            .then(response => response.json());
    }

    on(event, callback) {
        if (typeof callback !== 'function') {
            return;
        }

        if (!Array.isArray(this.listeners[event])) {
            this.listeners[event] = [];
        }

        this.listeners[event].push(callback);
    }

    fire(event, data) {
        if (Array.isArray(this.listeners[event])) {
            this.listeners[event].forEach(callback => callback(data));
        }
    }
}

export { FetchService };