# EmailJS Setup Guide

This guide will help you set up EmailJS to receive emails from your contact form.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (free tier includes 200 emails/month)

## Step 2: Create an Email Service

1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. **Copy the Service ID** (you'll need this later)

## Step 3: Create an Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

4. **Copy the Template ID** (you'll need this later)

## Step 4: Get Your Public Key

1. Go to **Account** > **General**
2. Find **API Keys** section
3. **Copy your Public Key**

## Step 5: Configure Your Portfolio

1. Create a `.env` file in the root of your project (copy from `.env.example`)
2. Add your credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Restart your development server:
   ```bash
   npm run dev
   ```

## Step 6: Test the Form

1. Go to your contact page
2. Fill out and submit the form
3. Check your email inbox for the message!

## Troubleshooting

- **Form not sending?** Check the browser console for errors
- **Credentials not working?** Make sure you're using the correct IDs and keys
- **Not receiving emails?** Check your spam folder and verify your email service is connected correctly

## Security Note

- Never commit your `.env` file to version control
- The `.env` file is already in `.gitignore`
- Your Public Key is safe to use in frontend code (it's designed for client-side use)

## Alternative: Quick Setup Without .env

If you want to test quickly without environment variables, you can directly edit `src/pages/Contact.jsx` and replace:
- `YOUR_SERVICE_ID`
- `YOUR_TEMPLATE_ID`
- `YOUR_PUBLIC_KEY`

With your actual EmailJS credentials.

