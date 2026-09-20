import styles from "./Image.module.css";

const Image = ({ src, alt }: { src: string; alt: string }) => {
  return <img src={src} alt={alt} className={styles.image} />;
};

export default Image;

// export default function Image({ src, alt }: { src: string; alt: string }) {
//   const dialogRef = useRef<HTMLDialogElement>(null);

//   return (
//     <>
//       <button
//         type="button"
//         className={styles.thumbnail}
//         aria-label={`Enlarge image: ${alt}`}
//         onClick={() => dialogRef.current?.showModal()}
//       >
//         <img src={src} alt={alt} loading="lazy" />
//       </button>

//       <dialog
//         ref={dialogRef}
//         className={styles.dialog}
//         aria-label="Enlarged project image"
//       >
//         <button
//           type="button"
//           className={styles.close}
//           onClick={() => dialogRef.current?.close()}
//         >
//           Close
//         </button>

//         <img src={src} alt={alt} />
//       </dialog>
//     </>
//   );
// }
