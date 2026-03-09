# Deploy Bitcoin Vitals on Cloudways

Your repo is already connected via SSH. Follow these steps to deploy the Vite React app and use your domain.

---

## 1. SSH into your server

```bash
ssh master@YOUR_SERVER_IP
```

Use the SSH credentials from **Cloudways → Server → Master Credentials**.

---

## 2. Go to the application folder

Cloudways uses a path like:

```bash
cd applications/YOUR_APP_FOLDER/public_html
```

Or from home:

```bash
cd ~/applications/YOUR_APP_FOLDER/public_html
```

Replace `YOUR_APP_FOLDER` with your application folder name (e.g. the one linked to your Git repo).

---

## 3. Pull latest code and install dependencies

```bash
git pull origin main
npm ci
```

If your default branch is `master`:

```bash
git pull origin master
npm ci
```

---

## 4. Build the app

```bash
npm run build
```

This creates a `dist` folder with the production build. The `public/.htaccess` file is copied into `dist` so React Router routes work on Apache.

**Or use the deploy script** (one-time: `chmod +x deploy.sh`):

```bash
./deploy.sh main
```

Replace `main` with your default branch if different.

---

## 5. Point the document root to `dist`

In **Cloudways**:

1. Open your **Application**.
2. Go to **Application Settings** (or **Domain Management**).
3. Set **Application Root** (or **Webroot**) to:

   ```text
   public_html/dist
   ```

   So the site is served from `public_html/dist` (where `index.html` and assets live).

If your app root is already `public_html` and the repo is cloned there, you can instead:

- Set application root to `public_html/dist` after the first build, **or**
- Use a symlink (see Optional section below).

---

## 6. Attach your domain

1. In Cloudways: **Application → Domain Management**.
2. Add your domain (e.g. `yourdomain.com` and `www.yourdomain.com`).
3. Set the **A** (and optionally **CNAME** for www) record at your DNS provider to the server IP or the value Cloudways shows.

---

## 7. (Optional) One-command deploy

From your **local** machine you can deploy by SSH + pull + build:

```bash
ssh master@YOUR_SERVER_IP "cd applications/YOUR_APP_FOLDER/public_html && git pull origin main && npm ci && npm run build"
```

Replace `YOUR_SERVER_IP`, `YOUR_APP_FOLDER`, and `main` with your values. You can put this in a script or use a small CI job.

---

## 8. (Optional) Symlink so root stays `public_html`

If you prefer to keep **Application Root** as `public_html` and still serve the built app:

1. After the first `npm run build`, from `public_html`:

   ```bash
   # Remove or rename existing index if any
   mv index.html index.html.bak 2>/dev/null || true
   # Serve the built app from dist
   ln -sf dist/index.html index.html
   ln -sf dist/assets assets
   ```

2. Or point the vhost to `public_html/dist` (via Application Root = `public_html/dist`) so you don’t need symlinks.

---

## Checklist

- [ ] Repo connected via SSH on Cloudways
- [ ] `git pull`, `npm ci`, `npm run build` run in app folder
- [ ] Application root set to `public_html/dist` (or symlink set up)
- [ ] Domain added and DNS pointed to server
- [ ] HTTPS enabled in Cloudways (SSL certificate)

---

## Troubleshooting

**Blank page or 404 on refresh**  
Application root must be `public_html/dist` and `public/.htaccess` must be present (it’s copied to `dist` on build). This enables SPA routing.

**Build fails on server**  
Check Node version: `node -v` (use 18+). If needed, use the Node version selector in Cloudways or install Node/NVM and run `npm run build` again.

**Wrong branch**  
Use the correct branch in `git pull` (e.g. `main` or `master`).

**Assets 404**  
Ensure the app is served from `dist` (so paths like `/assets/...` match the built files).
