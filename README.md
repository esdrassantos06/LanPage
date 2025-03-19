# LanPage - Modern Landing Page Template

A sleek, responsive landing page template built with Next.js 15 and Tailwind CSS.

![LanPage Screenshot](/public/screenshots/lanpage.png)

## Features

- Modern UI design with purple accent theme
- Fully responsive layout
- Built with Next.js 15 and React 19
- Styled with Tailwind CSS 4
- Optimized for performance
- Easy to customize

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn
# or
pnpm install
# or
bun install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
/
├── public/             # Static assets
├── src/
│   ├── app/            # App router pages
│   │   ├── globals.css # Global styles
│   │   ├── layout.tsx  # Root layout
│   │   └── page.tsx    # Homepage
│   └── components/     # Reusable components
│       ├── Footer.tsx
│       ├── Header.tsx
│       └── Layout.tsx
└── ...config files
```

## Customization

### Styling

The project uses Tailwind CSS for styling. Custom theme colors are defined in `src/app/globals.css`:

```css
@theme{
  --color-background: #0F172A;
  --color-header: #181E2B;
  --color-Purple: #9333EA;
  --color-newPurple: #581C87;
}
```

### Components

The landing page consists of these main components:
- Header with navigation and CTA buttons
- Main hero section with heading, description, and buttons
- Footer (currently minimal)

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.