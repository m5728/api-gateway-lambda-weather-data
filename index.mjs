import request from 'request-promise'

export const handler = async (event) => {
  const apiKey = process.env.apiKey;
  const cityId = process.env.cityId;
  const url = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}`;
  try {
    const response = await request.get(url, { json: true });
    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (error) {
    return {
      statusCode: error.statusCode || 500,
      body: JSON.stringify({ error: "Error fetching weather data" }),
    };
  }
};