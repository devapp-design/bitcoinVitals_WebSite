#!/bin/bash
# Run this on Cloudways server from public_html (your app root)
# Usage: ./deploy.sh [branch]
set -e
BRANCH="${1:-main}"
echo "Deploying from branch: $BRANCH"
git pull origin "$BRANCH"
npm ci
npm run build
echo "Deploy done. Ensure Application Root is set to public_html/dist in Cloudways."
