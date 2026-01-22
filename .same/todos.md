# Hilltop Campers - Project Todos

## Completed Tasks
- [x] Fixed hydration mismatch error in ImageGallery component
- [x] Updated image-4 to use new same-assets.com URL

## How to Update Images (IMPORTANT!)

When using the visual editor to change images, the new image is uploaded to `same-assets.com` but **the code still references the old file path**.

### Solution: After using visual editor to change an image:

1. **Check the version changelog** - it will show the new image URL (e.g., `https://ugc.same-assets.com/XXXXX.jpeg`)

2. **Update the data file** - Edit `src/data/campervans.ts` and replace the old image path with the new URL

   Example:
   ```typescript
   // OLD (won't work after visual change):
   gallery: [
     "/images/campervans/van-1/image-1.jpeg",
     "/images/campervans/van-1/image-4.svg",  // This still points to old file!
   ],

   // NEW (updated with visual editor URL):
   gallery: [
     "/images/campervans/van-1/image-1.jpeg",
     "https://ugc.same-assets.com/3H6yAjNUKnXbI3OTkL2KBmmYmqvgeSTt.jpeg",  // New URL works!
   ],
   ```

3. **Restart dev server** if needed

### Image Locations

- **Campervan 1**: `/images/campervans/van-1/` - image paths defined in `campervan1` in data file
- **Campervan 2**: `/images/campervans/van-2/` - image paths defined in `campervan2` in data file
- **etc.**

### Current Image Status

Van 1:
- image-1.jpeg ✓
- image-2.jpeg ✓
- image-3.jpeg ✓
- image-4: Uses same-assets.com URL (updated via visual editor)

## Contact Form Setup (IMPORTANT!)

The contact form now uses **Resend** to send emails directly to hilltop.campers@outlook.com.

### To make it work:

1. **Get a free Resend API key:**
   - Go to https://resend.com and sign up (free - 100 emails/day)
   - Go to "API Keys" section
   - Create a new API key

2. **Add the key to your environment:**
   - Open `.env.local` file
   - Replace `re_xxxxxxxxxxxxxxxxxxxxxxxxx` with your actual API key

3. **Restart the dev server**

4. **For deployment on Netlify:**
   - Go to Site Settings > Environment Variables
   - Add `RESEND_API_KEY` with your API key value

### Email Features:
- Sends beautifully formatted HTML emails
- Includes sender's name, email, phone, topic, and message
- Reply-To is set to the sender's email for easy responses
- Subject includes the topic they selected

## Pending Tasks
- [x] Add Resend API key to environment - DONE!
- [ ] Consider downloading same-assets.com images to local public folder for better performance
- [ ] Add and verify custom domain in Resend to send from hilltop.campers@outlook.com instead of onboarding@resend.dev
