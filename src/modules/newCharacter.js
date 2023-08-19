const newCharacter = async () => {
  const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
  const appEndpoint = '/apps/';

  // Make a POST request to create a new app
  const createAppUrl = baseUrl + appEndpoint;
  const createAppResponse = await fetch(createAppUrl, { method: 'POST' });
  const appId = await createAppResponse.text();

  // Log the app ID
  console.log('App ID:', appId);
};

export default newCharacter;
