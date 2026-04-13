// Theme Configuration
// This file contains all color themes for the application

export const themes = {
  original: {
    name: 'Original Maroon',
    colors: {
      background: '#efefec',
      text: '#2b2b2b',
      primary: '#7b0323',
      secondary: '#F5F1E8',
      cardBackground: '#f7f5f2',
      border: '#2b2b2b',
    }
  },
  option1: {
    name: 'Teal + Warm Gold',
    colors: {
      background: '#FAF9F6',
      text: '#1A202C',
      primary: '#0D9488',
      secondary: '#D97706',
      cardBackground: '#f7f5f2',
      border: '#1A202C',
    }
  },
  option2: {
    name: 'Vibrant Coral + Forest Green',
    colors: {
      background: '#FFFBF5',
      text: '#1C1917',
      primary: '#F97316',
      secondary: '#059669',
      cardBackground: '#f7f5f2',
      border: '#1C1917',
    }
  },
  option3: {
    name: 'Deep Purple + Goldenrod',
    colors: {
      background: '#FEFCF9',
      text: '#1A1625',
      primary: '#7C3AED',
      secondary: '#CA8A04',
      cardBackground: '#f7f5f2',
      border: '#1A1625',
    }
  },
  option4: {
    name: 'Turquoise + Burnt Orange',
    colors: {
      background: '#FAFAF9',
      text: '#18181B',
      primary: '#0891B2',
      secondary: '#EA580C',
      cardBackground: '#f7f5f2',
      border: '#18181B',
    }
  }
};

// Current active theme (default to original)
export let currentTheme = themes.original;

// Function to switch theme
export const setTheme = (themeName) => {
  if (themes[themeName]) {
    currentTheme = themes[themeName];
    return true;
  }
  return false;
};

// Get current theme colors
export const getThemeColors = () => currentTheme.colors;
