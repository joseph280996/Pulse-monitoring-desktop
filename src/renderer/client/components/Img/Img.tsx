import { ReactElement, ImgHTMLAttributes } from 'react';

interface IImg<T> extends ImgHTMLAttributes<T> {
  useBasePath: boolean;
}

type ImgPropTypes = {
  className: string;
  src: string;
  alt: string;
  useBasePath: boolean;
};

function Img({
  className,
  src,
  alt,
  useBasePath,
}: IImg<ImgPropTypes>): ReactElement {
  const basePath = useBasePath ? './assets/images' : '';
  return <img className={className} src={`${basePath}${src}`} alt={alt} />;
}

export default Img;
