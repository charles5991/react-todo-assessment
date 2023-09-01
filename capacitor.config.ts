import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.elstar',
  appName: 'elstar',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
