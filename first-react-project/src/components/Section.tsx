import { ReactNode, HTMLProps } from 'react';

// Define the interface for the props
interface SectionProps extends HTMLProps<HTMLElement> {
  title: string;
  children: ReactNode;
}

export default function Section({ title, children, ...props }: SectionProps) {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
