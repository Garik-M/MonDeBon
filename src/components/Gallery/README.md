# Gallery Component

A responsive image gallery component with modal viewing, keyboard navigation, and smooth CSS animations.

## Features

- **Responsive Masonry Layout**: Adapts to different screen sizes with optimized grid positioning
- **Modal Image Viewer**: Click any image to view in full size
- **Keyboard Navigation**:
  - `Escape` - Close modal
  - `Arrow Left` - Previous image
  - `Arrow Right` - Next image
- **Touch/Click Navigation**: Navigation arrows in modal
- **Loading States**: Smooth loading placeholders for images
- **Accessibility**: Full ARIA support and keyboard navigation
- **CSS Animations**: Lightweight fade-in animations with staggered timing

## Usage

```tsx
import Gallery from "@/components/Gallery";

// In your component
<Gallery />;
```

## Images

The gallery displays the following images:

- IMG_0022.jpg
- IMG_0049.jpg
- IMG_9714.jpg
- IMG_9759.jpg
- IMG_9788.jpg
- IMG_9865.jpg
- IMG_9957.jpg

## Customization

To modify the gallery:

1. **Add/Remove Images**: Update the `GALLERY_IMAGES` array in `index.tsx`
2. **Change Layout**: Modify grid positioning in `Gallery.module.scss`
3. **Adjust Animations**: Update CSS animations and delays in the SCSS file
4. **Styling**: Customize colors and effects in the SCSS file

## Performance

- Images use lazy loading
- Optimized with React.memo
- Lightweight CSS animations (no JavaScript animation libraries)
- Proper cleanup of event listeners
- Efficient staggered animations using CSS delays
