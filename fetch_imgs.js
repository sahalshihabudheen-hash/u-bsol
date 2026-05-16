const https = require('https');

https.get('https://u-bsol.com', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const imgs = data.match(/<img[^>]+src=["']([^"']+)["'][^>]*>/g);
    if (imgs) {
      console.log(imgs.join('\n'));
    } else {
      console.log('no images found');
    }
  });
}).on('error', (err) => {
  console.log('Error:', err.message);
});
