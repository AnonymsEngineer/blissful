# Assets Folder

Place your images in this folder and reference them in your code using the path `/assets/filename.jpg`.

## How to add your own images:

1. Copy your image file (jpg, png, etc.) to this folder
2. Update the image path in your code from placeholder URLs to `/assets/your-filename.jpg`

## Example for Testimonials:

In `src/data/testimonials.js`, change:
```javascript
img: "https://i.pravatar.cc/150?u=alex"
```

To:
```javascript
img: "/assets/surbhi.jpg"
```

## Example for Component Images:

In any component, change:
```javascript
src="https://images.unsplash.com/photo-..."
```

To:
```javascript
src="/assets/your-image.jpg"
```

The `/assets/` path will automatically serve files from this folder.
