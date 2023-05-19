const env = process.env.ENV || 'development';

const App = {
    development: {
        SITE_URL: 'http://localhost:3000/',
        MOBILE_SITE_URL: 'http://localhost:8012/',
        API_HOST: 'https://meovathay.vn/v2/api/'
    },
    sandbox: {
        SITE_URL: 'http://sandbox.meovathay.vn/',
        MOBILE_SITE_URL: 'http://sandbox-m.meovathay.vn/',
        API_HOST: 'http://sandbox.meovathay.vn/v2/api/'
    },
    production: {
        SITE_URL: 'https://meovathay.vn/',
        MOBILE_SITE_URL: 'https://m.meovathay/',
        API_HOST: 'https://meovathay.vn/v2/api/'
    }
}[env];

export default App;
