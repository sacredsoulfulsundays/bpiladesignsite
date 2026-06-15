B. Pila Design - SFTP Upload Package

Upload the CONTENTS of the ZIP archive directly into the document root for
the domain. Common document-root names include public_html, www, or htdocs.

The ZIP already contains:
- Production HTML, CSS, and JavaScript
- All locally hosted media
- Apache .htaccess rules for React routes
- A 404.html fallback

The email form endpoint is intentionally not configured in this build.

After upload, verify:
1. The homepage loads over HTTPS.
2. A direct visit to /why-b-pila and /coaching loads correctly.
3. Images load from /media/.
4. The server preserves the included .htaccess file.
5. Directories use 755 permissions and files use 644 permissions.

If the host does not use Apache or does not allow .htaccess, configure its
equivalent SPA fallback so unknown routes serve /index.html.
