import { ReactNode, RefAttributes } from 'react';
import { LabelProps } from '@radix-ui/react-label';
import { TabsProps, TabsListProps, TabsTriggerProps, TabsContentProps } from '@radix-ui/react-tabs';
import { AvatarProps, AvatarImageProps, AvatarFallbackProps } from '@radix-ui/react-avatar';

// Fix for Radix UI components that don't have className in their types
declare module '@radix-ui/react-label' {
  interface LabelProps {
    className?: string;
  }
}

declare module '@radix-ui/react-tabs' {
  interface TabsProps {
    className?: string;
    onValueChange?: (value: string) => void;
  }
  
  interface TabsListProps {
    className?: string;
  }
  
  interface TabsTriggerProps {
    className?: string;
  }
  
  interface TabsContentProps {
    className?: string;
  }
}

declare module '@radix-ui/react-avatar' {
  interface AvatarProps {
    className?: string;
  }
  
  interface AvatarImageProps {
    className?: string;
  }
  
  interface AvatarFallbackProps {
    className?: string;
  }
}

// Fix for Radix UI Slot component
declare module '@radix-ui/react-slot' {
  interface SlotProps {
    className?: string;
  }
}

// Fix for Lucide React icons
declare module 'lucide-react' {
  interface LucideProps {
    className?: string;
  }
}

// Fix for React Icons
declare module 'react-icons/fi' {
  export interface IconBaseProps {
    className?: string;
    style?: React.CSSProperties;
  }
}

// Fix for Framer Motion components
declare module 'framer-motion' {
  export interface MotionProps {
    className?: string;
    style?: React.CSSProperties;
  }
  
  export interface HTMLMotionProps<T extends HTMLElement> extends React.HTMLAttributes<T> {
    className?: string;
    style?: React.CSSProperties;
  }
}

// Fix for Next.js Image component
declare module 'next/image' {
  interface ImageProps {
    style?: React.CSSProperties;
    className?: string;
  }
}

// Fix for JSX elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
} 