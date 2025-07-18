
import { 
  Heart, 
  Stethoscope, 
  Brain, 
  Baby, 
  Eye, 
  Bone, 
  Activity, 
  UserCheck, 
  Users,
  Scissors, 
  AlertTriangle,
  Droplets,
  TestTube,
  Pill,
  Zap,
  LucideIcon
} from 'lucide-react';

export const iconMap: Record<string, LucideIcon> = {
  'Heart': Heart,
  'Stethoscope': Stethoscope,
  'Brain': Brain,
  'Baby': Baby,
  'Eye': Eye,
  'Bone': Bone,
  'Activity': Activity,
  'UserCheck': UserCheck,
  'Users': Users,
  'Scissors': Scissors,
  'AlertTriangle': AlertTriangle,
  'Droplets': Droplets,
  'TestTube': TestTube,
  'Pill': Pill,
  'Zap': Zap,
};

export const getIconComponent = (iconName: string): LucideIcon => {
  return iconMap[iconName] || Stethoscope;
};
