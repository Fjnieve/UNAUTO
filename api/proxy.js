module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');

  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }

  const targetUrl = req.query.url;
  if (!targetUrl) {
    res.status(400).send('Falta el parametro url');
    return;
  }

  let parsed;
  try {
    parsed = new URL(targetUrl);
  } catch (err) {
    res.status(400).send('URL invalida');
    return;
  }

  if (parsed.hostname !== 'unauto.es') {
    res.status(403).send('Dominio no permitido');
    return;
  }

  try {
    const response = await fetch(targetUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });
    const body = await response.text();
    res.status(response.status).setHeader('Content-Type', 'text/html; charset=utf-8').send(body);
  } catch (err) {
    res.status(502).send('Error al contactar con unauto.es: ' + err.message);
  }
};
