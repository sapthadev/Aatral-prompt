const fetchApi = async (url, method = 'GET', data = null) => {
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: data ? JSON.stringify(data) : undefined,
    };
  
    try {
      const response = await fetch(url, options);
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      if (method === 'DELETE') {
        return null;
      }
  
      return response.json();
    } catch (error) {
      throw new Error(`Fetch error: ${error.message}`);
    }
  };
  
  export default fetchApi;  