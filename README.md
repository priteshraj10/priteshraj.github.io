# Pritesh Raj - Personal Portfolio

This is the source code for my personal portfolio website hosted at [priteshraj.github.io](https://priteshraj.github.io).

## Features

- Modern, responsive design
- SEO optimized
- Dark mode support
- Interactive UI with animations
- Contact form
- Project showcase with filtering
- Skills visualization
- Accessible components

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/priteshraj/priteshraj.github.io.git
   cd priteshraj.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
├── app/                  # Next.js app directory
│   ├── components/       # React components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── About.tsx     # About section
│   │   ├── Contact.tsx   # Contact section
│   │   ├── Footer.tsx    # Footer component
│   │   ├── Header.tsx    # Header component
│   │   ├── Hero.tsx      # Hero section
│   │   ├── Projects.tsx  # Projects section
│   │   └── Skills.tsx    # Skills section
│   ├── lib/              # Utility functions
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   └── types.d.ts        # TypeScript declarations
├── public/               # Static assets
│   ├── images/           # Images
│   ├── robots.txt        # SEO
│   └── sitemap.xml       # SEO
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies
```

## Customization

- **Content**: Update personal information in the component files
- **Images**: Replace placeholder images in the `/public/images/` directory
- **Colors**: Modify color scheme in `app/globals.css`
- **Components**: Add or modify components in the `app/components/` directory

## Deployment

This site is configured for GitHub Pages deployment:

1. Build the static site:
   ```bash
   npm run build
   # or
   yarn build
   ```

2. The output will be in the `out` directory, which can be deployed to GitHub Pages.

3. For automatic deployment, use GitHub Actions by pushing to the main branch.

## Key Improvements

- **shadcn/ui Integration**: Modern, accessible UI components
- **TypeScript Support**: Improved type safety and developer experience
- **Dark Mode**: Proper theming with CSS variables
- **Animations**: Smooth transitions and interactions
- **Responsive Design**: Mobile-first approach
- **SEO Optimization**: Meta tags, sitemap, and robots.txt

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Feel free to reach out if you have any questions or suggestions:

- Email: contact@priteshraj.com
- GitHub: [@priteshraj](https://github.com/priteshraj)
- LinkedIn: [Pritesh Raj](https://linkedin.com/in/priteshraj) 