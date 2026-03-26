const browserHost = typeof window !== 'undefined' ? window.location.hostname : '';
const browserOrigin = typeof window !== 'undefined' ? window.location.origin : '';
const isLocalBrowser = browserHost === 'localhost' || browserHost === '127.0.0.1';
const envApiBase = process.env.REACT_APP_API_BASE_BACKEND?.trim();

const config = {
    // In Docker/nginx use same-origin requests; keep localhost fallback for local `npm start`.
    API_BASE_BACKEND: envApiBase || (isLocalBrowser ? 'http://localhost:5155' : browserOrigin),
    API_TIMEOUT_MS: 5000
};

export default config;
