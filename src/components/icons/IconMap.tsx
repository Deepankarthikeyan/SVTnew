import {
  Activity,
  BookOpen,
  Brain,
  Compass,
  Eye,
  Feather,
  Flower2,
  HandHeart,
  Heart,
  Leaf,
  MessageCircle,
  Scale,
  Search,
  Shield,
  Sparkles,
  Sun,
  Target,
  Trees,
  User,
  Users,
  type LucideIcon,
} from 'lucide-react'

const map: Record<string, LucideIcon> = {
  activity: Activity,
  flower2: Flower2,
  search: Search,
  leaf: Leaf,
  bookOpen: BookOpen,
  brain: Brain,
  target: Target,
  heart: Heart,
  trees: Trees,
  sparkles: Sparkles,
  handHeart: HandHeart,
  users: Users,
  scale: Scale,
  eye: Eye,
  feather: Feather,
  sun: Sun,
  user: User,
  compass: Compass,
  messageCircle: MessageCircle,
  shield: Shield,
}

export function DynamicIcon({ name, size = 20 }: { name: string; size?: number }) {
  const Icon = map[name] ?? Sparkles
  return <Icon size={size} strokeWidth={1.6} aria-hidden="true" />
}
