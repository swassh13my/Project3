# My Portfolio Project

A clean, modular portfolio website built with Vite and React. It includes a homepage, a projects page, reusable UI components, and a polished responsive design for showcasing AI and web app work.

## Features

- Vite + React project setup
- Reusable components for navigation, hero, project cards, and footer
- Client-side routing with `react-router-dom`
- Responsive layout using Flexbox and CSS Grid
- Simple modern styling with gradients, hover effects, and clear typography

## Project Structure

```text
my-portfolio-project/
├── public/
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   └── ProjectCard.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── Projects.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview the production build

```bash
npm run preview
```

## Customization

- Update the text in `src/components/Hero.jsx` to change the headline or introduction.
- Edit the project data in `src/pages/Projects.jsx` to add your real GitHub repositories.
- Adjust colors, spacing, and hover styles in `src/index.css`.

## Contributing

1. Fork the repository.
2. Create a feature branch.
3. Make your changes with clear, focused commits.
4. Run the project locally and confirm everything works.
5. Open a pull request with a short summary of the changes.

## Notes

- Vite uses the root-level `index.html` as the active application entry.
- `public/index.html` is included to match the requested structure and provide a static root-div reference file.
