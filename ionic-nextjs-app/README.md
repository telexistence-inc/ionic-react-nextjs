# Ionic React Next.js App

A multiplatform internal application built with Ionic React and Next.js, providing a modern UI framework with the flexibility of Next.js routing and features.

## Features

- 🎨 **Ionic UI Components** - Beautiful, mobile-optimized UI components
- 🚀 **Next.js Framework** - File-based routing and optimized performance
- 📱 **Multiplatform** - Works on web, iOS, and Android
- 🎯 **TypeScript** - Full TypeScript support for better development experience
- 📸 **Product Gallery** - Products page with list and grid views
- 🍔 **Side Menu Navigation** - Slide-out menu for easy navigation
- 💅 **Responsive Design** - Adapts to different screen sizes

## Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

## Getting Started

### Clone the repository
```bash
git clone https://github.com/telexistence-inc/ionic-react-nextjs.git
cd ionic-react-nextjs
```

### Install dependencies
```bash
npm install
```

### Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Home page with menu
│   ├── products/
│   │   └── page.tsx        # Products listing page
│   └── providers.tsx       # Ionic React setup
├── components/
│   └── ClientOnly.tsx      # Client-side rendering wrapper
├── data/
│   └── products.ts         # Product data and types
└── theme/
    └── variables.css       # Ionic theme variables
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Navigation

The app uses Next.js App Router for navigation:
- `/` - Home page
- `/products` - Products listing with grid/list views

## Customization

### Theme
Edit `src/theme/variables.css` to customize:
- Colors
- Fonts
- Spacing
- Component styles

### Adding New Pages
1. Create a new folder in `src/app/your-page/`
2. Add a `page.tsx` file
3. The route will be available at `/your-page`

## Mobile Deployment

While this app is built with Next.js, you can deploy it to mobile platforms using Capacitor:

```bash
# Install Capacitor
npm install @capacitor/core @capacitor/cli

# Initialize Capacitor
npx cap init

# Add platforms
npx cap add ios
npx cap add android

# Build and sync
npm run build
npx cap sync
```

**Note**: API routes (`/api/*`) won't work in mobile builds. Plan for external APIs if targeting mobile platforms.

## Key Technologies

- **[Next.js 15](https://nextjs.org/)** - React framework with routing and optimization
- **[Ionic React](https://ionicframework.com/docs/react)** - Mobile-first UI components
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety and better DX
- **[Ionicons](https://ionic.io/ionicons)** - Icon library

## Development Tips

1. **SPA Navigation**: All navigation uses Next.js router (`useRouter`) for SPA behavior
2. **Ionic Components**: Use Ionic components for consistent mobile UI
3. **Responsive Design**: Test on different screen sizes using browser dev tools
4. **TypeScript**: Leverage TypeScript for better code quality

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is proprietary to Telexistence Inc.

## Support

For internal support, please contact the development team.