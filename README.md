# Modern Portfolio Website

A modern, fully responsive portfolio website built with **Next.js 15**, **Tailwind CSS**, **Framer Motion**, and **TypeScript**. Features dark mode, smooth animations, and a professional design perfect for showcasing your work as a Full-Stack Developer.

![Portfolio Preview](https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop)

## ✨ Features

- 🎨 **Modern Design** - Clean, professional UI with blue-tech color scheme
- 🌗 **Dark Mode** - Toggle between light and dark themes
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- ⚡ **Fast Performance** - Built with Next.js 15 for optimal speed
- 🎭 **Smooth Animations** - Beautiful transitions with Framer Motion
- 📧 **Contact Form** - Functional contact form with email integration
- 🎓 **Multiple Pages** - Home, About, Projects, Certificates, Resume, Achievements, Contact
- 🔍 **SEO Optimized** - Meta tags and semantic HTML for better search rankings
- 🎯 **TypeScript** - Type-safe code for better development experience

## 📄 Pages

1. **Home (/)** - Hero section, about summary, and animated tech stack
2. **About (/about)** - Detailed bio, education timeline, and achievements
3. **Projects (/projects)** - Showcase of your projects with live demos
4. **Certificates (/certificates)** - Professional certifications and courses
5. **Resume (/resume)** - CV viewer with download functionality
6. **Achievements (/achievements)** - Career milestones and recognitions
7. **Contact (/contact)** - Contact form with email integration

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. **Clone or download this repository**

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```env
# SMTP Configuration for Contact Form
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your.email@gmail.com
SMTP_PASS=your-app-password
CONTACT_EMAIL=your.email@example.com
```

> **Note:** For Gmail, you need to generate an [App Password](https://support.google.com/accounts/answer/185833?hl=en)

4. **Run the development server**

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

## 🎨 Customization

### Personal Information

Update the following files with your information:

- `app/page.tsx` - Hero section (name, title, description)
- `app/about/page.tsx` - Bio, education, achievements
- `app/projects/page.tsx` - Your projects
- `app/certificates/page.tsx` - Your certificates
- `app/resume/page.tsx` - Your work experience and skills
- `app/achievements/page.tsx` - Your achievements
- `components/Footer.tsx` - Social media links
- `app/layout.tsx` - Site metadata (title, description)

### Profile Photo

Replace the profile image URL in `app/page.tsx` (line 57):

```tsx
src="YOUR_IMAGE_URL_HERE"
```

### Resume PDF

1. Create a `public/resume` folder
2. Add your resume PDF as `your-resume.pdf`
3. Update the path in `app/resume/page.tsx`

### Certificate PDFs

1. Create a `public/certificates` folder
2. Add your certificate PDFs
3. Update the `pdfUrl` paths in `app/certificates/page.tsx`

### Colors & Theme

Edit `tailwind.config.ts` to change the color scheme:

```ts
colors: {
  primary: {
    DEFAULT: '#0A66C2',  // Your brand color
    dark: '#004182',
    light: '#378fe9',
  },
}
```

## 📧 Contact Form Setup

The contact form uses **Nodemailer** to send emails. Configure your SMTP settings:

### Gmail Setup

1. Enable 2-Factor Authentication in your Google Account
2. Generate an [App Password](https://support.google.com/accounts/answer/185833?hl=en)
3. Use the app password in your `.env.local` file

### Alternative Email Services

You can use other SMTP providers:
- **SendGrid**
- **Mailgun**
- **AWS SES**
- **Postmark**

Update the SMTP configuration in `app/api/contact/route.ts`

## 🏗️ Project Structure

```
portfolio/
├── app/
│   ├── about/          # About page
│   ├── achievements/   # Achievements page
│   ├── api/           # API routes (contact form)
│   ├── certificates/  # Certificates page
│   ├── contact/       # Contact page
│   ├── projects/      # Projects page
│   ├── resume/        # Resume page
│   ├── globals.css    # Global styles
│   ├── layout.tsx     # Root layout
│   └── page.tsx       # Home page
├── components/
│   ├── ui/            # Reusable UI components
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   └── ThemeProvider.tsx
├── lib/
│   └── utils.ts       # Utility functions
├── public/            # Static assets
│   ├── certificates/  # Certificate PDFs
│   └── resume/        # Resume PDF
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 🚢 Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Add environment variables in Settings → Environment Variables
6. Deploy!

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**

```bash
npm install -g vercel
```

2. **Login to Vercel**

```bash
vercel login
```

3. **Deploy**

```bash
vercel
```

4. **Add environment variables**

```bash
vercel env add SMTP_HOST
vercel env add SMTP_PORT
vercel env add SMTP_USER
vercel env add SMTP_PASS
vercel env add CONTACT_EMAIL
```

5. **Redeploy with environment variables**

```bash
vercel --prod
```

### Environment Variables on Vercel

In your Vercel project settings:

1. Go to **Settings** → **Environment Variables**
2. Add all variables from `.env.local`
3. Make sure to add them for **Production**, **Preview**, and **Development**

## 🛠️ Built With

- [Next.js 15](https://nextjs.org/) - React framework
- [React 19](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Lucide React](https://lucide.dev/) - Icons
- [Nodemailer](https://nodemailer.com/) - Email sending
- [React Hot Toast](https://react-hot-toast.com/) - Toast notifications

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Support

If you have any questions or need help with customization, feel free to open an issue or reach out!

## 🎉 Credits

Created with ❤️ for developers building their personal brand.

---

**Happy Coding! 🚀**
