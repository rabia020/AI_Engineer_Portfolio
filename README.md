# Rabia Haq — AI Engineer Portfolio

A modern, open-source AI Engineer portfolio built with **Next.js, TypeScript, Tailwind CSS, Framer Motion, and Vercel**.

## 1. Requirements

Install these before opening the project:

- Node.js **20 LTS or newer**
- npm (included with Node.js)
- VS Code
- Git
- A GitHub account
- A Vercel account for deployment

Recommended VS Code extensions:

- ESLint
- Tailwind CSS IntelliSense
- Prettier - Code formatter
- GitHub Pull Requests and Issues (optional)

Check your installation:

```bash
node --version
npm --version
git --version
```

## 2. Install and run

Open this folder in VS Code, then open **Terminal → New Terminal**:

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## 3. Add your real information

Edit:

```text
data/site.ts
data/projects.ts
```

Replace placeholders for:

- GitHub URL
- LinkedIn URL
- Email
- Resume
- Live demo URLs
- Project GitHub URLs

Do not invent or leave fake URLs in the final published site.

## 4. Add your resume

Put your PDF here:

```text
public/resume.pdf
```

The Resume button already points to `/resume.pdf`.

## 5. Add project screenshots

Put real screenshots in:

```text
public/images/projects/
```

Then update the `image` field in `data/projects.ts`.

The current project cards use safe placeholder blocks so the site works before screenshots are added.

## 6. Useful commands

Development:

```bash
npm run dev
```

Production build:

```bash
npm run build
```

Run production build locally:

```bash
npm start
```

Lint:

```bash
npm run lint
```

## 7. GitHub

Create a public repository named:

```text
rabia-ai-portfolio
```

Then:

```bash
git init
git add .
git commit -m "Initial AI Engineer portfolio"
git branch -M main
git remote add origin https://github.com/rabia020/rabia-ai-portfolio.git
git push -u origin main
```

If your GitHub username or repository name is different, change the remote accordingly.

## 8. Vercel

1. Sign in at Vercel.
2. Choose **Add New → Project**.
3. Import the GitHub repository.
4. Vercel should detect Next.js automatically.
5. Leave the default build settings unless Vercel asks otherwise.
6. Click **Deploy**.
7. After deployment, update `NEXT_PUBLIC_SITE_URL` only if you later use it for additional integrations.

Every push to the connected GitHub branch can trigger a new Vercel deployment.

## 9. Project structure

```text
rabia-ai-portfolio/
├── app/
│   ├── projects/[slug]/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   └── page.tsx
├── components/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── ProjectCard.tsx
│   ├── ProjectFilter.tsx
│   ├── Providers.tsx
│   ├── Skills.tsx
│   ├── Specializations.tsx
│   ├── ThemeToggle.tsx
│   └── ThemeAwareLogo.tsx
├── data/
│   ├── projects.ts
│   └── site.ts
├── public/
│   ├── images/projects/
│   ├── resume.pdf
│   └── favicon.svg
├── LICENSE
├── README.md
└── package.json
```

## 10. Before publishing

- Add real screenshots.
- Add the real resume.
- Add real GitHub/demo/LinkedIn links.
- Review every project description against the actual implementation.
- Run `npm run build`.
- Run `npm run lint`.
- Push to GitHub.
- Deploy to Vercel.

## License

MIT.
