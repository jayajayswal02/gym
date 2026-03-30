# 🔑 Environment Variables Guide - FitZone

Complete guide to all environment variables used in the FitZone gym website.

## Table of Contents
1. [Setup Instructions](#setup-instructions)
2. [Environment Variables Breakdown](#environment-variables-breakdown)
3. [Getting API Keys](#getting-api-keys)
4. [Development vs Production](#development-vs-production)
5. [Security Best Practices](#security-best-practices)

---

## Setup Instructions

### Step 1: Create `.env` File
```bash
# Copy the example file
cp .env.example .env
```

### Step 2: Fill in Your Values
Edit `.env` file and replace placeholder values with your actual credentials.

### Step 3: Use in Application
```javascript
// Import and use in React components
import env from './config/env.js'

const apiUrl = env.apiBaseUrl
const stripeKey = env.stripe.publicKey
```

### Step 4: Never Commit
The `.env` file is already in `.gitignore`. Never commit it to Git!

---

## Environment Variables Breakdown

### 🌐 API Configuration
```env
VITE_API_BASE_URL=http://localhost:5000/api
VITE_API_TIMEOUT=30000
```
**Purpose**: Backend API endpoints  
**Default**: `http://localhost:5000/api`  
**Timeout**: 30 seconds (in milliseconds)

### 🗄️ Database Configuration
```env
VITE_DB_HOST=localhost
VITE_DB_PORT=5432
VITE_DB_NAME=fitzone_db
VITE_DB_USER=fitzone_user
VITE_DB_PASSWORD=dev_password_123
```
**Purpose**: PostgreSQL/MySQL database connection  
**Port**: 5432 (PostgreSQL) or 3306 (MySQL)  
**Setup**:
```bash
# Create database
CREATE DATABASE fitzone_db;
CREATE USER fitzone_user WITH PASSWORD 'your_secure_password';
GRANT ALL PRIVILEGES ON DATABASE fitzone_db TO fitzone_user;
```

### 🔐 JWT & Authentication
```env
VITE_JWT_SECRET=your_jwt_super_secret_key_at_least_32_characters_long
VITE_JWT_EXPIRY=7d
VITE_REFRESH_TOKEN_SECRET=your_refresh_token_super_secret_key
```
**Purpose**: User authentication tokens  
**Secret Length**: Minimum 32 characters  
**Generate Secure Secret**:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### 🔥 Firebase Configuration
```env
VITE_FIREBASE_API_KEY=AIzaSyDemoKey
VITE_FIREBASE_AUTH_DOMAIN=fitzone.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=fitzone-12345
VITE_FIREBASE_STORAGE_BUCKET=fitzone-12345.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abc123
```
**Purpose**: Firebase services (auth, storage, messaging)  
**Get Keys**: [Firebase Console](https://console.firebase.google.com)

### 📧 Email Service Configuration

#### SendGrid (Recommended)
```env
VITE_EMAIL_SERVICE=sendgrid
VITE_SENDGRID_API_KEY=SG.your_key_here
VITE_EMAIL_FROM=noreply@fitzone.com
```
**Get Key**: [SendGrid Console](https://app.sendgrid.com/settings/api_keys)

#### Gmail
```env
VITE_EMAIL_SERVICE=gmail
VITE_GMAIL_USER=your_email@gmail.com
VITE_GMAIL_PASSWORD=your_app_password
VITE_EMAIL_FROM=your_email@gmail.com
```
**Get App Password**:
1. Enable 2-Factor Authentication in Gmail
2. Go to Google Account Settings → Security → App passwords
3. Generate app password for "Mail" and "Windows Computer"

### 💳 Stripe Payment Gateway
```env
VITE_STRIPE_PUBLIC_KEY=pk_test_51234567890abc
VITE_STRIPE_SECRET_KEY=sk_test_51234567890abc
VITE_STRIPE_WEBHOOK_SECRET=whsec_test_123456
```
**Purpose**: Payment processing for membership  
**Get Keys**: [Stripe Dashboard](https://dashboard.stripe.com)
**Webhook**:
1. Go to Developers → Webhooks
2. Add endpoint: `http://localhost:5000/api/webhooks/stripe`
3. Listen to: `payment_intent.succeeded`, `payment_intent.payment_failed`

### 🔑 OAuth Configuration

#### Google OAuth
```env
VITE_GOOGLE_CLIENT_ID=123456789.apps.googleusercontent.com
VITE_GOOGLE_CLIENT_SECRET=GOCSPX-abc123
```
**Setup**:
1. [Google Cloud Console](https://console.cloud.google.com)
2. Create project → Create OAuth 2.0 credentials (Web application)
3. Add authorized redirect URIs: `http://localhost:3000/auth/google/callback`

#### Facebook OAuth
```env
VITE_FACEBOOK_APP_ID=1234567890
VITE_FACEBOOK_APP_SECRET=abc123def456789
```
**Setup**:
1. [Facebook Developers](https://developers.facebook.com)
2. Create app → Configure Facebook Login
3. Add redirect URIs: `http://localhost:3000/auth/facebook/callback`

#### GitHub OAuth
```env
VITE_GITHUB_CLIENT_ID=Iv1.abc123def456
VITE_GITHUB_CLIENT_SECRET=abc123def456789
```
**Setup**:
1. [GitHub Settings](https://github.com/settings/developers)
2. Create OAuth App
3. Set redirect URL: `http://localhost:3000/auth/github/callback`

### ☁️ AWS S3 Configuration (File Upload)
```env
VITE_AWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE
VITE_AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG/bPx
VITE_AWS_REGION=us-east-1
VITE_AWS_S3_BUCKET=fitzone-bucket
```
**Purpose**: Cloud storage for images, documents  
**Setup**:
1. [AWS Console](https://console.aws.amazon.com)
2. Create S3 bucket
3. Create IAM user with S3 access
4. Generate Access Keys

### 📊 Analytics & Monitoring

#### Google Analytics
```env
VITE_GOOGLE_ANALYTICS_ID=G-ABC1234DEF567
```
**Get ID**: [Google Analytics](https://analytics.google.com)

#### Sentry (Error Tracking)
```env
VITE_SENTRY_DSN=https://abc123@sentry.io/1234567
```
**Get DSN**: [Sentry Console](https://sentry.io)

### 📱 SMS Service (Twilio)
```env
VITE_TWILIO_ACCOUNT_SID=ACyour_account_sid
VITE_TWILIO_AUTH_TOKEN=your_auth_token
VITE_TWILIO_PHONE_NUMBER=+1234567890
```
**Purpose**: Send SMS notifications  
**Get Credentials**: [Twilio Console](https://www.twilio.com/console)

### 🎯 App Configuration
```env
VITE_APP_NAME=FitZone
VITE_APP_VERSION=1.0.0
VITE_APP_ENVIRONMENT=development
VITE_DEBUG_MODE=true
```
**Options**:
- `APP_ENVIRONMENT`: development, staging, production
- `DEBUG_MODE`: true (development), false (production)

### 🔄 Cache & Session
```env
VITE_SESSION_SECRET=your_session_recovery_secret_key
VITE_REDIS_HOST=localhost
VITE_REDIS_PORT=6379
VITE_REDIS_PASSWORD=
```
**Purpose**: Session management & caching  
**Setup Redis**:
```bash
# Windows: Use WSL or Docker
# Linux/Mac:
brew install redis
redis-server
```

### 🗺️ Third Party Services
```env
VITE_MAPBOX_ACCESS_TOKEN=pk.eyJ1IjoiZml0IjoiYWI
VITE_RECAPTCHA_SITE_KEY=6LeIxAcT...
VITE_RECAPTCHA_SECRET_KEY=6LeIxAcT...
```
**Mapbox**: [Mapbox Tokens](https://account.mapbox.com)  
**reCAPTCHA**: [Google reCAPTCHA](https://www.google.com/recaptcha)

### 👨‍💼 Admin Credentials (Development Only)
```env
VITE_ADMIN_EMAIL=admin@fitzone.dev
VITE_ADMIN_PASSWORD=Admin@123Secure
```
**⚠️ WARNING**: Change these in production!

### 📂 File Upload Configuration
```env
VITE_MAX_FILE_SIZE=5242880
VITE_ALLOWED_FILE_TYPES=jpg,jpeg,png,gif,pdf,doc,docx
VITE_UPLOAD_DIR=./uploads
```
**Size**: 5MB (5242880 bytes)  
**Allowed Types**: Comma-separated list

---

## Getting API Keys

### Quick Reference Table

| Service | Website | Time | Free Tier |
|---------|---------|------|-----------|
| SendGrid | sendgrid.com | 5 min | 100 emails/day |
| Firebase | console.firebase.google.com | 10 min | Yes |
| Stripe | stripe.com | 10 min | Yes (testing) |
| Google OAuth | console.cloud.google.com | 10 min | Yes |
| AWS S3 | aws.amazon.com | 15 min | 5GB free |
| Twilio | twilio.com | 10 min | $15 free credits |
| Sentry | sentry.io | 5 min | Free tier |
| Mapbox | mapbox.com | 5 min | 50k requests/month |

---

## Development vs Production

### Development (.env.development)
```env
VITE_APP_ENVIRONMENT=development
VITE_DEBUG_MODE=true
VITE_API_BASE_URL=http://localhost:5000/api
VITE_STRIPE_PUBLIC_KEY=pk_test_...
```

### Production (.env.production)
```env
VITE_APP_ENVIRONMENT=production
VITE_DEBUG_MODE=false
VITE_API_BASE_URL=https://api.fitzone.com/api
VITE_STRIPE_PUBLIC_KEY=pk_live_...
```

### To Use Different Env Files
```bash
# Development
npm run dev

# Production
npm run build
npm run preview
```

---

## Security Best Practices

### ✅ DO:
- ✅ Use strong, random secrets (min 32 characters)
- ✅ Store real `.env` file locally only (never commit)
- ✅ Use different keys for dev, staging, production
- ✅ Rotate secrets periodically
- ✅ Use environment variables for all sensitive data
- ✅ Add `.env` to `.gitignore` (already done)
- ✅ Use `.env.example` as template for other developers

### ❌ DON'T:
- ❌ Commit `.env` files to Git
- ❌ Share secrets in chat or email
- ❌ Use test keys in production
- ❌ Hardcode secrets in source code
- ❌ Display secrets in logs/console
- ❌ Use simple passwords (e.g., "password123")
- ❌ Upload `.env` to public repositories

### Generate Secret Keys
```bash
# Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

# Python
python -c "import secrets; print(secrets.token_hex(32))"

# OpenSSL
openssl rand -hex 32
```

### Encrypt Sensitive Data
For extra security in production, consider:
- AWS Secrets Manager
- Azure Key Vault
- HashiCorp Vault
- dotenv-vault

---

## Example Usage in Code

### Basic Usage
```javascript
import env from './config/env.js'

// Use in components
const apiUrl = env.apiBaseUrl
const stripeKey = env.stripe.publicKey

console.log(`Connecting to: ${apiUrl}`)
```

### With API Calls
```javascript
import env from './config/env.js'

export const apiCall = async (endpoint) => {
  const response = await fetch(`${env.apiBaseUrl}${endpoint}`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })
  return response.json()
}
```

### In React Components
```javascript
import env from './config/env.js'

function MyComponent() {
  useEffect(() => {
    if (env.app.debugMode) {
      console.log('Debug mode enabled')
    }
  }, [])

  return <div>App: {env.app.name}</div>
}
```

---

## Troubleshooting

### Issue: "Environment variable not defined"
**Solution**: Make sure variable name starts with `VITE_` and is in `.env` file

### Issue: Changes not reflecting
**Solution**: Restart dev server (`npm run dev`)

### Issue: Variables undefined in browser
**Solution**: They must start with `VITE_` prefix. Client-side variables need this prefix.

### Issue: "Cannot read property of undefined"
**Solution**: Add default values in `env.js` config

---

## Support
For questions about specific services:
- Firebase: [Firebase Docs](https://firebase.google.com/docs)
- Stripe: [Stripe Documentation](https://stripe.com/docs)
- AWS: [AWS Documentation](https://docs.aws.amazon.com)
- SendGrid: [SendGrid API Reference](https://docs.sendgrid.com)

---

**Last Updated**: March 30, 2026  
**Status**: ✅ Complete & Ready to Use
