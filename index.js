const axios = require('axios');

async function getCurrentExternalIP() {
  try {
    const response = await axios.get('https://httpbin.org/ip');
    const ip = response.data.origin;
    console.log(`Current External IP Address: ${ip}`);
  } catch (error) {
    console.error('Error fetching IP address:', error.message);
  }
}

getCurrentExternalIP();
