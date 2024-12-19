import React from 'react';

interface TabButtonProps {
  children: React.ReactNode;
  isSelected: boolean;
}

const TabButton: React.FC<TabButtonProps> = ({ children, isSelected, ...props }) => {

  return (
    <li>
      <button className={isSelected ? 'active' : undefined} {...props}>{children}</button>
    </li>
  );
}

export default TabButton;
