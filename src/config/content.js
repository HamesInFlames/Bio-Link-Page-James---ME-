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
// QUOTES I LIKE
// ============================================
export const QUOTES = {
  title: "Quotes I live by",
  items: [
    { 
      emoji: "⚖️", 
      quote: "There's no perfect way to live your 20s. You either live 'em up and become an under-skilled 30 year old. Or you work 'em up and become an under-lived 30 year old. You just have to figure out which you'd rather be, accept the tradeoffs, and know there are no do overs.", 
      author: "Alex Hormozi" 
    },
    { 
      emoji: "🥋", 
      quote: "Because you might as well be dead. Seriously, if you always put limits on what you can do, physical or anything else, it'll spread over into the rest of your life. It'll spread into your work, into your morality, into your entire being. There are no limits. There are plateaus, but you must not stay there, you must go beyond them. If it kills you, it kills you. A man must constantly exceed his level.", 
      author: "Bruce Lee" 
    },
    { 
      emoji: "🔥", 
      quote: "Figure out what you want, ignore the opinions of others, and do so much volume that it would be unreasonable that you would be unsuccessful.", 
      author: "Alex Hormozi" 
    },
    { 
      emoji: "🔄", 
      quote: "Every lesson you refuse to learn will repeat itself until you do.", 
      author: "Unknown" 
    },
    { 
      emoji: "💪", 
      quote: "Whenever you feel negative or unhappy about anything, you say, 'Wait a minute. I'm responsible. I'm responsible for my life. I'm responsible for what happens. I can't change the past, so I'm not gonna spend a second worrying about the past. I'm gonna become so busy working on my future and my goals that I don't have time to think about the past.'", 
      author: "Brian Tracy" 
    },
    { 
      emoji: "📈", 
      quote: "Everything changed the moment I began to think big. You will be paid in direct proportion to the value you deliver according to the marketplace.", 
      author: "Brian Tracy" 
    },
    { 
      emoji: "🎯", 
      quote: "If you don't sacrifice for your dream, your dream becomes the sacrifice. Everything has a cost, and sometimes the cost of not pursuing something meaningful is higher than the cost of going after it. The tragedy for many is not that they aimed too high and fell short, but that they aimed too low and succeeded.", 
      author: "Unknown" 
    },
    { 
      emoji: "⏰", 
      quote: "People are time wasters, and the great majority of people have no goals, they have no priorities, they have no plans, they have no concern about becoming successful, and they think that you're the same. They think because their time isn't worth anything that your time isn't worth anything also.", 
      author: "Brian Tracy" 
    },
  ],
};

// ============================================
// APPLICATION SECTION
// ============================================
export const APPLICATION = {
  buttonLabel: "Apply to be my friend",

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

  // Contact info
  contactLabel: "What's your email?",
  contactPlaceholder: "your@email.com",
  consentLabel: "I'm okay with you contacting me back.",

  // Success message
  successMessage: "Application received. Friendship under review 😌",
};

// ============================================
// GOOGLE APPS SCRIPT CONFIG
// ============================================
export const FORM_CONFIG = {
  // Your Google Apps Script Web App URL
  scriptUrl: "https://script.google.com/macros/s/AKfycbwgLd2T2EwHNqwOExuc9iXcx3yu4WeVABXX0h0tDc_U5Yce9FipJjtTAxIP2EAgiifbTA/exec",
  
  // Fallback email (used if script URL not set)
  fallbackEmail: "jameskim@kimconsultant.net",
};
