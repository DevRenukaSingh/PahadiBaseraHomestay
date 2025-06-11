export default async function fetcher(url, options = {}) {
  const defaultHeaders = {
    'Content-Type': 'application/json',
  };

  const res = await fetch(url, {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.error || 'Something went wrong');
  }

  return res.json();
}
