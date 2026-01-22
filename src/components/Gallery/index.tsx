import React, { memo, useState } from "react";
import styles from "./Gallery.module.scss";

// Import gallery images
import img1 from "@assets/images/IMG_0022.jpg";
import img2 from "@assets/images/IMG_0049.jpg";
import img3 from "@assets/images/IMG_9714.jpg";
import img4 from "@assets/images/IMG_9759.jpg";
import img5 from "@assets/images/IMG_9788.jpg";
import img6 from "@assets/images/IMG_9865.jpg";
import img7 from "@assets/images/IMG_9957.jpg";

// Gallery data
const GALLERY_IMAGES = [
  { id: 1, src: img1, alt: "Gallery image 1" },
  { id: 2, src: img2, alt: "Gallery image 2" },
  { id: 3, src: img3, alt: "Gallery image 3" },
  { id: 4, src: img4, alt: "Gallery image 4" },
  { id: 5, src: img5, alt: "Gallery image 5" },
  { id: 6, src: img6, alt: "Gallery image 6" },
  { id: 7, src: img7, alt: "Gallery image 7" },
] as const;

const Gallery: React.FC = memo(() => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const handleImageLoad = (imageId: number) => {
    setLoadedImages((prev) => new Set([...prev, imageId]));
  };

  const openModal = (imageId: number) => {
    setSelectedImage(imageId);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!selectedImage) return;

      if (event.key === "Escape") {
        closeModal();
      } else if (event.key === "ArrowLeft") {
        const currentIndex = GALLERY_IMAGES.findIndex(
          (img) => img.id === selectedImage,
        );
        const prevIndex =
          currentIndex > 0 ? currentIndex - 1 : GALLERY_IMAGES.length - 1;
        setSelectedImage(GALLERY_IMAGES[prevIndex].id);
      } else if (event.key === "ArrowRight") {
        const currentIndex = GALLERY_IMAGES.findIndex(
          (img) => img.id === selectedImage,
        );
        const nextIndex =
          currentIndex < GALLERY_IMAGES.length - 1 ? currentIndex + 1 : 0;
        setSelectedImage(GALLERY_IMAGES[nextIndex].id);
      }
    };

    if (selectedImage) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [selectedImage]);

  const selectedImageData = selectedImage
    ? GALLERY_IMAGES.find((img) => img.id === selectedImage)
    : null;

  return (
    <section
      className={styles.gallery}
      id="Gallery"
      aria-labelledby="gallery-heading"
    >
      <div className="container">
        <div className={styles.content}>
          <h2 id="gallery-heading" className={styles.title}>
            Մեր պահերը
          </h2>

          <div className={styles.grid} role="grid">
            {GALLERY_IMAGES.map((image, index) => (
              <div
                key={image.id}
                className={`${styles.imageWrapper} ${styles[`item${index + 1}`]}`}
                role="gridcell"
              >
                <button
                  className={styles.imageButton}
                  onClick={() => openModal(image.id)}
                  aria-label={`View ${image.alt} in full size`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={styles.image}
                    loading="lazy"
                    decoding="async"
                    onLoad={() => handleImageLoad(image.id)}
                  />
                  {!loadedImages.has(image.id) && (
                    <div className={styles.imagePlaceholder}>
                      <div className={styles.spinner}></div>
                    </div>
                  )}
                  <div className={styles.overlay}>
                    <span className={styles.viewText}>Դիտել</span>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for full-size image viewing */}
      {selectedImage && selectedImageData && (
        <div
          className={styles.modal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          onClick={closeModal}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeButton}
              onClick={closeModal}
              aria-label="Close image modal"
            >
              ×
            </button>

            {/* Navigation arrows */}
            <button
              className={`${styles.navButton} ${styles.prevButton}`}
              onClick={() => {
                const currentIndex = GALLERY_IMAGES.findIndex(
                  (img) => img.id === selectedImage,
                );
                const prevIndex =
                  currentIndex > 0
                    ? currentIndex - 1
                    : GALLERY_IMAGES.length - 1;
                setSelectedImage(GALLERY_IMAGES[prevIndex].id);
              }}
              aria-label="Previous image"
            >
              ‹
            </button>

            <button
              className={`${styles.navButton} ${styles.nextButton}`}
              onClick={() => {
                const currentIndex = GALLERY_IMAGES.findIndex(
                  (img) => img.id === selectedImage,
                );
                const nextIndex =
                  currentIndex < GALLERY_IMAGES.length - 1
                    ? currentIndex + 1
                    : 0;
                setSelectedImage(GALLERY_IMAGES[nextIndex].id);
              }}
              aria-label="Next image"
            >
              ›
            </button>

            <img
              src={selectedImageData.src}
              alt={selectedImageData.alt}
              className={styles.modalImage}
              id="modal-title"
            />

            {/* Image counter */}
            <div className={styles.imageCounter}>
              {GALLERY_IMAGES.findIndex((img) => img.id === selectedImage) + 1}{" "}
              / {GALLERY_IMAGES.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
});

Gallery.displayName = "Gallery";

export default Gallery;
