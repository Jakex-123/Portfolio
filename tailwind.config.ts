import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        // Define custom fonts for paragraphs
        body: [
          '-apple-system', 
          'BlinkMacSystemFont', 
          'Segoe UI', 
          'Roboto', 
          'Oxygen', 
          'Ubuntu', 
          'Cantarell', 
          'Fira Sans', 
          'Droid Sans', 
          'Helvetica Neue', 
          'sans-serif',
          'Apple Color Emoji', 
          'Segoe UI Emoji', 
          'Segoe UI Symbol'
        ],
        // Define custom fonts for headings
        heading: [
          'Noe Display', 
          'Georgia', 
          'Times', 
          'serif'
        ]
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(30px) scale(0.9)' },
          '80%': { opacity: '1', transform: 'translateY(0px) scale(1)' },
          '100%': { opacity: '1', transform: 'translateY(0px) scale(1)' },
        },
        'fade-down': {
          '0%': { opacity: '0', transform: 'translateY(-10px) scale(0.9)' },
          '100%': { opacity: '1', transform: 'translateY(0px) scale(1)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s',
        'fade-down':'fade-down 0.5s'
      },
      colors: {
        // Light mode colors
        lightPrimaryBg: '#FEF6E4', // cosmic-latte
        lightSecondaryBg: '#F3D2C1', // pale-dogwood
        lightTertiaryBg: '#F57AA9', // cyclamen
        lightInactiveTabBg: '#FBE4D9', // derived light shade
        lightHoverTabBg: '#E6C6B8', // derived light shade
        lightCardBg: '#8BD3DD', // non-photo-blue
        lightPrimaryText: '#172C66', // delft-blue
        lightSecondaryText: '#001858', // penn-blue
        lightblueaccent: '#006E8A', // custom accent color

        // Dark mode colors
        primaryBg: '#1F1F1F',
        secondaryBg: '#121212',
        activeTabBg: '#000000',
        inactiveTabBg: '#2B2B2B',
        hoverTabBg: '#333333',
        accentBlue: '#4A90E2', // Modern blue for accents
        accentGreen: '#4CAF50', // Muted green for alternative accents
        accentPurple: '#A55DED', // Add accentPurple to match your custom CSS
        accentDarkPurple: '#864BC0', // Add accentDarkPurple as well
        cardBg: '#2A2A2A',
        primaryText: '#FFFFFF',
        secondaryText: '#B0B0B0',
      },
      borderRadius: {
        'rounded-lg': '8px',
        'rounded-md': '6px',
      },
      spacing: {
        '0.5rem': '0.5rem',
        '0.75rem': '0.75rem',
      },
      backgroundImage: {
        // Gradients
        'gradient-top': 'linear-gradient(0deg, #fef6e4, #001858, #172c66, #f57aa9, #f3d2c1, #8bd3dd)',
        'gradient-right': 'linear-gradient(90deg, #fef6e4, #001858, #172c66, #f57aa9, #f3d2c1, #8bd3dd)',
        'gradient-bottom': 'linear-gradient(180deg, #fef6e4, #001858, #172c66, #f57aa9, #f3d2c1, #8bd3dd)',
        'gradient-left': 'linear-gradient(270deg, #fef6e4, #001858, #172c66, #f57aa9, #f3d2c1, #8bd3dd)',
        'gradient-top-right': 'linear-gradient(45deg, #fef6e4, #001858, #172c66, #f57aa9, #f3d2c1, #8bd3dd)',
        'gradient-bottom-right': 'linear-gradient(135deg, #fef6e4, #001858, #172c66, #f57aa9, #f3d2c1, #8bd3dd)',
        'gradient-top-left': 'linear-gradient(225deg, #fef6e4, #001858, #172c66, #f57aa9, #f3d2c1, #8bd3dd)',
        'gradient-bottom-left': 'linear-gradient(315deg, #fef6e4, #001858, #172c66, #f57aa9, #f3d2c1, #8bd3dd)',
        'gradient-radial': 'radial-gradient(circle, #fef6e4, #001858, #172c66, #f57aa9, #f3d2c1, #8bd3dd)',
      },
    },
  },
  plugins: [],
};

export default config;
