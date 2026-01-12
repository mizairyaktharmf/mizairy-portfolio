# Email Setup Instructions

The Contact form is configured to send emails to `mizairyakthar@gmail.com` and forward form data to WhatsApp `+971562393573`.

## Setup Steps

### Option 1: Web3Forms (Recommended - Free)

1. Go to [Web3Forms](https://web3forms.com/)
2. Sign up for a free account
3. Get your Access Key
4. Replace `YOUR_WEB3FORMS_ACCESS_KEY` in `components/sections/Contact.tsx` at line 73 with your actual access key

```tsx
access_key: "YOUR_ACTUAL_ACCESS_KEY_HERE",
```

### Option 2: EmailJS

1. Go to [EmailJS](https://www.emailjs.com/)
2. Create a free account
3. Set up an email service (Gmail, Outlook, etc.)
4. Create an email template
5. Get your Service ID, Template ID, and Public Key
6. Update the Contact.tsx component to use EmailJS instead

### Option 3: Custom Backend API

Create your own API endpoint to handle email sending using:
- Nodemailer
- SendGrid
- Mailgun
- AWS SES

## How It Works

1. User fills out the contact form
2. Form validation checks all fields
3. On submit, the form sends data to:
   - **Email**: Via Web3Forms API to mizairyakthar@gmail.com
   - **WhatsApp**: Opens WhatsApp Web/App with pre-filled message to +971562393573

4. Success message is displayed
5. After 2 seconds, user is redirected to WhatsApp with the form data

## Form Fields

- Name (required)
- Email (required, validated)
- Subject (required)
- Message (required, min 10 characters)

## Features

- Client-side validation
- Loading state during submission
- Success/error messages
- Automatic WhatsApp integration
- Cyberpunk themed UI
- Responsive design
- Form reset after successful submission

## Environment Variables (Optional)

For better security, you can store the API key in environment variables:

1. Create `.env.local` file:
```
NEXT_PUBLIC_WEB3FORMS_KEY=your_access_key_here
```

2. Update Contact.tsx:
```tsx
access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
```

3. Add `.env.local` to `.gitignore` (already included in Next.js projects)
