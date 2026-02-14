#!/bin/bash
set -e

# Ensure we are in the script's directory (project root)
cd "$(dirname "$0")" || exit

echo "📍 Running from: $(pwd)"

echo "🧹 Cleaning project..."
rm -rf node_modules package-lock.json .next yarn.lock

echo "📦 Installing dependencies..."
# Check if yarn is installed
if ! command -v yarn &> /dev/null; then
    echo "⚠️ Yarn not found. Installing dependencies with npm..."
    npm install
    echo "🚀 Starting development server with npm..."
    npm run dev
else
    echo "✨ Using yarn for installation..."
    yarn install
    echo "🚀 Starting development server with yarn..."
    yarn dev
fi
