export type NavLink = { label: string; href: string; sectionId: string }

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

/** Full landing — first five + remaining five section blocks. */
export const landingSectionIds = [
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

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home', sectionId: 'home' },
  { label: 'About', href: '#about', sectionId: 'about' },
  { label: 'Practices', href: '#journey', sectionId: 'journey' },
  { label: 'Life at Village', href: '#village', sectionId: 'village' },
  { label: 'Benefits', href: '#peace', sectionId: 'peace' },
  { label: 'Purpose', href: '#purpose', sectionId: 'purpose' },
  { label: 'Contact', href: '#contact', sectionId: 'contact' },
]

export const landingNavLinks = navLinks

export const journeyPractices = [
  {
    icon: 'activity',
    title: 'Simplified Physical Exercises',
    description:
      'Improve physical health, flexibility and overall well-being through simple and practical exercises.',
    image: '/images/exact/practice-1.jpg',
  },
  {
    icon: 'flower2',
    title: 'Meditation',
    description:
      'Develop a calm and focused mind through regular meditation and inner observation.',
    image: '/images/exact/practice-2.jpg',
  },
  {
    icon: 'search',
    title: 'Introspection',
    description:
      'Understand your thoughts, emotions and actions through self-awareness and reflection.',
    image: '/images/exact/practice-3.jpg',
  },
  {
    icon: 'leaf',
    title: 'Kayakalpa',
    description:
      'A traditional practice focused on developing awareness of the body, mind and life force.',
    image: '/images/exact/practice-4.jpg',
  },
  {
    icon: 'bookOpen',
    title: 'Wisdom of Vethathiri Maharishi',
    description:
      'Explore profound teachings that help understand human life, relationships, nature and universal consciousness.',
    image: '/images/exact/practice-5.jpg',
  },
]

export const dimensions = [
  {
    key: 'BODY',
    subtitle: 'Healthy physical living',
    gradient: 'linear-gradient(180deg, rgba(26, 92, 66, 0.98) 0%, rgba(45, 122, 88, 0.82) 38%, rgba(45, 122, 88, 0.2) 55%, transparent 68%)',
    icon: 'body',
    image: '/images/practice-exercise.jpg',
  },
  {
    key: 'MIND',
    subtitle: 'Clarity and emotional balance',
    gradient: 'linear-gradient(180deg, rgba(26, 74, 122, 0.98) 0%, rgba(61, 126, 200, 0.78) 38%, rgba(61, 126, 200, 0.18) 55%, transparent 68%)',
    icon: 'mind',
    image: '/images/ref/practice-3.jpg',
  },
  {
    key: 'LIFE FORCE',
    subtitle: 'Awareness of the energy within',
    gradient: 'linear-gradient(180deg, rgba(196, 95, 18, 0.96) 0%, rgba(240, 180, 41, 0.75) 38%, rgba(240, 180, 41, 0.15) 55%, transparent 68%)',
    icon: 'force',
    image: '/images/hq/hero-scene-alt.jpg',
  },
  {
    key: 'CONSCIOUSNESS',
    subtitle: 'Understanding oneself and life',
    gradient: 'linear-gradient(180deg, rgba(90, 45, 138, 0.96) 0%, rgba(139, 92, 246, 0.72) 38%, rgba(139, 92, 246, 0.12) 55%, transparent 68%)',
    icon: 'consciousness',
    image: '/images/practice-introspection.jpg',
  },
  {
    key: 'HARMONY',
    subtitle: 'Living peacefully with society and nature',
    gradient: 'linear-gradient(180deg, rgba(168, 78, 46, 0.96) 0%, rgba(199, 154, 82, 0.72) 38%, rgba(199, 154, 82, 0.12) 55%, transparent 68%)',
    icon: 'harmony',
    image: '/images/ref/village-1.jpg',
  },
]

export const wayOfLife = [
  { title: 'Consciousness', sub: 'in our thoughts', icon: 'brain' },
  { title: 'Discipline', sub: 'in our actions', icon: 'target' },
  { title: 'Compassion', sub: 'in our relationships', icon: 'heart' },
  { title: 'Harmony', sub: 'with nature', icon: 'trees' },
  { title: 'Peace', sub: 'within ourselves', icon: 'sparkles' },
  { title: 'Responsibility', sub: 'towards society', icon: 'handHeart' },
  { title: 'Universal Brotherhood', sub: 'towards all', icon: 'users' },
]

export const discoveries = [
  {
    num: '01',
    title: 'Mental Clarity',
    text: 'A calmer and more focused mind.',
    icon: 'brain',
    accent: '#173f35',
  },
  {
    num: '02',
    title: 'Emotional Balance',
    text: 'Greater understanding and control of emotions.',
    icon: 'heart',
    accent: '#c45f12',
  },
  {
    num: '03',
    title: 'Self-Awareness',
    text: 'A deeper understanding of oneself.',
    icon: 'user',
    accent: '#1a5c42',
  },
  {
    num: '04',
    title: 'Inner Peace',
    text: 'A peaceful state beyond everyday distractions.',
    icon: 'flower2',
    accent: '#6b3fa0',
  },
  {
    num: '05',
    title: 'Harmony',
    text: 'A balanced relationship with people, society and nature.',
    icon: 'leaf',
    accent: '#2d7a58',
  },
  {
    num: '06',
    title: 'Wisdom',
    text: 'A deeper understanding of life and its purpose.',
    icon: 'sun',
    accent: '#e97816',
  },
]

export const ctaPillars = [
  { label: 'Live consciously.', icon: 'sun' },
  { label: 'Live compassionately.', icon: 'heart' },
  { label: 'Live harmoniously.', icon: 'users' },
  { label: 'Live with awareness.', icon: 'flower2' },
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
  { label: 'Love', icon: 'heart', color: '#c73e1d' },
  { label: 'Compassion', icon: 'leaf', color: '#2d7a58' },
  { label: 'Understanding', icon: 'messageCircle', color: '#e97816' },
  { label: 'Harmony', icon: 'users', color: '#c79a52' },
  { label: 'Responsibility', icon: 'shield', color: '#173f35' },
]

export const villageTiles = [
  {
    title: 'Nature',
    text: 'Connect with the natural environment.',
    image: '/images/exact/village-1.jpg',
  },
  {
    title: 'Meditation',
    text: 'Create space for inner silence.',
    image: '/images/exact/village-2.jpg',
  },
  {
    title: 'Yoga',
    text: 'Support physical and mental well-being.',
    image: '/images/exact/village-3.jpg',
  },
  {
    title: 'Community',
    text: 'Grow together through shared values.',
    image: '/images/exact/village-4.jpg',
  },
]

export const comparison = [
  {
    title: 'Physical',
    color: '#173F35',
    wash: 'linear-gradient(180deg, #e8f3ec 0%, #f7fbf8 100%)',
    image: '/images/ref/balance-1.jpg',
    items: ['Healthy body', 'Exercise', 'Vitality', 'Discipline'],
  },
  {
    title: 'Mental',
    color: '#1d4f8c',
    wash: 'linear-gradient(180deg, #e6eef8 0%, #f5f8fc 100%)',
    image: '/images/ref/balance-2.jpg',
    items: ['Clear mind', 'Meditation', 'Emotional balance', 'Focus'],
  },
  {
    title: 'Spiritual',
    color: '#8b5e34',
    wash: 'linear-gradient(180deg, #f6ebe0 0%, #fdf8f2 100%)',
    image: '/images/ref/balance-3.jpg',
    items: ['Inner awareness', 'Introspection', 'Self-realisation', 'Inner peace'],
  },
]
