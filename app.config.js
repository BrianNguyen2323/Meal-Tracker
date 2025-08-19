export default () => ({
  expo: {
    name: 'Meal-Tracker',
    slug: 'Meal-Tracker',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/images/icon.png',
    scheme: 'mealtracker',
    userInterfaceStyle: 'automatic',
    newArchEnabled: true,
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/images/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
      edgeToEdgeEnabled: true,
    },
    web: {
      bundler: 'metro',
      output: 'static',
      favicon: './assets/images/favicon.png',
    },
    plugins: [
      'expo-router',
      [
        'expo-splash-screen',
        {
          image: './assets/images/splash-icon.png',
          imageWidth: 200,
          resizeMode: 'contain',
          backgroundColor: '#ffffff',
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
    },

    // ✅ Custom runtime values
    extra: {
      WEB_BASE_URL:
        'https://meal-tracker-git-web-ui-nguyenbrian2323-gmailcoms-projects.vercel.app/', // your web backend
      MOBILE_BASE_URL:
        'https://meal-tracker-git-web-ui-nguyenbrian2323-gmailcoms-projects.vercel.app/', // your local IP
    },
  },
});
