# Hilltop Campers - Project Status

## Completed Tasks
- [x] Fixed image caching issues - images now use external CDN URLs
- [x] Contact form sends emails via Resend API to hilltopcampers.co.uk@gmail.com
- [x] Updated all contact information to use Gmail address
- [x] Fixed Netlify build issue with Resend API key
- [x] Pushed latest version to GitHub
- [x] Site verification - all pages working correctly (Version 147)
- [x] Fixed linter errors - removed PDF brochure components (Version 162)
- [x] Removed captions/descriptions from gallery images
- [x] Moved "Other Services We Offer" section to just above testimonials (Version 173)
- [x] Created PDF brochure for Eryri Adventurer using jspdf + html2canvas (Version 188-189)
- [x] Added Download Brochure buttons to Eryri Adventurer page
- [x] Fixed PDF brochure issues (Version 191-193):
  - [x] Added 3 interior photos from for-sale page to brochure gallery
  - [x] Fixed PDF page splitting - now uses page-by-page rendering
  - [x] Fixed logo to use correct Hilltop Campers logo image (/images/hilltop-logo.png)
  - [x] Redesigned brochure with 6 dedicated pages
- [x] Moved Download Brochure button to Eryri Adventurer section next to Learn More (Version 199)
- [x] Created Facebook banner generator page at /banner (Version 204)
- [x] Restructured brochure PDF layout (Version 210):
  - [x] Created 3 explicit page containers with fixed A4-like heights (1122px)
  - [x] "Start Your Adventure" section now starts on page 3
  - [x] Used flex-fill layout to eliminate white blank areas
  - [x] Each page maintains consistent proportions for proper PDF rendering

## Current Features
- PDF Brochure available at /brochure/eryri-adventurer
  - 3-page professional brochure design with fixed page heights
  - Page 1: Cover with hero image, title, price
  - Page 2: Key features, photo gallery, specifications
  - Page 3: What's included, upgrades, Start Your Adventure (pricing & contact)
  - Client-side PDF generation with proper page breaks
  - No white blank areas on any page
- Download Brochure buttons on:
  - Homepage hero section
  - Eryri Adventurer hero section
  - Eryri Adventurer pricing section

## Current State
- Facebook banner generator available at /banner
- Site is fully functional
- Dev server running on Next.js 15.5.9 with Turbopack
- Gallery images display without captions
- Hero section has "Enquire Now", "Call", and "Download Brochure" buttons
- PDF brochure feature working with correct logo and interior photos

## Notes

### Changing Images
When changing images via the visual editor:
1. The visual editor uploads images to `same-assets.com`
2. Update the image URLs in `src/data/campervans.ts` to use the new URLs
3. For hero images, update them in the respective page components

### Contact Form
- Uses Resend API for email delivery
- API key stored in `.env.local` (and needs to be set in Netlify for production)
- Emails sent to: hilltopcampers.co.uk@gmail.com

### Eryri Adventurer Page
- Full page exists at `/eryri-adventurer`
- Features video embed, specifications, pricing
- "Learn More" and "Enquire Now" buttons link to this page
- Gallery images stored in `/public/images/eryri-adventurer/`
  - front-headon.jpg
  - front-three-quarter.jpg
  - side-three-quarter.jpg
  - poptop-raised.jpg
  - rear-three-quarter.jpg

### PDF Brochure
- Located at `/brochure/eryri-adventurer`
- Uses jspdf + html2canvas for client-side PDF generation
- Restructured with 3 explicit page containers (1122px height each)
- Page 1: Hero cover with full background image
- Page 2: Key features + Gallery + Specifications
- Page 3: What's Included + Start Your Adventure (fills remaining space)
- Uses correct Hilltop Campers logo (/images/hilltop-logo.png)
- Includes interior photos from /images/campervans/van-1/
