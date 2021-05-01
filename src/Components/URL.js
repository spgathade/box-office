const ApiURL = 'https://api.tvmaze.com';
export async function ApiGET(queryString) {
  const response = await fetch(`${ApiURL}${queryString}`).then(r => r.json());
  return response;
}
