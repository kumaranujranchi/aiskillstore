# AI Skill Store

> Install a Design Brain into your AI Coding Tool

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/kumaranujranchi/aiskillstore)

## 🎨 What is this?

AI Skill Store is a marketplace for design systems that AI coding agents can understand and follow. Stop shipping generic AI-generated UIs - install a theme and let your AI build beautiful, consistent interfaces.

## ✨ Features

- **4 Premium Themes**: Minimal Core, Nictorys Industrial, Ucam Design, Windsor Editorial
- **Theme Extraction Tool**: Extract design tokens from any live website
- **CLI Installation**: Install themes directly into your codebase
- **Dynamic Marketplace**: Automatically loads themes from markdown files

## 🚀 Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Deploy to Netlify

Click the button above or follow the [Deployment Guide](./DEPLOY.md)

## 🛠️ CLI Tool

Extract themes from live websites:

```bash
cd cli
node index.js extract https://example.com -o my-theme.md
```

Install themes into your project:

```bash
npx skill-store-cli install nictorys-industrial
```

## 📚 Documentation

- [Deployment Guide](./DEPLOY.md) - How to deploy to Netlify
- [Developer Docs](./Docs.md) - Full project documentation
- [Walkthrough](./walkthrough.md) - Implementation details

## 🎯 Themes

1. **Minimal Core** (Free) - Clean SaaS starter
2. **Nictorys Industrial** ($39) - Bold industrial design
3. **Ucam Design** (Free) - Futuristic tech theme
4. **Windsor Editorial** ($19) - Elegant blog theme

## 🔧 Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **Fonts**: Google Fonts (Orbitron, Public Sans, Inter)
- **Deployment**: Netlify
- **CLI**: Node.js with Cheerio

## 📝 License

MIT

## 🤝 Contributing

Contributions welcome! Feel free to submit issues and pull requests.

---

Built with ❤️ for AI-powered development
