import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import renderApp from './dist/server/entry-server.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3005;
const html = fs.readFileSync(path.resolve(__dirname, './dist/client/index.html')).toString();
const app = express();
app.use('/assets', express.static(path.resolve(__dirname, './dist/client/assets')));

app.use((req, res) => {
  const stream = renderApp(req.url, {
    onShellReady() {
      stream.pipe(res);
    },
    onShellError() {
      // do error handling
    },
    onAllReady() {
      // last thing to write
      res.write(html);
      res.end();
    },
    onError(err) {
      console.error(err);
    },
  });
});

console.log(`listening on http://localhost:${PORT}`);
app.listen(PORT);
