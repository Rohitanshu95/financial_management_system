# Plan: Environment Setup & Gmail Migration Guide

## Phase 1: Gmail Migration (Nodemailer) [COMPLETED]
- [x] **Install**: `npm install nodemailer` and `npm install --save-dev @types/nodemailer`.
- [x] **Config**: Create `backend/src/config/nodemailer.config.ts`.
- [x] **Logic**: Update `backend/src/mailers/mailer.ts` to use `nodemailer` transport.
- [x] **Environment**: Update `backend/.env` with `GMAIL_USER` and `GMAIL_PASS`.

## Phase 2: Security & Cleanup [COMPLETED]
- [x] **JWT**: Generate secure 64-character secrets for `JWT_SECRET` and `JWT_REFRESH_SECRET`.
- [x] **Cleanup**: Uninstall `resend` package.

## Phase 3: Local Execution [IN PROGRESS]
- [x] **Client Install**: Running `npm install --legacy-peer-deps` in `/client`.
- [ ] **Backend**: `npm run dev`
- [ ] **Frontend**: `npm run dev`

## Phase 4: Manual Actions Required
- [ ] **Google Account**: Enable 2-Step Verification.
- [ ] **App Password**: Generate an App Password for "Finora".
- [ ] **Update .env**: Put your Gmail address and the 16-character App Password in `backend/.env`.
