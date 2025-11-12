# Deploying to Netlify with Password Protection

1) Drag & drop this folder (or the zip) into Netlify, or connect the repo.
2) The file named `_headers` sets Basic Auth for:
   - /kanban.html
   - /gpd.html

   Current credentials:
   - Username: ty
   - Password: case

3) To change the credentials, edit `_headers` and replace `ty:case` with `YOUR_USER:YOUR_PASS`.
4) Re‑deploy.

Note: Basic Auth protects page responses. Thumbnails/assets are public unless you also gate their paths in `_headers` (e.g., `/assets/case/*`).