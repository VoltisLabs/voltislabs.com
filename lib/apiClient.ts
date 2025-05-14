import axios from 'axios';

const GRAPHQL_ENDPOINT =
  process.env.NODE_ENV === 'production'
    ? 'https://eu-west-2.cdn.hygraph.com/content/cmamc2a6t01g107wczpa881tu/master' // Proxy endpoint for production
    : 'https://eu-west-2.cdn.hygraph.com/content/cmamc2a6t01g107wczpa881tu/master'; // Actual endpoint for development
  


export interface FetchParams {
  query: string; // The GraphQL query string
  variables?: Record<string, any>; // Optional variables for the query
  headers?: Record<string, string>; // Optional headers (e.g., Authorization)
}

export async function fetchData(params: FetchParams): Promise<any> {
  const { query, variables, headers } = params;

  if (!query) {
    throw new Error('Query is a required parameter.');
  }

  try {
    const response = await axios.post(
      GRAPHQL_ENDPOINT,
      {
        query,
        variables,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
      },
    );

    return response.data;
  } catch (error: any) {
    console.error('Error fetching data:', error);
    throw new Error(error?.response?.data?.error || 'An unexpected error occurred');
  }
}
