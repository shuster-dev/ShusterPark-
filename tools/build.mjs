// Build the page: one bundle for the game and the page beside it, into dist/.
// `npm run build`
import fs from 'node:fs';
import crypto from 'node:crypto';
import * as esbuild from 'esbuild';

const out = 'dist';
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });
await esbuild.build({
  entryPoints: ['src/client/main.js'],
  bundle: true, format: 'esm', minify: !process.env.DEBUG, sourcemap: false, target: ['es2020', 'safari15'],
  outfile: `${out}/main.js`, logLevel: 'warning', legalComments: 'none',
});
// a new build is a new address for the script, so no phone keeps an old one
const hash = crypto.createHash('sha1').update(fs.readFileSync(`${out}/main.js`)).digest('hex').slice(0, 10);
fs.renameSync(`${out}/main.js`, `${out}/main.${hash}.js`);
fs.writeFileSync(`${out}/index.html`, fs.readFileSync('src/client/index.html', 'utf8').replace('./main.js', `./main.${hash}.js`));
for (const f of ['og.jpg', 'icon.png']) if (fs.existsSync(`src/client/${f}`)) fs.copyFileSync(`src/client/${f}`, `${out}/${f}`);
const kb = Math.round(fs.statSync(`${out}/main.${hash}.js`).size / 1024);
console.log(`dist: main.${hash}.js ${kb} KB`);
