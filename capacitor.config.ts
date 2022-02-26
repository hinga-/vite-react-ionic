import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'vite-react',
  webDir: 'dist',
  bundledWebRuntime: false,
  // Add this:
  ios: {
    scheme: 'App',
  },
};

export default config;
