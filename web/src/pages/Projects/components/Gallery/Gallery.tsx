// import type { ReactNode } from "react";
// import styles from "./Gallery.module.css";

// const Gallery = ({ children }: { children: ReactNode }) => {
//   return <div className={styles.gallery}>{children}</div>;
// };

// export default Gallery;

// const Image = () => {

// }

import styles from "./Gallery.module.css";
import Image from "../Image/Image";

const Gallery = ({ images }: { images: { src: string; alt: string }[] }) => {
  return (
    <div className={styles.gallery}>
      {images.map((img, i) => (
        <Image src={img.src} alt={img.alt} key={i} />
      ))}
    </div>
  );
};

export default Gallery;
