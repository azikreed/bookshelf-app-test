import { BASE_URL, TEST_URL } from "./helpers/API";

const axios = require('axios');

async function pretest() {
  try {
    const headers = {
      'Tg': 't.me/m_siddikov'
    };

    const path = TEST_URL;
    const host = BASE_URL;
    const url = path.replace(':host', host);
    
    const response = await axios.get(url, { headers });
    console.log(response.data);

    const cleanupResponse = await axios.get('http://devtest.lavina.tech/cleanup');
    console.log(cleanupResponse.data);
  } catch (error) {
    console.error('Error:', error);
  }
}

pretest();