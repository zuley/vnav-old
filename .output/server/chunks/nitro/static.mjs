import { createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';
import { c as buildAssetsDir } from './server.mjs';
import 'unenv/runtime/polyfill/fetch.node';
import 'http';
import 'https';
import 'destr';
import 'ohmyfetch';
import 'unenv/runtime/fetch/index';
import 'defu';

const assets = {
  "/README.md": {
    "type": "text/markdown; charset=utf-8",
    "etag": "\"14-xoGfDuxh7ZQwtu32nFyRsoGncQ8\"",
    "mtime": "2022-04-15T02:09:46.413Z",
    "path": "../public/README.md"
  },
  "/_nuxt/Anchor-826dfbcc.mjs": {
    "type": "application/javascript",
    "etag": "\"278-9Cc4NnhPWW5LLTBn0mYMFkbntuU\"",
    "mtime": "2022-04-15T02:09:46.474Z",
    "path": "../public/_nuxt/Anchor-826dfbcc.mjs"
  },
  "/_nuxt/Anchor.f139a937.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"145-Xcmhw+spwB3WaSb0mmp+zIy6KFs\"",
    "mtime": "2022-04-15T02:09:46.473Z",
    "path": "../public/_nuxt/Anchor.f139a937.css"
  },
  "/_nuxt/HotRecommended-37e4c9ae.mjs": {
    "type": "application/javascript",
    "etag": "\"3a3-CesXKiAPHg8mCOznlopSf/LsC30\"",
    "mtime": "2022-04-15T02:09:46.472Z",
    "path": "../public/_nuxt/HotRecommended-37e4c9ae.mjs"
  },
  "/_nuxt/HotRecommended.cbab0730.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"316-3EWuw3b07s8ym3346rSzSF0QH1A\"",
    "mtime": "2022-04-15T02:09:46.472Z",
    "path": "../public/_nuxt/HotRecommended.cbab0730.css"
  },
  "/_nuxt/NavLink-e5c48c48.mjs": {
    "type": "application/javascript",
    "etag": "\"25d-03Zo/RJHXfnpAP27cTrJ0j1gnTI\"",
    "mtime": "2022-04-15T02:09:46.470Z",
    "path": "../public/_nuxt/NavLink-e5c48c48.mjs"
  },
  "/_nuxt/NavLink.38a28a64.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1d8-A0UnJBd8gPXtjpXFMr24iDli9L4\"",
    "mtime": "2022-04-15T02:09:46.470Z",
    "path": "../public/_nuxt/NavLink.38a28a64.css"
  },
  "/_nuxt/PageFooter-9e605e95.mjs": {
    "type": "application/javascript",
    "etag": "\"182-+xj4bpHoBfOybnTxlVTBuwLrOy8\"",
    "mtime": "2022-04-15T02:09:46.469Z",
    "path": "../public/_nuxt/PageFooter-9e605e95.mjs"
  },
  "/_nuxt/PageFooter.8f69f1da.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5e-L20j1xYiw5NJCwWBBCt+/miWphY\"",
    "mtime": "2022-04-15T02:09:46.468Z",
    "path": "../public/_nuxt/PageFooter.8f69f1da.css"
  },
  "/_nuxt/PageFooterPart-86219f20.mjs": {
    "type": "application/javascript",
    "etag": "\"255-vUfau0g2Y5rk2vISfSZkWGOD28s\"",
    "mtime": "2022-04-15T02:09:46.466Z",
    "path": "../public/_nuxt/PageFooterPart-86219f20.mjs"
  },
  "/_nuxt/PageHeader-51f3b108.mjs": {
    "type": "application/javascript",
    "etag": "\"4b4-VMXNUpE/0EOkNRsTN2Z+c4qRuSM\"",
    "mtime": "2022-04-15T02:09:46.466Z",
    "path": "../public/_nuxt/PageHeader-51f3b108.mjs"
  },
  "/_nuxt/PageHeader.e2f0460f.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"346-otTyI3uGAdvVthUPI1seieplUBk\"",
    "mtime": "2022-04-15T02:09:46.465Z",
    "path": "../public/_nuxt/PageHeader.e2f0460f.css"
  },
  "/_nuxt/Search-e6a96574.mjs": {
    "type": "application/javascript",
    "etag": "\"61a-6g7VRU7KSzr9UJ6/p0R5tMg2L90\"",
    "mtime": "2022-04-15T02:09:46.463Z",
    "path": "../public/_nuxt/Search-e6a96574.mjs"
  },
  "/_nuxt/Search.8384d995.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"281-YyyjzwlUYnbHHKv+XVU+BFHqUMc\"",
    "mtime": "2022-04-15T02:09:46.462Z",
    "path": "../public/_nuxt/Search.8384d995.css"
  },
  "/_nuxt/_id_-1a484ab0.mjs": {
    "type": "application/javascript",
    "etag": "\"9a0-9jJTebxIdGLjuVgIavraoO/RhMY\"",
    "mtime": "2022-04-15T02:09:46.461Z",
    "path": "../public/_nuxt/_id_-1a484ab0.mjs"
  },
  "/_nuxt/_id_-decd71a0.mjs": {
    "type": "application/javascript",
    "etag": "\"4ca-TgVY1alU6bCgJ7YeWGV14x9Jj3E\"",
    "mtime": "2022-04-15T02:09:46.460Z",
    "path": "../public/_nuxt/_id_-decd71a0.mjs"
  },
  "/_nuxt/default-53d29fca.mjs": {
    "type": "application/javascript",
    "etag": "\"252-Jfm9ilvCmhlPVSRLLeRscPCF6Xk\"",
    "mtime": "2022-04-15T02:09:46.459Z",
    "path": "../public/_nuxt/default-53d29fca.mjs"
  },
  "/_nuxt/empty-23818193.mjs": {
    "type": "application/javascript",
    "etag": "\"b9-CxTLDVwbbh50OxwkdMVaqktdQBA\"",
    "mtime": "2022-04-15T02:09:46.459Z",
    "path": "../public/_nuxt/empty-23818193.mjs"
  },
  "/_nuxt/entry-ca1b192b.mjs": {
    "type": "application/javascript",
    "etag": "\"2e9c2-aZDMD8xxXE2r0UmCtmaMz7Iq+kY\"",
    "mtime": "2022-04-15T02:09:46.450Z",
    "path": "../public/_nuxt/entry-ca1b192b.mjs"
  },
  "/_nuxt/entry.6290caf3.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3d4f-HpzwPUT/2bB14Ux2JNkSAEyQeaM\"",
    "mtime": "2022-04-15T02:09:46.449Z",
    "path": "../public/_nuxt/entry.6290caf3.css"
  },
  "/_nuxt/index-21800461.mjs": {
    "type": "application/javascript",
    "etag": "\"37a-pfIAESuFk/mGVjC2fAREAIz1DL4\"",
    "mtime": "2022-04-15T02:09:46.448Z",
    "path": "../public/_nuxt/index-21800461.mjs"
  },
  "/_nuxt/index-272edbb7.mjs": {
    "type": "application/javascript",
    "etag": "\"3f1-gjodgV19VHggtw+u9Y4MgLppH/s\"",
    "mtime": "2022-04-15T02:09:46.446Z",
    "path": "../public/_nuxt/index-272edbb7.mjs"
  },
  "/_nuxt/index-30b1f9e1.mjs": {
    "type": "application/javascript",
    "etag": "\"789-AXIc1XkAPzcN+UlwUS7KuEA69d0\"",
    "mtime": "2022-04-15T02:09:46.446Z",
    "path": "../public/_nuxt/index-30b1f9e1.mjs"
  },
  "/_nuxt/index-3a4be114.mjs": {
    "type": "application/javascript",
    "etag": "\"808-l4t2Nyce/MCbAUHi22NsCmHafBs\"",
    "mtime": "2022-04-15T02:09:46.445Z",
    "path": "../public/_nuxt/index-3a4be114.mjs"
  },
  "/_nuxt/index.657eb339.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"20c-gl0VLbigcPqY/Uf9eZ8ayZZ0AT0\"",
    "mtime": "2022-04-15T02:09:46.443Z",
    "path": "../public/_nuxt/index.657eb339.css"
  },
  "/_nuxt/manifest.json": {
    "type": "application/json",
    "etag": "\"12e2-h177VzBryYalIYyaoGHY8Z5IrpA\"",
    "mtime": "2022-04-15T02:09:46.442Z",
    "path": "../public/_nuxt/manifest.json"
  },
  "/_nuxt/test-08aec6a3.mjs": {
    "type": "application/javascript",
    "etag": "\"e3-ar187p9NziDvSI3Tm0XiOpEjhWs\"",
    "mtime": "2022-04-15T02:09:46.442Z",
    "path": "../public/_nuxt/test-08aec6a3.mjs"
  },
  "/_nuxt/test-257b067f.mjs": {
    "type": "application/javascript",
    "etag": "\"97-uKxzEGa3U35K+IfkjRpsxFqx2cQ\"",
    "mtime": "2022-04-15T02:09:46.441Z",
    "path": "../public/_nuxt/test-257b067f.mjs"
  }
};

const mainDir = dirname(fileURLToPath(globalThis.entryURL));

function readAsset (id) {
  return promises.readFile(resolve(mainDir, getAsset(id).path))
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const TWO_DAYS = 2 * 60 * 60 * 24;
const STATIC_ASSETS_BASE = "/_nuxt/Users/zuley/zk-work/vnav/dist" + "/" + "1649988576";
async function serveStatic(req, res) {
  if (!METHODS.includes(req.method)) {
    return;
  }
  let id = decodeURIComponent(withLeadingSlash(withoutTrailingSlash(parseURL(req.url).pathname)));
  let asset;
  for (const _id of [id, id + "/index.html"]) {
    const _asset = getAsset(_id);
    if (_asset) {
      asset = _asset;
      id = _id;
      break;
    }
  }
  const isBuildAsset = id.startsWith(buildAssetsDir());
  if (!asset) {
    if (isBuildAsset && !id.startsWith(STATIC_ASSETS_BASE)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    res.statusCode = 304;
    return res.end("Not Modified (etag)");
  }
  const ifModifiedSinceH = req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      res.statusCode = 304;
      return res.end("Not Modified (mtime)");
    }
  }
  if (asset.type) {
    res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag) {
    res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime) {
    res.setHeader("Last-Modified", asset.mtime);
  }
  if (isBuildAsset) {
    res.setHeader("Cache-Control", `max-age=${TWO_DAYS}, immutable`);
  }
  const contents = await readAsset(id);
  return res.end(contents);
}

export { serveStatic as default };
