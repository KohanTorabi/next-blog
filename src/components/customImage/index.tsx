import React, { SyntheticEvent } from "react";

interface CustomImageProps
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  src: string;
  fallbackSrc?: string;
}

const CustomImage: React.FC<CustomImageProps> = (props) => {
  const { src, fallbackSrc, alt, ...otherProps } = props || {};

  const handleImageError = (e: SyntheticEvent<HTMLImageElement>) => {
    if (fallbackSrc) e.currentTarget.src = fallbackSrc;
  };

  return <img {...otherProps} src={src} onError={handleImageError} alt={alt} />;
};

export default CustomImage;
