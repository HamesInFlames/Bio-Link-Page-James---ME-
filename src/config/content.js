/**
 * PAGE CONTENT
 * ============
 * Edit everything here. Don't touch the components.
 */

// ============================================
// INTRO SECTION
// ============================================
export const INTRO = {
  greeting: "Hey, I'm James 👋",
  subtext: "I build things, go to the gym, drink coffee.",
  note: "This page is all about me.",
};

// ============================================
// SOCIAL LINKS (icon-only, with tooltips)
// ============================================
export const SOCIALS = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/HamesInFlames",
    icon: "github",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/seonghyunkim",
    icon: "linkedin",
  },
  {
    id: "website",
    label: "Website",
    href: "https://www.kimconsultant.net",
    icon: "globe",
  },
  {
    id: "spotify",
    label: "My Playlist",
    href: "https://open.spotify.com/playlist/3fjuZ4ww6UGZ3x7jUj4c3q",
    icon: "spotify",
  },
  {
    id: "email",
    label: "Email",
    href: "mailto:jameskim@kimconsultant.net",
    icon: "mail",
  },
  {
    id: "phone",
    label: "Call / Text",
    href: "tel:+12898947288",
    icon: "phone",
  },
];

// ============================================
// ABOUT ME
// ============================================
export const ABOUT = {
  buttonLabel: "A little about me",
  title: "A little about me",
  content: [
    { emoji: "😤", text: "I'm VERY straightforward and honest." },
    { emoji: "💼", text: "I take work seriously, maybe too seriously." },
    { emoji: "🙅", text: "I dont like to sugar coat things, I'm not a people pleaser." },
    { emoji: "🧩", text: "I am almost done figuring things out." },
  ],
};

// ============================================
// CURRENTLY SECTION
// ============================================
export const CURRENTLY = {
  title: "What I'm up to lately",
  items: [
    { emoji: "🔨", text: "Building websites for small businesses" },
    { emoji: "📚", text: "Reading more books this year" },
    { emoji: "🎯", text: "Trying to be more consistent with my goals, and be less lazy" },
  ],
};

// ============================================
// INTERESTS
// ============================================
export const INTERESTS = {
  title: "Things I'm usually into",
  items: [
    { emoji: "🏋️", label: "Gym", note: "keeps me sane, looking good, and strong" },
    { emoji: "💻", label: "Building things", note: "websites, ideas, random projects, and my own business" },
    { emoji: "💰", label: "Money", note: "I'm not crazy rich, but I'm getting there" },
    { emoji: "🍔", label: "Food", note: "I'm a foodie, I love to cook and eat, or try new restaurants" },
    { emoji: "☕", label: "Cafés", note: "always down to try a new one, since I work at a cafe" },
    { emoji: "🎮", label: "Gaming", note: "when I have time" },
    { emoji: "🎧", label: "Music", note: "depends on the mood" },
    { emoji: "🧠", label: "Learning", note: "books, rabbit holes, experiments" },
  ],
  footer: "Give me a topic and I can talk about it for hours.",
};

// ============================================
// RANDOM FACTS
// ============================================
export const RANDOM_FACTS = {
  title: "Random things about me",
  items: [
    { emoji: "🦉", text: "I'm a Night Owl (most nights)" },
    { emoji: "🤷", text: "I underthink sometimes" },
    { emoji: "💬", text: "I like deep conversations more than small talk" },
    { emoji: "☕", text: "I'll probably remember your coffee order" },
    { emoji: "🤓", text: "I'm a bit of a nerd" },
  ],
};

// ============================================
// APPLICATION SECTION
// ============================================
export const APPLICATION = {
  buttonLabel: "Apply to be my friend",
  
  // Step 1: Type selection
  typeQuestion: "What are you applying for?",
  types: [
    { id: "friend", label: "Friend" },
    { id: "girlfriend", label: "Girlfriend" },
  ],

  // Girlfriend theme switch message
  girlfriendModeMessage: "Okay… switching the mode 💗",
  girlfriendIntro: "This is mostly a joke… but also kind of not.",

  // Friend application
  friend: {
    typeQuestion: "What kind of friend are you?",
    types: [
      { id: "gym", label: "Gym buddy" },
      { id: "coffee", label: "Coffee / café explorer" },
      { id: "builder", label: "Builder / creative" },
      { id: "gaming", label: "Gaming buddy" },
      { id: "chill", label: "Chill hangouts" },
      { id: "deep", label: "Deep talks" },
      { id: "spontaneous", label: "Spontaneous plans" },
      { id: "all", label: "All of the above" },
    ],
    // Dynamic questions based on friend type
    dynamicQuestions: {
      gym: "Leg day or skip day?",
      coffee: "Go-to coffee order?",
      builder: "What are you building lately?",
      gaming: "What games are you playing right now?",
      chill: "Ideal way to spend a lazy Sunday?",
      deep: "What topic could you talk about forever?",
      spontaneous: "Last thing you did on impulse?",
      all: "What's something random you're excited about right now?",
    },
    // Additional questions for friend (to make 8 total)
    questions: [
      "What's your ideal hangout?",
      "How do you usually keep in touch with friends?",
      "Are you usually early, on time, or 'on the way'?",
      "What's something you're proud of lately?",
      "Describe yourself in 3 words",
    ],
  },

  // Girlfriend application (8 questions)
  girlfriend: {
    questions: [
      {
        id: "communicate",
        question: "How do you usually communicate when something's wrong?",
        type: "textarea",
      },
      {
        id: "kindness",
        question: "How do you show kindness?",
        type: "textarea",
      },
      {
        id: "maturity",
        question: "What does emotional maturity mean to you?",
        type: "textarea",
      },
      {
        id: "quality_time",
        question: "What does quality time look like to you?",
        type: "textarea",
      },
      {
        id: "love_language",
        question: "What's your love language?",
        type: "text",
      },
      {
        id: "dealbreaker",
        question: "What's a dealbreaker for you in a relationship?",
        type: "textarea",
      },
      {
        id: "three_words",
        question: "Describe yourself in 3 words",
        type: "text",
      },
      {
        id: "hangry",
        question: "How hangry do you get on a scale from 1–10?",
        type: "text",
        note: "just joking 😄",
      },
    ],
  },

  // Contact info
  contactLabel: "What's your email?",
  contactPlaceholder: "your@email.com",
  consentLabel: "I'm okay with you contacting me back.",

  // Success messages
  successMessages: {
    friend: "Application received. Friendship under review 😌",
    girlfriend: "Application received 💗 No promises, but I'll read it.",
  },
};

// ============================================
// GOOGLE APPS SCRIPT CONFIG
// ============================================
export const FORM_CONFIG = {
  // Your Google Apps Script Web App URL
  scriptUrl: "https://script.google.com/macros/s/AKfycbysOPnG053ggpsdygRv8vuuNVAzGGCS9geKc9UGAmYt9_HGMnGsMEIz--mPAKTVYpEHtQ/exec",
  
  // Fallback email (used if script URL not set)
  fallbackEmail: "xoxoksh05@gmail.com",
};
