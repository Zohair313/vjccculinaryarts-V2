export type Course = {
  id: string
  title: string
  kicker: string
  duration: string
  price: string
  description: string
  includes: string[]
  image: string
}

export const courses: Course[] = [
  {
    id: 'cooking-6',
    title: '6-Day Culinary Arts Programme',
    kicker: 'Cooking',
    duration: '6 sessions · hands-on',
    price: 'AED 1,350',
    description:
      'A fast-track foundation in professional cooking. You work at the bench from day one — knife skills, stocks and sauces, heat control, plating and a final service — with a KHDA-approved certificate at the end.',
    includes: ['18 recipes', 'Knife and prep drills', 'Sauces and stocks', 'Final plating service'],
    image: '/images/course-cooking-6day.jpg',
  },
  {
    id: 'junior-chef',
    title: 'Junior Chef Programme',
    kicker: 'Cooking & Baking',
    duration: '11 sessions · ages 9–15',
    price: 'AED 1,815',
    description:
      'A patient, playful programme for young cooks. Eleven guided sessions cover pasta, breads, pastry and basic knife safety, building confidence in the kitchen a dish at a time.',
    includes: ['34 recipes', 'Kitchen safety', 'Bread and pasta', 'Graduation bake'],
    image: '/images/course-junior-chef.jpg',
  },
  {
    id: 'cake-1',
    title: 'Cake Level 1',
    kicker: 'Baking',
    duration: '1 session · 4 hours',
    price: 'AED 350',
    description:
      'Turn a flat sponge into a showstopper. This single-session workshop covers levelling, crumb coat, sharp buttercream edges and a clean finish you can take home the same evening.',
    includes: ['Sponge and buttercream', 'Sharp edges', 'Piping basics', 'Take-home cake'],
    image: '/images/course-cake.jpg',
  },
  {
    id: 'baking-5',
    title: '5-Day Culinary Arts — Baking',
    kicker: 'Baking',
    duration: '5 sessions · hands-on',
    price: 'AED 1,480',
    description:
      'The baking equivalent of our fast-track cooking course. Five sessions move through laminated doughs, enriched breads, tarts and a plated dessert, with the theory behind every bake.',
    includes: ['12 recipes', 'Laminated doughs', 'Tarts and custards', 'Plated dessert'],
    image: '/images/course-baking-5day.jpg',
  },
  {
    id: 'baking-11',
    title: '11-Day Culinary Arts — Baking',
    kicker: 'Baking',
    duration: '11 sessions · diploma',
    price: 'AED 3,100',
    description:
      'Our fullest baking diploma. Eleven sessions build from fundamentals to celebration cakes, viennoiserie and chocolate work — the course most of our home bakers take twice.',
    includes: ['Full baking diploma', 'Viennoiserie', 'Chocolate work', 'Celebration cakes'],
    image: '/images/course-baking-11day.jpg',
  },
  {
    id: 'breads',
    title: 'Oven Fresh Breads',
    kicker: 'Baking',
    duration: '6 sessions · hands-on',
    price: 'AED 350',
    description:
      'Twenty iconic breads across six sessions — sourdough, focaccia, brioche, flatbreads and more. Learn to read dough by feel, then bake it in a professional deck oven.',
    includes: ['20 breads', 'Sourdough starter', 'Shaping by hand', 'Deck oven bake'],
    image: '/images/course-breads.jpg',
  },
]

export type Testimonial = {
  quote: string
  name: string
  detail: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'I arrived barely able to dice an onion. Six days later I plated a three-course menu for my family without a recipe in front of me.',
    name: 'Aisha M.',
    detail: '6-Day Culinary Arts',
  },
  {
    quote:
      'The kitchen is calm and generous. Vandana corrects your hand, not your confidence — that is a rare thing in a cooking school.',
    name: 'Daniel R.',
    detail: '12-Day Cooking Diploma',
  },
  {
    quote:
      'My daughter came home from Junior Chef and baked bread for the whole building. She has not stopped since.',
    name: 'Priya S.',
    detail: 'Junior Chef parent',
  },
  {
    quote:
      'The Cake Level 1 workshop paid for itself at my sister’s wedding. Sharp edges, clean piping, no panic.',
    name: 'Mariam K.',
    detail: 'Cake Level 1',
  },
  {
    quote:
      'I have taken bread courses in three cities. This was the first one that taught me to feel the dough instead of watching a timer.',
    name: 'Tom H.',
    detail: 'Oven Fresh Breads',
  },
  {
    quote:
      'We booked a private workshop for our team. Twelve people, one kitchen, and somehow everyone left with something they were proud of.',
    name: 'Layla A.',
    detail: 'Corporate workshop',
  },
]

export type FounderTab = {
  id: string
  label: string
  title: string
  body: string
  points: string[]
  image: string
  caption: string
}

export const founderTabs: FounderTab[] = [
  {
    id: 'founder',
    label: 'The founder',
    title: 'Vandana Jain',
    body:
      'A global culinary curator and teacher, Vandana has spent 28 years turning home cooks into confident chefs. She founded VJCC to make professional, KHDA-approved training feel personal — small benches, real ingredients, honest feedback.',
    points: [
      '28+ years in professional kitchens',
      'Founder of VJCC, Dubai',
      'Pioneered KHDA-certified culinary courses',
    ],
    image: '/images/founder.jpg',
    caption: 'Vandana Jain in the VJCC kitchen studio',
  },
  {
    id: 'awards',
    label: 'Awards',
    title: '175+ accolades',
    body:
      'Her work has been recognised across international and national platforms — for the food, for the teaching, and for the communities built around the table. The awards are nice; the students who come back are better.',
    points: [
      '175+ international and national awards',
      '5,000+ original recipes created',
      'Featured chef and TV personality',
    ],
    image: '/images/gallery-4.jpg',
    caption: 'Students at a VJCC certificate ceremony',
  },
  {
    id: 'author',
    label: 'The books',
    title: 'Six cookbooks',
    body:
      'Two of her books — Vandana’s Veggie Creations and Vandana’s Paneer Creations — won Gourmand World Cookbook Awards. Both are still used as teaching texts inside the school.',
    points: [
      '2× Gourmand World Cookbook Award winner',
      'Six published cookbooks',
      'Recipes taught in every course',
    ],
    image: '/images/course-breads.jpg',
    caption: 'Breads from the VJCC baking programme',
  },
  {
    id: 'teaching',
    label: 'The teaching',
    title: '12,000+ students',
    body:
      'Across 86 certified courses in seven international cuisines, more than 12,000 students have learned here — kids, beginners, brides-to-be and working professionals. The method is the same at every level: watch once, do it yourself, then do it again.',
    points: [
      '12,000+ students taught',
      '86+ certified courses',
      '7 international cuisines',
    ],
    image: '/images/hero-students.jpg',
    caption: 'A hands-on class at the Sheikh Zayed Road studio',
  },
]

export type Faq = {
  question: string
  answer: string
}

export const faqs: Faq[] = [
  {
    question: 'Do I need any experience to join a course?',
    answer:
      'None at all. Most students arrive as complete beginners. The first session starts with the basics — how to hold a knife, how to read a recipe — and builds from there at a pace that suits the group.',
  },
  {
    question: 'Are the courses certified?',
    answer:
      'Yes. VJCC is KHDA-approved, and every completed programme comes with a certificate you can use for further study or work in a professional kitchen.',
  },
  {
    question: 'What is included in the course fee?',
    answer:
      'Ingredients, equipment, aprons and printed recipes are all included. You take home everything you make, plus a digital recipe pack for each session.',
  },
  {
    question: 'Can I book a private or corporate workshop?',
    answer:
      'We run private sessions for birthdays, team-building days and celebrations. Tell us the group size and the kind of food you want to cook, and we will build a menu around it.',
  },
  {
    question: 'Where is the school located?',
    answer:
      'We are on the 12th floor of Latifa Towers on Sheikh Zayed Road, Dubai — a short walk from the metro, with parking in the building.',
  },
  {
    question: 'What if I miss a session?',
    answer:
      'Let us know in advance and we will place you in the next available batch for that session. Most students never need to, but life happens.',
  },
]

export type JournalSection = {
  id: string
  title: string
  paragraphs: string[]
}

export const journalSections: JournalSection[] = [
  {
    id: 'technique',
    title: 'A school built on technique',
    paragraphs: [
      'Most cooking content teaches you a recipe. We teach you the thing underneath the recipe — why a sauce breaks, how heat moves through a pan, what a dough is telling you when it pushes back.',
      'That is slower to learn and much harder to forget. Students who understand technique can cook from an empty fridge; students who memorise recipes cannot.',
    ],
  },
  {
    id: 'six-days',
    title: 'What a six-day course actually covers',
    paragraphs: [
      'The fast-track programme is not six disconnected classes. Each day builds on the last: knife work feeds into prep, prep feeds into sauces, sauces feed into the final plated service on day six.',
      'By the end you have cooked a full menu, plated it under time pressure and received honest feedback on both. That is the point where cooking stops feeling like following instructions.',
    ],
  },
  {
    id: 'khda',
    title: 'The KHDA difference',
    paragraphs: [
      'KHDA approval is not a logo on a certificate. It means the curriculum, the kitchen standards and the teaching have been reviewed against a real framework.',
      'For students, it is simpler than that: the certificate is recognised, and the training behind it is accountable.',
    ],
  },
  {
    id: 'first-course',
    title: 'How to choose your first course',
    paragraphs: [
      'If you want range, start with cooking. If you already bake and want precision, start with Cake Level 1 or the five-day baking programme.',
      'If you are booking for a child, the Junior Chef programme is the gentle entry. If you are unsure, message us — we will ask what you cook now and point you at the right bench.',
    ],
  },
]

export type FooterGroup = {
  title: string
  links: { label: string; href: string }[]
}

export const footerGroups: FooterGroup[] = [
  {
    title: 'Product',
    links: [
      { label: 'All courses', href: '#courses' },
      { label: 'Class schedule', href: '#contact' },
      { label: 'Private workshops', href: '#contact' },
      { label: 'Gift a class', href: '#contact' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About VJCC', href: '#founder' },
      { label: 'Vandana Jain', href: '#founder' },
      { label: 'Gallery', href: '#testimonials' },
      { label: 'Careers', href: '#contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Journal', href: '#journal' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Student stories', href: '#testimonials' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy policy', href: '#' },
      { label: 'Terms of service', href: '#' },
      { label: 'Refund policy', href: '#' },
      { label: 'Accessibility', href: '#' },
    ],
  },
]
