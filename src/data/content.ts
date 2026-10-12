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
    image: '/images/practice-exercise.jpg',
    imageFallback:
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=640&q=75',
  },
  {
    icon: 'flower2',
    title: 'Meditation',
    description:
      'Develop a calm and focused mind through regular meditation and inner observation.',
    image: '/images/practice-meditation.jpg',
    imageFallback:
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=640&q=75',
  },
  {
    icon: 'search',
    title: 'Introspection',
    description:
      'Understand your thoughts, emotions and actions through self-awareness and reflection.',
    image: '/images/practice-introspection.jpg',
    imageFallback:
      'https://images.unsplash.com/photo-1499203537755-b9c5aefc5b12?auto=format&fit=crop&w=640&q=75',
  },
  {
    icon: 'leaf',
    title: 'Kayakalpa',
    description:
      'A traditional practice focused on developing awareness of the body, mind and life force.',
    image: '/images/practice-kayakalpa.jpg',
    imageFallback:
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=640&q=75',
  },
  {
    icon: 'bookOpen',
    title: 'Wisdom of Vethathiri Maharishi',
    description:
      'Explore profound teachings that help understand human life, relationships, nature and universal consciousness.',
    image: '/images/practice-wisdom.jpg',
    imageFallback:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=640&q=75',
  },
]

export const dimensions = [
  {
    key: 'BODY',
    subtitle: 'Healthy physical living',
    tone: 'green',
    gradient: 'linear-gradient(180deg, #1f5c45 0%, #2f7a5c 55%, #3d9970 100%)',
    icon: 'body',
  },
  {
    key: 'MIND',
    subtitle: 'Clarity and emotional balance',
    tone: 'blue',
    gradient: 'linear-gradient(180deg, #1d4f8c 0%, #2f6eb8 55%, #5b9bd5 100%)',
    icon: 'mind',
  },
  {
    key: 'LIFE FORCE',
    subtitle: 'Awareness of the energy within',
    tone: 'gold',
    gradient: 'linear-gradient(180deg, #b45309 0%, #e97816 50%, #f0b429 100%)',
    icon: 'force',
  },
  {
    key: 'CONSCIOUSNESS',
    subtitle: 'Understanding oneself and life',
    tone: 'purple',
    gradient: 'linear-gradient(180deg, #5b2d8b 0%, #7c4fbb 55%, #9b7ad0 100%)',
    icon: 'consciousness',
  },
  {
    key: 'HARMONY',
    subtitle: 'Living peacefully with society and nature',
    tone: 'terra',
    gradient: 'linear-gradient(180deg, #7a4a32 0%, #a06445 55%, #c79a52 100%)',
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
    image:
      'https://images.unsplash.com/photo-1448375240586-882707db889b?auto=format&fit=crop&w=800&q=75',
  },
  {
    title: 'Meditation',
    text: 'Create space for inner silence.',
    image:
      'https://images.unsplash.com/photo-1528715471579-2095530cef9a?auto=format&fit=crop&w=800&q=75',
  },
  {
    title: 'Yoga',
    text: 'Support physical and mental well-being.',
    image:
      'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=800&q=75',
  },
  {
    title: 'Community',
    text: 'Grow together through shared values.',
    image:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=75',
  },
]

export const comparison = [
  {
    title: 'Physical',
    color: '#173F35',
    image:
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=700&q=75',
    items: ['Healthy body', 'Exercise', 'Vitality', 'Discipline'],
  },
  {
    title: 'Mental',
    color: '#1d4f8c',
    image:
      'https://images.unsplash.com/photo-1499203537755-b9c5aefc5b12?auto=format&fit=crop&w=700&q=75',
    items: ['Clear mind', 'Meditation', 'Emotional balance', 'Focus'],
  },
  {
    title: 'Spiritual',
    color: '#E97816',
    image:
      'https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=700&q=75',
    items: ['Inner awareness', 'Introspection', 'Self-realisation', 'Inner peace'],
  },
]
