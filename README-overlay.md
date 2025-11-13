# Shared client-side password (non-secure)

- `assets/case-protect.js` protects any URL whose path includes a slug in `protectedSlugs`.
- Default slugs: ["kanban", "gpd"]
- Default password: "ty"
- This is obfuscation only; not for sensitive content.

## Change password
Open `assets/case-protect.js` and set `password: "your-new-pass"`.

## Add more protected pages
Add their path segment or filename (without extension) to `protectedSlugs`,
for example: ["kanban", "gpd", "client-alpha"].

## How it works
On DOMContentLoaded, if the page path matches a protected slug and
localStorage doesn't have the unlock flag, an overlay asks for a password.
