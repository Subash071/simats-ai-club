# AI Club Website

A professional, minimal, and fully responsive website for a university Artificial Intelligence Club. Built with React, TypeScript, and Tailwind CSS.

## Features
- **Centralized Content:** All club information (events, projects, members) is stored in simple data files. No need to touch UI components to update the site.
- **Responsive Design:** Optimized for mobile, tablet, and desktop.
- **Performance First:** Built with Vite for lightning-fast HMR and optimized production builds.
- **Modern UI:** Subtle animations, dark/light contrast theme, and accessible components.

## Tech Stack
- **Framework:** React + Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Routing:** React Router v6
- **Icons:** Lucide React

## Project Structure
```text
src/
├── components/
│   ├── domain/       # Specific components like ProjectCard, EventCard
│   ├── layout/       # Navbar, Footer, Layout wrapper
│   ├── ui/           # Generic reusable components (Button, Heading)
│   └── visuals/      # Canvas/SVG based visual elements
├── data/             # ⚠️ EDIT THESE FILES TO UPDATE CONTENT
│   ├── siteConfig.ts # Global settings, club name, social links, forms
│   ├── team.ts       # Faculty and student leadership
│   ├── events.ts     # Upcoming and past events
│   ├── projects.ts   # Community projects
│   ├── achievements.ts 
│   └── resources.ts  # Learning Hub and Idea Lab data
├── pages/            # Page components corresponding to routes
├── App.tsx           # Router configuration
└── index.css         # Global CSS variables (Colors)
```

## How to Update Club Content

To update the website without touching the code, navigate to `src/data/` and modify the respective TypeScript files.

1. **Change Club Name or Links:** Edit `src/data/siteConfig.ts`
2. **Add a New Event:** Add an object to the `events` array in `src/data/events.ts`
3. **Add a New Member:** Add to the `executive` or `faculty` array in `src/data/team.ts`
4. **Change Colors:** Edit the CSS variables inside `:root` in `src/index.css`

## Local Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Production Build
```bash
npm run build
npm run preview
```

## Deployment (Netlify)
The project includes a `netlify.toml` file to handle SPA routing.
1. Create a GitHub repository and push your code.
2. Connect the repository to Netlify.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy.
