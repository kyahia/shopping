# shopping

Step 1
▶️ git commit -m "Initial commit"
▶️ git push -u origin main

Step 2
package.json
"homepage": "https://[USERNAME].github.io/[REPO NAME]",

Step 3
▶️ npm install gh-pages --save-dev

Step 4
"predeploy": "npm run build",
"deploy": "gh-pages -d build",

▶️ npm run deploy