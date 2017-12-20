process.env.NODE_ENV = process.env.NODE_ENV || 'development';
console.log('NODE_ENV: ', process.env.NODE_ENV);

if (process.env.NODE_ENV === 'development') {
    process.env.CW_API_URL = "http://localhost:3000";
} else {
    process.env.CW_API_URL = "https://cw-apa-api.herokuapp.com";
}