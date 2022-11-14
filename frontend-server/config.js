module.exports = {
  dev: {
      ApiUrl: "http://localhost:",
      port: 3060
  },
  production: {
      apiUrl: process.env.API_URL,
      port: process.env.port
  }
}