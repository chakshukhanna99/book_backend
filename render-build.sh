#!/usr/bin/env bash

echo "🔧 Installing dependencies..."
npm install

echo "🛠️ Forcing install of @types/node..."
npm install --save-dev @types/node@20.17.30

echo "📦 Building project..."
npm run build