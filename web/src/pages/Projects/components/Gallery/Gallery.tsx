import styles from "./Gallery.module.css";

const Image = ({ src, alt }: { src: string; alt: string }) => {
  return <img src={src} alt={alt} className={styles.image} />;
};

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
