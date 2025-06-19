export const theme = {
  colors: {
    // Base colors
    background: '#0f0f0f',
    foreground: '#ffffff',
    
    // Dark shades
    dark: {
      100: '#323232',
      200: '#222222',
      300: '#1a1a1a',
      400: '#0f0f0f',
    },
    
    // Gray shades
    gray: {
      100: '#ffffff',
      200: '#999999',
      300: '#555555',
      400: '#323232',
    },
    
    // Gold accents (subtle)
    gold: {
      100: 'rgba(111, 86, 16, 0.1)',
      200: 'rgba(111, 86, 16, 0.2)',
      300: 'rgba(111, 86, 16, 0.3)',
      400: '#6f5610',
    },
  },
  
  gradients: {
    // Dark gradients
    darkGradient: 'linear-gradient(to bottom, #0f0f0f, #323232)',
    darkRadial: 'radial-gradient(circle at center, #323232, #0f0f0f)',
    
    // Gray gradients
    grayGradient: 'linear-gradient(135deg, rgba(85, 85, 85, 0.1), rgba(50, 50, 50, 0.05))',
    grayAccent: 'linear-gradient(to right, rgba(85, 85, 85, 0.2), rgba(50, 50, 50, 0.1))',
    
    // Gold gradients (subtle)
    goldAccent: 'linear-gradient(135deg, rgba(111, 86, 16, 0.1), rgba(111, 86, 16, 0.05))',
    goldHighlight: 'linear-gradient(to right, rgba(111, 86, 16, 0.1), transparent)',
    
    // Premium combinations
    premiumDark: 'linear-gradient(135deg, #323232, #0f0f0f)',
    premiumGlow: 'linear-gradient(to right, rgba(85, 85, 85, 0.1), rgba(111, 86, 16, 0.05), rgba(85, 85, 85, 0.1))',
  },
  
  effects: {
    // Glassmorphism
    glass: {
      dark: 'backdrop-filter: blur(12px) saturate(180%); background-color: rgba(15, 15, 15, 0.8);',
      light: 'backdrop-filter: blur(12px) saturate(180%); background-color: rgba(50, 50, 50, 0.8);',
    },
    
    // Borders
    borders: {
      subtle: '1px solid rgba(85, 85, 85, 0.1)',
      accent: '1px solid rgba(111, 86, 16, 0.1)',
      glow: '1px solid rgba(85, 85, 85, 0.2)',
    },
    
    // Shadows
    shadows: {
      soft: '0 4px 20px rgba(0, 0, 0, 0.2)',
      glow: '0 4px 20px rgba(85, 85, 85, 0.1)',
      goldGlow: '0 4px 20px rgba(111, 86, 16, 0.1)',
    },
  },
}; 