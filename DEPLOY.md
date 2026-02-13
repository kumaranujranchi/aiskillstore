# AI Skill Store - Netlify Deployment Guide

## 🚀 Quick Deploy to Netlify

### Method 1: Netlify Dashboard (Recommended)

1. **Go to Netlify**: https://app.netlify.com
2. **Sign up/Login** with your GitHub account
3. Click **"Add new site"** → **"Import an existing project"**
4. Select **GitHub** as your provider
5. Choose the **`aiskillstore`** repository
6. **Build settings** (auto-detected from `netlify.toml`):
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Framework: Next.js
7. Click **"Deploy site"**

Your site will be live in 2-3 minutes! 🎉

### Method 2: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize project
netlify init

# Deploy
netlify deploy --prod
```

## 📋 Configuration Files

This project includes:
- **`netlify.toml`** - Netlify build configuration
- **`package.json`** - Build scripts
- **`.gitignore`** - Excludes node_modules

## 🔧 Environment Variables (Optional)

If you need to add environment variables:
1. Go to **Site settings** → **Environment variables**
2. Add your variables (e.g., API keys)

## 📦 What Gets Deployed

- ✅ Next.js website with all pages
- ✅ API routes (`/api/skill/[slug]`)
- ✅ All 4 themes (Minimal Core, Nictorys Industrial, Ucam Design, Windsor Editorial)
- ✅ Static assets (images, fonts)

## 🌐 After Deployment

1. **Custom Domain**: You can add your own domain in Netlify settings
2. **HTTPS**: Automatically enabled
3. **Auto-Deploy**: Every push to `main` branch will auto-deploy

## 🛠️ Troubleshooting

If deployment fails:
1. Check build logs in Netlify dashboard
2. Ensure Node version is 18+ (set in `netlify.toml`)
3. Verify all dependencies are in `package.json`

## 📝 Note

The CLI tool (`cli/`) is for local use only. Users will install themes via:
```bash
npx skill-store-cli install theme-name
```

---

**Ready to deploy!** Just follow Method 1 above and you'll be live in minutes! 🚀
