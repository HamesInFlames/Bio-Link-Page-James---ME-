# James — Personal Link Page

A playful, human Linktree-style page for Instagram.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open **http://localhost:5173**

---

## 📁 Files

```
src/
├── App.jsx
├── main.jsx
├── index.css
├── config/
│   └── content.js          ← ⭐ EDIT ALL CONTENT HERE
└── components/
    ├── MainPage.jsx        ← Main layout
    ├── SocialLinks.jsx     ← Icon-only social links
    ├── AboutCard.jsx       ← "A little about me" modal
    ├── InterestsSection.jsx
    ├── ApplicationModal.jsx ← Friend/Girlfriend application
    ├── FloatingHearts.jsx   ← Pink mode hearts
    └── Icons.jsx
```

---

## ✏️ Where to Edit Content

**Everything is in `src/config/content.js`**

### Intro (top of page)
```js
export const INTRO = {
  greeting: "Hey, I'm James 👋",
  subtext: "I build things, go to the gym, drink coffee, and overthink sometimes.",
  note: "This page is just for fun.",
};
```

### Social Links
```js
export const SOCIALS = [
  { id: "github", label: "GitHub", href: "https://github.com/YOUR_USERNAME", icon: "github" },
  { id: "linkedin", label: "LinkedIn", href: "https://linkedin.com/in/YOUR_USERNAME/", icon: "linkedin" },
  // ...
];
```

### About Me
```js
export const ABOUT = {
  buttonLabel: "A little about me",
  content: [
    "I'm pretty straightforward and honest.",
    "I take work seriously, but people matter more.",
    // ...
  ],
};
```

### Interests
```js
export const INTERESTS = {
  title: "Things I'm usually into",
  items: [
    { emoji: "🏋️", label: "Gym", note: "keeps me sane" },
    // ...
  ],
  footer: "If we overlap on any of these, that's already a win.",
};
```

### Application Questions
```js
export const APPLICATION = {
  // Friend types & dynamic questions
  friend: {
    types: [...],
    dynamicQuestions: {
      gym: "Leg day or skip day?",
      coffee: "Go-to coffee order?",
      // ...
    },
  },
  // Girlfriend questions
  girlfriend: {
    questions: [
      { id: "communicate", question: "How do you usually communicate when something's wrong?" },
      // ...
    ],
  },
  // Success messages
  successMessages: {
    friend: "Application received. Friendship under review 😌",
    girlfriend: "Application received 💗 No promises, but I'll read it.",
  },
};
```

---

## 📧 Email Setup

Applications are sent via email. Two options:

### Option 1: EmailJS (recommended)
1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Create a service + template
3. Update `content.js`:
```js
export const EMAIL_CONFIG = {
  serviceId: "your_service_id",
  templateId: "your_template_id", 
  publicKey: "your_public_key",
};
```

### Option 2: Mailto Fallback
If EmailJS isn't configured, clicking submit opens the user's email client with a pre-filled message.

---

## 🎨 Features

- ✅ Mobile-first
- ✅ Icon-only social links with tooltips
- ✅ Expandable "About Me" modal
- ✅ Interests section
- ✅ Friend/Girlfriend application flow
- ✅ Pink theme + floating hearts for girlfriend mode
- ✅ Dynamic questions based on friend type
- ✅ Contact consent checkbox
- ✅ Keyboard accessible
- ✅ Reduced motion support

---

## 🚢 Deploy

### Vercel
```bash
npm run build
# Push to GitHub → Import in Vercel
```

### Netlify
- Build: `npm run build`
- Publish: `dist`
