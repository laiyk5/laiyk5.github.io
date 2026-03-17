# Personal Research Website

A clean, academic-style personal website built with [Astro](https://astro.build/) for researchers and graduate students. Features a research profile, publications/projects showcase, and integration with Obsidian notes.

## ✨ Features

- 🎓 **Research Profile** - Showcase your research interests, bio, and affiliation
- 📄 **Publications & Projects** - Display your academic work with clean card layouts
- 📝 **Obsidian Notes Integration** - A dedicated subpage for your exported Obsidian notes
- 📱 **Responsive Design** - Works great on desktop, tablet, and mobile
- ⚡ **Fast & Lightweight** - Built with Astro for optimal performance
- 🚀 **GitHub Pages Ready** - Easy deployment to GitHub Pages

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 22.12.0 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clone or fork this repository**
   ```bash
   git clone https://github.com/laiyk5/laiyk5.github.io.git
   cd my-research-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Customize your information**
   
   Edit `src/pages/index.astro` and update the `personalInfo` object:
   ```javascript
   const personalInfo = {
     name: "Your Name",
     initials: "YN",
     title: "Master's Student",
     affiliation: "Your University / Research Lab",
     bio: "Your bio here...",
     email: "your.email@university.edu",
     github: "https://github.com/yourusername",
     scholar: "https://scholar.google.com/citations?user=YOUR_ID",
     twitter: "https://twitter.com/yourusername",
   };
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:4321](http://localhost:4321) in your browser.

## 📝 Adding Your Obsidian Notes

This website includes a subpage for your Obsidian notes exported using the **Webpage HTML Export** plugin.

### Step 1: Install the Plugin

1. Open Obsidian
2. Go to **Settings → Community Plugins**
3. Search for "Webpage HTML Export" and install it
4. Enable the plugin

### Step 2: Export Your Notes

1. In Obsidian, open the Command Palette (`Cmd/Ctrl + P`)
2. Run: **Webpage HTML Export: Export HTML**
3. Choose your export options:
   - **Export Scope**: Select files/folders you want to export
   - **Export to**: Choose a folder on your computer
   - **File Format**: HTML (recommended)

### Step 3: Add Notes to Your Website

1. Copy the exported files to your website:
   ```bash
   # The exported folder typically contains index.html and assets/
   cp -r /path/to/exported/notes/* public/notes/
   ```

2. Update `src/pages/notes.astro` to link to your notes. Replace the placeholder with your actual notes:
   ```astro
   <div class="notes-list">
     <div class="note-item">
       <a href="./notes/literature-review.html">
         <span class="note-icon">📚</span>
         <span>Literature Review</span>
       </a>
     </div>
     <!-- Add more notes here -->
   </div>
   ```

3. Rebuild your site:
   ```bash
   npm run build
   ```

## 🚀 Deploy to GitHub Pages

### Step 1: Update Configuration

Edit `astro.config.mjs` and update the `site` and `base` values:

```javascript
export default defineConfig({
  site: 'https://yourusername.github.io',  // Replace with your GitHub username
  base: '/my-research-site',               // Replace with your repository name
});
```

### Step 2: Set Up GitHub Repository

1. Create a new repository on GitHub
2. Initialize git and push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/laiyk5/laiyk5.github.io.git
   git push -u origin main
   ```

### Step 3: Configure GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings → Pages**
3. Under "Build and deployment", select:
   - **Source**: GitHub Actions

### Step 4: Create GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: 'pages'
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '22'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Step 5: Deploy

Push the workflow file:
```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Pages deployment"
git push
```

Your site will be automatically deployed! Visit it at:
```
https://laiyk5.github.io
```

## 📁 Project Structure

```
my-research-site/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment config
├── public/
│   ├── favicon.ico
│   ├── favicon.svg
│   └── notes/                  # Obsidian exported notes go here
│       └── index.html
├── src/
│   ├── pages/
│   │   ├── index.astro         # Homepage (edit your info here)
│   │   └── notes.astro         # Notes listing page
│   └── styles/
│       └── global.css          # Global styles
├── astro.config.mjs            # Astro config (update for GitHub Pages)
├── package.json
└── README.md
```

## 🎨 Customization

### Colors

Edit `src/styles/global.css` and modify the CSS variables:

```css
:root {
  --color-primary: #2563eb;      /* Change to your preferred color */
  --color-primary-dark: #1d4ed8;
  --color-text: #1f2937;
  --color-text-light: #6b7280;
  --color-bg: #ffffff;
  --color-bg-alt: #f9fafb;
  --color-border: #e5e7eb;
}
```

### Content

- **Research Interests**: Edit the `researchInterests` array in `src/pages/index.astro`
- **Publications**: Add items to the `recentPapers` array
- **Projects**: Add items to the `projects` array

### Avatar

Replace the default initials avatar with your photo:

1. Add your photo to `public/` (e.g., `public/avatar.jpg`)
2. In `src/pages/index.astro`, replace:
   ```astro
   <div class="profile-avatar">{personalInfo.initials}</div>
   ```
   with:
   ```astro
   <img src="/avatar.jpg" alt={personalInfo.name} class="profile-avatar" style="object-fit: cover;" />
   ```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Astro](https://astro.build/)
- Fonts by [Google Fonts](https://fonts.google.com/)
- Obsidian export via [Webpage HTML Export](https://github.com/KosmosisDire/obsidian-webpage-export)
