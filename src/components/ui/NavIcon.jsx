import {
  Briefcase,
  FileText,
  FolderKanban,
  GraduationCap,
  Home,
  Layers,
  Mail,
  Monitor,
  PenTool,
  Server,
  Smartphone,
  User,
} from 'lucide-react';

const ICON_MAP = {
  Home,
  User,
  FolderKanban,
  Briefcase,
  FileText,
  Mail,
  Layers,
  Monitor,
  Server,
  Smartphone,
  PenTool,
  GraduationCap,
};

export function NavIcon({ name, size = 18, className = '' }) {
  const IconComponent = ICON_MAP[name] || FolderKanban;
  return <IconComponent size={size} className={className} aria-hidden="true" />;
}
