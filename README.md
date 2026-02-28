# Le Thien — Portfolio

Personal portfolio website built with a technical, minimal dark theme. Designed to showcase my journey from Fullstack development toward Backend engineering and DevOps infrastructure.

## Tech Stack

| Category   | Technology                               |
| ---------- | ---------------------------------------- |
| Framework  | Next.js 14 (App Router)                  |
| Language   | TypeScript                               |
| Styling    | TailwindCSS v4                           |
| Animation  | Framer Motion                            |
| Lint       | ESLint + Prettier                        |
| CI/CD      | GitHub Actions                           |
| Deploy     | Vercel                                   |
| Container  | Docker (multi-stage build)               |

## Getting Started

### Prerequisites

- Node.js >= 18
- npm >= 9

### Local Development

```bash
# Clone the repository
git clone https://github.com/lethien999/lethien-portfolio.git
cd lethien-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Docker

### Build and run with Docker

```bash
# Build the image
docker build -t lethien-portfolio .

# Run the container
docker run -p 3000:3000 lethien-portfolio
```

## Deploy to Vercel

### Option 1: Via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"**
3. Import the `lethien-portfolio` repository
4. Vercel auto-detects Next.js — click **Deploy**
5. Your site is live at `https://lethien-portfolio.vercel.app`

### Option 2: Via Vercel CLI

```bash
npm i -g vercel
vercel
```

### Custom Domain

1. Go to your project on Vercel → **Settings** → **Domains**
2. Add your custom domain (e.g., `lethien.dev`)
3. Update DNS records as instructed by Vercel
4. SSL is provisioned automatically

## Git Workflow

```bash
# Create and switch to dev branch
git checkout -b dev

# Make changes, then commit
git add .
git commit -m "feat: add new feature"

# Push dev branch
git push origin dev

# When ready to deploy, merge into main
git checkout main
git merge dev
git push origin main
# Vercel auto-deploys from main
```

## Expanding to Docker + VPS

To deploy on a VPS (e.g., DigitalOcean, AWS EC2):

```bash
# On your VPS, pull the image or build from source
git clone https://github.com/lethien999/lethien-portfolio.git
cd lethien-portfolio
docker build -t lethien-portfolio .
docker run -d -p 3000:3000 --name portfolio lethien-portfolio

# Use Nginx as reverse proxy (optional)
# Point your domain DNS to the VPS IP
# Use certbot for SSL
```

## Project Structure

```
├── app/
│   ├── globals.css          # Design system & theme
│   ├── layout.tsx           # Root layout with SEO metadata
│   └── page.tsx             # Main page assembly
├── components/
│   ├── Header.tsx           # Navigation bar
│   ├── Footer.tsx           # Footer
│   ├── TerminalText.tsx     # Typing animation
│   ├── SectionWrapper.tsx   # Section container with animation
│   ├── TechTag.tsx          # Tech stack badge
│   ├── ProjectCard.tsx      # Project display card
│   └── Timeline.tsx         # Vertical timeline
├── sections/
│   ├── HeroSection.tsx      # Terminal intro
│   ├── AboutSection.tsx     # About me + tech stack
│   ├── ProjectsSection.tsx  # Project showcase
│   ├── RoadmapSection.tsx   # Career roadmap
│   └── ContactSection.tsx   # Contact info
├── .github/workflows/ci.yml # CI pipeline
├── Dockerfile               # Multi-stage Docker build
└── README.md
```

## License

MIT
