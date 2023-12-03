"use client";
import Image from "next/image";

const nextImageLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};
// https://nextjs.org/docs/pages/api-reference/components/image#optional-props

const ContentfulImage = (props) => {
  return <Image alt={props.alt} loader={nextImageLoader} {...props} />;
};

export default ContentfulImage;
