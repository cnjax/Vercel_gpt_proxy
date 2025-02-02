// api/[...path].js
export default async function handler(req, res) {
  const targetUrl = process.env.API_URL;

  try {
    // Get the full URL path from the request
    const path = req.url;

    // Forward the complete request
    const response = await fetch(`${targetUrl}${path}`, {
      method: req.method,
      headers: {
        ...req.headers,
        host: new URL(targetUrl).host,
      },
      body: req.method !== 'GET' && req.method !== 'HEAD' ? req.body : undefined,
    });

    // Copy status and headers
    res.statusCode = response.status;
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    // Stream the response body
    const body = await response.text();
    res.send(body);
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ error: 'Proxy error occurred' });
  }
}