/**
 * Environment Configuration
 * All environment variables are prefixed with VITE_ to be accessible in Vite
 */

export const env = {
  // API Configuration
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api',
  apiTimeout: import.meta.env.VITE_API_TIMEOUT || 30000,

  // Database Configuration
  db: {
    host: import.meta.env.VITE_DB_HOST || 'localhost',
    port: import.meta.env.VITE_DB_PORT || 5432,
    name: import.meta.env.VITE_DB_NAME || 'fitzone_db',
    user: import.meta.env.VITE_DB_USER || 'fitzone_user',
    password: import.meta.env.VITE_DB_PASSWORD || '',
  },

  // authentication
  jwt: {
    secret: import.meta.env.VITE_JWT_SECRET || 'dev_secret',
    expiry: import.meta.env.VITE_JWT_EXPIRY || '7d',
    refreshSecret: import.meta.env.VITE_REFRESH_TOKEN_SECRET || 'dev_refresh_secret',
  },

  // Firebase Configuration
  firebase: {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY || '',
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || '',
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || '',
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || '',
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '',
    appId: import.meta.env.VITE_FIREBASE_APP_ID || '',
  },

  // Email Service Configuration
  email: {
    service: import.meta.env.VITE_EMAIL_SERVICE || 'sendgrid',
    sendgridApiKey: import.meta.env.VITE_SENDGRID_API_KEY || '',
    gmailUser: import.meta.env.VITE_GMAIL_USER || '',
    gmailPassword: import.meta.env.VITE_GMAIL_PASSWORD || '',
    from: import.meta.env.VITE_EMAIL_FROM || 'noreply@fitzone.com',
  },

  // Payment Gateway (Stripe)
  stripe: {
    publicKey: import.meta.env.VITE_STRIPE_PUBLIC_KEY || '',
    secretKey: import.meta.env.VITE_STRIPE_SECRET_KEY || '',
    webhookSecret: import.meta.env.VITE_STRIPE_WEBHOOK_SECRET || '',
  },

  // OAuth Configuration
  oauth: {
    google: {
      clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID || '',
      clientSecret: import.meta.env.VITE_GOOGLE_CLIENT_SECRET || '',
    },
    facebook: {
      appId: import.meta.env.VITE_FACEBOOK_APP_ID || '',
      appSecret: import.meta.env.VITE_FACEBOOK_APP_SECRET || '',
    },
    github: {
      clientId: import.meta.env.VITE_GITHUB_CLIENT_ID || '',
      clientSecret: import.meta.env.VITE_GITHUB_CLIENT_SECRET || '',
    },
  },

  // AWS S3 Configuration
  aws: {
    accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID || '',
    secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY || '',
    region: import.meta.env.VITE_AWS_REGION || 'us-east-1',
    s3Bucket: import.meta.env.VITE_AWS_S3_BUCKET || '',
  },

  // Analytics & Monitoring
  analytics: {
    googleAnalyticsId: import.meta.env.VITE_GOOGLE_ANALYTICS_ID || '',
    sentryDsn: import.meta.env.VITE_SENTRY_DSN || '',
  },

  // SMS Service (Twilio)
  twilio: {
    accountSid: import.meta.env.VITE_TWILIO_ACCOUNT_SID || '',
    authToken: import.meta.env.VITE_TWILIO_AUTH_TOKEN || '',
    phoneNumber: import.meta.env.VITE_TWILIO_PHONE_NUMBER || '',
  },

  // App Configuration
  app: {
    name: import.meta.env.VITE_APP_NAME || 'FitZone',
    version: import.meta.env.VITE_APP_VERSION || '1.0.0',
    environment: import.meta.env.VITE_APP_ENVIRONMENT || 'development',
    debugMode: import.meta.env.VITE_DEBUG_MODE === 'true',
  },

  // Cache & Session
  cache: {
    sessionSecret: import.meta.env.VITE_SESSION_SECRET || 'dev_session_secret',
    redisHost: import.meta.env.VITE_REDIS_HOST || 'localhost',
    redisPort: import.meta.env.VITE_REDIS_PORT || 6379,
    redisPassword: import.meta.env.VITE_REDIS_PASSWORD || '',
  },

  // Third Party Services
  thirdParty: {
    mapboxToken: import.meta.env.VITE_MAPBOX_ACCESS_TOKEN || '',
    recaptchaSiteKey: import.meta.env.VITE_RECAPTCHA_SITE_KEY || '',
    recaptchaSecretKey: import.meta.env.VITE_RECAPTCHA_SECRET_KEY || '',
  },

  // Admin Credentials (Dev Only)
  admin: {
    email: import.meta.env.VITE_ADMIN_EMAIL || 'admin@fitzone.dev',
    password: import.meta.env.VITE_ADMIN_PASSWORD || 'Admin@123',
  },

  // Port Configuration
  ports: {
    frontend: import.meta.env.VITE_PORT || 3000,
    backend: import.meta.env.VITE_BACKEND_PORT || 5000,
  },

  // File Upload
  upload: {
    maxFileSize: parseInt(import.meta.env.VITE_MAX_FILE_SIZE || '5242880'),
    allowedTypes: (import.meta.env.VITE_ALLOWED_FILE_TYPES || 'jpg,jpeg,png,gif,pdf').split(','),
    uploadDir: import.meta.env.VITE_UPLOAD_DIR || './uploads',
  },
};

// Helper function to check if environment variable is set
export const isEnvSet = (key) => {
  return import.meta.env[`VITE_${key}`] !== undefined;
};

// Helper for development logging
if (env.app.debugMode) {
  console.log('Environment Configuration Loaded:', {
    api: env.apiBaseUrl,
    app: env.app.name,
    environment: env.app.environment,
  });
}

export default env;
