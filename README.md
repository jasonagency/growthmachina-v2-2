# Growth Machina AI Website

AI-powered growth tools for carpet cleaning businesses.

## Project Structure

```
growthmachina-v2/
├── index.html          # Homepage
├── about.html          # About page
├── contact.html        # Contact page
├── pricing.html        # Pricing page
├── terms.html          # Terms of Service
├── privacy.html        # Privacy Policy
├── images/             # Image assets
│   ├── hero.jpg
│   ├── productcard1.jpg
│   ├── productcard2.jpg
│   ├── howitworks.jpg
│   ├── testimonials-bg.jpg
│   ├── mike.jpg
│   ├── sarah.jpg
│   └── david.jpg
├── package.json        # Project config
├── vercel.json         # Vercel deployment config
└── README.md           # This file
```

## Local Development

To preview the site locally:

```bash
# Using npx serve (recommended)
npx serve .

# Or using Python
python -m http.server 8000

# Or using PHP
php -S localhost:8000
```

Then open `http://localhost:3000` (or appropriate port) in your browser.

## Deploying to Vercel

### Option 1: Using Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. For production deployment:
   ```bash
   vercel --prod
   ```

### Option 2: Using Git + Vercel Dashboard

1. Push this project to a GitHub/GitLab/Bitbucket repository

2. Go to [vercel.com](https://vercel.com) and sign in

3. Click "New Project"

4. Import your repository

5. Vercel will auto-detect the static site and deploy

### Option 3: Drag & Drop

1. Go to [vercel.com](https://vercel.com)

2. Drag the project folder onto the Vercel dashboard

## Custom Domain

After deploying to Vercel:

1. Go to your project settings in Vercel

2. Click "Domains"

3. Add your custom domain (e.g., `growthmachina.ai`)

4. Follow the DNS configuration instructions

## Features

- **Responsive Design**: Mobile-first, works on all devices
- **Fast Loading**: Pure HTML/CSS, no heavy frameworks
- **SEO Optimized**: Semantic HTML, meta descriptions
- **Modern Aesthetic**: Inter font, coral/pink gradient accents
- **Clean URLs**: Vercel config removes .html extensions

## Tech Stack

- Pure HTML5 & CSS3
- Inter font (Google Fonts)
- No JavaScript dependencies (vanilla JS only)
- Hosted on Vercel

## Pages

| Page | Description |
|------|-------------|
| `/` | Homepage with hero, products, how it works, features, pricing, testimonials |
| `/about` | Company story, values, approach |
| `/contact` | Contact form, phone, email, scheduling link |
| `/pricing` | Detailed pricing for Website+Chatbot and Voice AI |
| `/terms` | Terms of Service |
| `/privacy` | Privacy Policy |

## Contact

- **Website**: [growthmachina.ai](https://growthmachina.ai)
- **Email**: hello@growthmachina.ai
- **Phone**: (916) 234-6659
- **Location**: Sacramento, CA

---

© 2025 Growth Machina AI, LLC
