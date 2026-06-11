import React from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({ src, alt, ...props }) => {
  return <img src={src} alt={alt} {...props} />;
};
