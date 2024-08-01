/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },

  env: {
    API_KEY: "AIzaSyAFkXfft5Bx86Oga_C47kTu4DCUZaaJHjY",
    AUTH_DOMAIN: "dailydeals-354ae.firebaseapp.com",
    PROJECT_ID: "dailydeals-354ae",
    STORAGE_BUCKET: "dailydeals-354ae.appspot.com",
    MESSAGING_SENDER_ID: "51803821578",
    APP_ID: "1:51803821578:web:7f31d6e40116fd7dd0b1f3",
    MEASUREMENT_ID: "G-FTMH4FQT0Q",
  },
};
export default nextConfig;
