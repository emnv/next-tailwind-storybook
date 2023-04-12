import React from 'react';
import './button.css';

interface ButtonProps {
  /**
   * What varian will the button be
   */
  variant?: string;
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'h-8 px-4 text-sm' | 'h-10 px-5' | 'h-12 px-6 text-lg';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'h-10 px-5',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'bg-blue-500 text-blue-100 hover:bg-blue-700' : 'bg-gray-700 text-gray-100 hover:bg-gray-800';
  return (
    <button
      type="button"
      className={['transition-colors duration-150 rounded-lg focus:shadow-outline', `${size}`, mode].join(' ')}
      {...props}
    >
      {label}
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
        }
      `}</style>
    </button>
  );
};
