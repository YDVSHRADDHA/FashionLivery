# 🛡️ LIVERY Platform Security Handbook & Checklist

This document serves as your local security reference guide and active checklist. It outlines the specific steps taken, commands to remember, and best practices to follow to keep the **LIVERY** ecosystem (Next.js web client, Node/Express Core API, and FastAPI AI Service) secure.

---

## 📋 Active Security Checklist

| Status | Category | Security Control / Focus Area | Implemented? |
| :--- | :--- | :--- | :---: |
| ✅ *Completed* | **Repository** | Hardening `.gitignore` to block `.env*` | [x] Yes |
| ✅ *Completed* | **Express API** | Restricting CORS to trusted production origins | [x] Yes |
| ✅ *Completed* | **Express API** | Secure Environment-based JWT Secrets | [x] Yes |
| ✅ *Completed* | **FastAPI** | REST API Rate-limiting & CORS configuration | [x] Yes |
| 📝 *Action Required* | **Database** | Enforcing SSL connections and database hardening | [ ] No |
| 📝 *Action Required* | **GitHub** | Turning on Secret Scanning & Dependabot Updates | [ ] No |

---

## 🛠️ Step-by-Step Implementation Guide

### 1. Repository Security: Hardening `.gitignore`
**What to remember:** Never commit sensitive credentials or environment variables to GitHub. 
*   **The Risk:** Committing `.env` files exposes API keys, database passwords, and JWT secrets to the public, leading to data breaches or financial loss.
*   **The Control:** We make sure `.gitignore` ignores all variations of `.env` files recursively using `.env*`.

### 2. Express API Security: Restricting CORS
**What to remember:** Don't leave CORS completely open (`*`) in production.
*   **The Risk:** Open CORS allows any third-party malicious domain to make requests to your API and potentially hijack sessions or extract private user data.
*   **The Control:** Restrict the Express `cors` middleware to allow only `localhost` (for development) and your exact live Vercel domains (for production).
```typescript
const allowedOrigins = [
  'http://localhost:3000',
  'https://fashion-livery.vercel.app' // Replace with your primary live Vercel domain
];
```

### 3. JWT Authentication Hardening
**What to remember:** Load keys from environment variables and ensure high cryptographic entropy.
*   **The Risk:** Weak keys like `"mysecret"` are easily brute-forced, allowing hackers to sign valid administrative authentication tokens.
*   **The Control:** Ensure the API reads from `process.env.JWT_SECRET` and generate secure keys in the terminal.
*   **Recipe (Generate a Cryptographic Key):**
    ```powershell
    node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
    ```

### 4. FastAPI AI Service Protection
**What to remember:** FastAPI endpoints are publicly exposed on their own port.
*   **The Risk:** The `/recommend` endpoint calls heavy sentence-transformer ML models. If left open, a malicious user could overwhelm the server with concurrent requests (DoS attack).
*   **The Control:** Add standard FastAPI CORS configuration and enforce rate-limiting.

### 5. GitHub Repository Settings (Interactive Steps)
To complete your security posture, perform these steps directly on GitHub:
1.  Go to your repository: `https://github.com/YDVSHRADDHA/FashionLivery`
2.  Click the **Settings** tab.
3.  Navigate to **Code security and analysis**:
    *   Enable **Secret scanning** (detects accidentally committed keys).
    *   Enable **Dependabot alerts** and **Dependabot security updates** (auto-patches vulnerable npm packages).

---

## 🔑 Key Security Commands Reference

| Operation | Command (PowerShell / Command Prompt) |
| :--- | :--- |
| **Generate JWT Secret** | `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"` |
| **Check for Vulnerable Packages** | `npm audit` (run inside `web` or `api`) |
| **Deduplicate npm Packages** | `npm dedupe` (optimizes and aligns package versions) |
| **Clean Install (Safe Build)** | `npm ci` (installs exact locked dependencies in production) |

---
*Keep this file updated as the LIVERY platform scales.*
