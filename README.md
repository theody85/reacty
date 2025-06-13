# React Concepts - Interactive Learning Platform

A modern, interactive single-page application that teaches React concepts through visual animations and hands-on code examples. Built specifically for visual learners who want to understand React deeply through interactive experiences.

## 🚀 Features

### Core Learning Experience
- **Interactive Code Editor**: Monaco Editor with real-time syntax highlighting
- **Visual Component Tree**: Animated visualization of React component structure
- **Live Code Execution**: See your changes reflected immediately
- **Progress Tracking**: Track your learning journey with persistent progress
- **Theme Support**: Light, dark, and system theme modes

### React Concepts Covered
1. **Components & JSX** - Learn about React components and JSX syntax
2. **Props & State** - Understand data flow in React applications
3. **Hooks** - Master React hooks for state and effects
4. **Event Handling** - Handle user interactions and events
5. **Conditional Rendering** - Render content based on conditions
6. **Lists & Keys** - Work with dynamic lists and keys
7. **Component Lifecycle** - Understand component lifecycle methods

### Interactive Elements
- **Code Playground**: Edit code and see immediate results
- **Visual Debugger**: Component tree visualization with expandable nodes
- **Practice Challenges**: Hands-on exercises for each concept
- **Progress Indicators**: Visual progress tracking throughout the course
- **Command Palette**: Quick navigation between concepts

## 🛠 Tech Stack

- **React 19** - Latest React with hooks (no class components)
- **Vite** - Fast build tool and development server
- **TypeScript** - Type-safe development
- **shadcn/ui** - Modern component library built on Radix UI
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **React Router** - Client-side routing
- **Monaco Editor** - Professional code editor
- **Prism.js** - Syntax highlighting
- **Lucide React** - Beautiful icons

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd reacty
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗 Project Structure

```
src/
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── common/            # Shared components (Layout, Navigation, etc.)
│   ├── concepts/          # Concept-specific components
│   └── visualizations/    # Visual components (ComponentTree, etc.)
├── pages/                 # Page components for each concept
├── hooks/                 # Custom React hooks
├── data/                  # Static data and configuration
├── lib/                   # Utility functions
└── styles/                # Global styles
```

## 🎨 Design System

The application uses shadcn/ui's design system with:
- **Consistent theming** with CSS variables
- **Responsive design** that works on all devices
- **Accessibility** built-in with ARIA attributes
- **Dark mode** support with system preference detection
- **Smooth animations** powered by Framer Motion

## 🎯 Learning Features

### For Visual Learners
- **Animated Component Trees**: See how components are structured
- **Data Flow Visualization**: Watch props and state flow through components
- **Interactive Examples**: Edit code and see immediate results
- **Visual Feedback**: Hover effects, transitions, and micro-interactions

### For Hands-on Learners
- **Live Code Editor**: Professional IDE-like experience
- **Practice Challenges**: Real-world exercises for each concept
- **Instant Feedback**: See your changes reflected immediately
- **Progress Tracking**: Monitor your learning journey

### For All Learners
- **Clear Explanations**: Concise, focused content
- **Progressive Difficulty**: Concepts build upon each other
- **Multiple Learning Paths**: Choose your preferred learning style
- **Mobile Responsive**: Learn on any device

## 🚀 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Adding New Concepts

1. Add concept data to `src/data/concepts.ts`
2. Create page component in `src/pages/`
3. Add route in `src/App.tsx`
4. Create concept-specific components in `src/components/concepts/`

### Customizing Components

The application uses shadcn/ui components which can be customized by:
- Modifying the component files in `src/components/ui/`
- Updating Tailwind configuration
- Adding custom CSS variables for theming

## 🎨 Customization

### Themes
The application supports three theme modes:
- **Light**: Clean, bright interface
- **Dark**: Easy on the eyes
- **System**: Automatically matches your OS preference

### Styling
- All styling is done with Tailwind CSS
- shadcn/ui components are fully customizable
- CSS variables for consistent theming
- Responsive design for all screen sizes

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Monaco Editor](https://microsoft.github.io/monaco-editor/) for the code editor
- [React Team](https://react.dev/) for the amazing framework

---

Built with ❤️ for the React community
