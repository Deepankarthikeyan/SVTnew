export const sectionIds = [
  'home',
  'about',
  'journey',
  'dimensions',
  'lifestyle',
  'peace',
  'purpose',
  'brotherhood',
  'village',
  'balance',
  'contact',
] as const

export const navLinks = [
  { label: 'Home', href: '#home', sectionId: 'home' },
  { label: 'About', href: '#about', sectionId: 'about' },
  { label: 'Practices', href: '#journey', sectionId: 'journey' },
  { label: 'Life at Village', href: '#village', sectionId: 'village' },
  { label: 'Benefits', href: '#peace', sectionId: 'peace' },
  { label: 'Purpose', href: '#purpose', sectionId: 'purpose' },
  { label: 'Contact', href: '#contact', sectionId: 'contact' },
]

export const journeyPractices = [
  {
    icon: 'activity',
    title: 'Simplified Physical Exercises',
    description:
      'Improve physical health, flexibility and overall well-being through simple and practical exercises.',
    image: '/images/ref/practice-1.jpg',
  },
  {
    icon: 'flower2',
    title: 'Meditation',
    description:
      'Develop a calm and focused mind through regular meditation and inner observation.',
    image: '/images/ref/practice-2.jpg',
  },
  {
    icon: 'search',
    title: 'Introspection',
    description:
      'Understand your thoughts, emotions and actions through self-awareness and reflection.',
    image: '/images/ref/practice-3.jpg',
  },
  {
    icon: 'leaf',
    title: 'Kayakalpa',
    description:
      'A traditional practice focused on developing awareness of the body, mind and life force.',
    image: '/images/ref/practice-4.jpg',
  },
  {
    icon: 'bookOpen',
    title: 'Wisdom of Vethathiri Maharishi',
    description:
      'Explore profound teachings that help understand human life, relationships, nature and universal consciousness.',
    image: '/images/ref/practice-5.jpg',
  },
]

export const dimensions = [
  {
    key: 'BODY',
    subtitle: 'Healthy physical living',
    gradient: 'linear-gradient(180deg, #1a5c42 0%, #2d7a58 100%)',
    icon: 'body',
  },
  {
    key: 'MIND',
    subtitle: 'Clarity and emotional balance',
    gradient: 'linear-gradient(180deg, #1a4a7a 0%, #3d7ec8 100%)',
    icon: 'mind',
  },
  {
    key: 'LIFE FORCE',
    subtitle: 'Awareness of the energy within',
    gradient: 'linear-gradient(180deg, #c45f12 0%, #f0b429 100%)',
    icon: 'force',
  },
  {
    key: 'CONSCIOUSNESS',
    subtitle: 'Understanding oneself and life',
    gradient: 'linear-gradient(180deg, #5a2d8a 0%, #8b5cf6 100%)',
    icon: 'consciousness',
  },
  {
    key: 'HARMONY',
    subtitle: 'Living peacefully with society and nature',
    gradient: 'linear-gradient(180deg, #7a4530 0%, #c79a52 100%)',
    icon: 'harmony',
  },
]

export const wayOfLife = [
  { label: 'Consciousness in our thoughts', icon: 'brain' },
  { label: 'Discipline in our actions', icon: 'target' },
  { label: 'Compassion in our relationships', icon: 'heart' },
  { label: 'Harmony with nature', icon: 'trees' },
  { label: 'Peace within ourselves', icon: 'sparkles' },
  { label: 'Responsibility towards society', icon: 'handHeart' },
  { label: 'Universal Brotherhood towards all', icon: 'users' },
]

export const discoveries = [
  { num: '01', title: 'Mental Clarity', text: 'A calmer and more focused mind.', icon: 'brain' },
  { num: '02', title: 'Emotional Balance', text: 'Greater understanding and control of emotions.', icon: 'scale' },
  { num: '03', title: 'Self-Awareness', text: 'A deeper understanding of oneself.', icon: 'eye' },
  { num: '04', title: 'Inner Peace', text: 'A peaceful state beyond everyday distractions.', icon: 'feather' },
  { num: '05', title: 'Harmony', text: 'A balanced relationship with people, society and nature.', icon: 'leaf' },
  { num: '06', title: 'Wisdom', text: 'A deeper understanding of life and its purpose.', icon: 'bookOpen' },
]

export const ctaPillars = [
  { label: 'Live consciously.', icon: 'sun' },
  { label: 'Live compassionately.', icon: 'heart' },
  { label: 'Live harmoniously.', icon: 'leaf' },
  { label: 'Live with awareness.', icon: 'eye' },
  { label: 'Live responsibly.', icon: 'handHeart' },
]

export const purposeItems = [
  {
    title: 'Know Yourself',
    text: 'Understand your thoughts, emotions, body and inner nature.',
    icon: 'user',
  },
  {
    title: 'Understand Life',
    text: 'Explore the purpose and deeper meaning of human life.',
    icon: 'compass',
  },
  {
    title: 'Live in Harmony',
    text: 'Build harmonious relationships with people and nature.',
    icon: 'leaf',
  },
  {
    title: 'Experience Inner Peace',
    text: 'Discover the peace and wisdom that already exist within.',
    icon: 'feather',
  },
]

export const brotherhoodValues = [
  { label: 'Love', icon: 'heart' },
  { label: 'Compassion', icon: 'handHeart' },
  { label: 'Understanding', icon: 'messageCircle' },
  { label: 'Harmony', icon: 'leaf' },
  { label: 'Responsibility', icon: 'shield' },
]

export const villageTiles = [
  {
    title: 'Nature',
    text: 'Connect with the natural environment.',
    image: '/images/ref/village-1.jpg',
  },
  {
    title: 'Meditation',
    text: 'Create space for inner silence.',
    image: '/images/ref/village-2.jpg',
  },
  {
    title: 'Yoga',
    text: 'Support physical and mental well-being.',
    image: '/images/ref/village-1.jpg',
  },
  {
    title: 'Community',
    text: 'Grow together through shared values.',
    image: '/images/ref/village-2.jpg',
  },
]

export const comparison = [
  {
    title: 'Physical',
    color: '#173F35',
    image: '/images/ref/balance-1.jpg',
    items: ['Healthy body', 'Exercise', 'Vitality', 'Discipline'],
  },
  {
    title: 'Mental',
    color: '#1d4f8c',
    image: '/images/ref/balance-2.jpg',
    items: ['Clear mind', 'Meditation', 'Emotional balance', 'Focus'],
  },
  {
    title: 'Spiritual',
    color: '#E97816',
    image: '/images/ref/balance-3.jpg',
    items: ['Inner awareness', 'Introspection', 'Self-realisation', 'Inner peace'],
  },
]
