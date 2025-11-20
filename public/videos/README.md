# Project Videos & Poster Images

This directory contains video demos and poster images for portfolio projects.

## File Naming Convention

### Videos (MP4 format recommended)
Place video files in this directory with the following names:

- `car-mart.mp4` - America's Car Mart
- `computer-care.mp4` - Computer Care
- `follett.mp4` - Follett Corporation
- `jcpenney.mp4` - JCPenney
- `walmart-infosec.mp4` - Walmart Information Security
- `walmart-themis.mp4` - Walmart Legal Themis
- `walmart-luminate.mp4` - Walmart Data Ventures Luminate
- `handled-home.mp4` - Handled Home

### Poster Images (JPG format recommended)
Place poster images (video thumbnails) in `/public/images/posters/` with the following names:

- `car-mart.jpg` - America's Car Mart
- `computer-care.jpg` - Computer Care
- `follett.jpg` - Follett Corporation
- `jcpenney.jpg` - JCPenney
- `walmart-infosec.jpg` - Walmart Information Security
- `walmart-themis.jpg` - Walmart Legal Themis
- `walmart-luminate.jpg` - Walmart Data Ventures Luminate
- `handled-home.jpg` - Handled Home

## Video Requirements

### Recommended Specs
- **Format**: MP4 (H.264 codec)
- **Resolution**: 1920x1080 or 1280x720
- **Aspect Ratio**: 16:9
- **Duration**: 10-30 seconds recommended
- **File Size**: Keep under 5MB for optimal performance

### Optimization Tips
- Use a tool like HandBrake to compress videos
- Lower bitrate for web (2-4 Mbps is usually sufficient)
- Consider 720p instead of 1080p to reduce file size

## Poster Image Requirements

### Recommended Specs
- **Format**: JPG (or WebP for better compression)
- **Resolution**: 1920x1080 (matches video aspect ratio)
- **Aspect Ratio**: 16:9
- **File Size**: Keep under 200KB

### How to Create Poster Images
1. Export a frame from your video at an interesting moment
2. Use an image editor to optimize for web
3. Save as high-quality JPG

## Performance Features

The ProjectVideo component includes:
- **Lazy Loading**: Videos only load when they enter the viewport
- **Intersection Observer**: Triggers 50px before entering view
- **Hover to Play**: Videos play on mouse hover, pause on mouse leave
- **Fallback Colors**: If video/poster fails to load, shows the original color
- **Progressive Enhancement**: Shows poster image first, then loads video

## Fallback Colors

If a video or poster image is missing, these fallback colors will display:

- America's Car Mart: `#2563EB` (blue)
- Computer Care: `#333333` (dark gray)
- Follett Corporation: `#B48140` (bronze/gold)
- JCPenney: `#E5E5E5` (light gray)
- Walmart Information Security: `#1F2937` (dark slate)
- Walmart Legal Themis: `#1D4ED8` (blue)
- Walmart Data Ventures Luminate: `#E5E5E5` (light gray)
- Handled Home: `#F97316` (orange)
