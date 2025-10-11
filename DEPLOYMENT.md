# Deployment Guide

## Quick Deploy

To deploy your portfolio to the server, simply run:

```bash
./deploy.sh
```

This will:
1. ✅ Build your Angular project (`npm run build`)
2. ✅ Upload all files to the server via rsync
3. ✅ Show deployment status

## What the Script Does

- **Builds** the project using Angular CLI
- **Syncs** files to `/var/www/portfolio` on the server
- **Deletes** old files that no longer exist (using `--delete` flag)
- **Preserves** file permissions and timestamps

## Manual Deployment (Alternative)

If you prefer to deploy manually:

```bash
# 1. Build the project
npm run build

# 2. Deploy using rsync (you'll be prompted for password)
rsync -avz --delete dist/portfolio/browser/ root@45.61.129.121:/var/www/portfolio/
```

## Server Details

- **Server IP:** 45.61.129.121
- **Server Path:** /var/www/portfolio
- **Web Server:** nginx
- **Domain:** https://amirabasi.top

## Troubleshooting

### Build Fails
- Check for TypeScript errors: `npm run build`
- Install dependencies: `npm install`

### Connection Fails
- Verify server is accessible: `ping 45.61.129.121`
- Check SSH access: `ssh root@45.61.129.121`

### Site Not Updating
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check if files uploaded: `ssh root@45.61.129.121 "ls -la /var/www/portfolio"`
- Restart nginx: `ssh root@45.61.129.121 "systemctl restart nginx"`

## SSL Certificate

Your site uses Cloudflare Origin CA certificate:
- **Certificate:** `/etc/ssl/cloudflare/amirabasi.top.pem`
- **Private Key:** `/etc/ssl/cloudflare/amirabasi.top.key`
- **Valid until:** October 7, 2040

## Cloudflare Settings

- **SSL/TLS Mode:** Full (strict)
- **Proxy Status:** Proxied (orange cloud)
- **Always Use HTTPS:** Enabled (auto-redirect)

