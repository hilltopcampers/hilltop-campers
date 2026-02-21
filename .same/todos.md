# Hilltop Campers - Project Todos

## Completed
- [x] Update all email addresses from hilltopcampers.co.uk@gmail.com to hello@hilltopcampers.co.uk
- [x] Update contact form forwarding email in API route
- [x] Add decal downloads section to media page
- [x] Add New Renault Trafic brochure button to Eryri Adventurer page
- [x] Change existing brochure button text to "Conversion Brochure"
- [x] Verify PDF brochure email address is hello@hilltopcampers.co.uk
- [x] Add fallback email/phone buttons when contact form fails

## Completed Recently
- [x] Update sitemap.xml with current date (2026-02-21)
- [x] Remove non-existent terms/privacy pages from sitemap
- [x] Update sitemap.ts dynamic generator
- [x] Remove media page from sitemap (keep it hidden from public)
- [x] Add /media to robots.txt disallow list

## Pending
- [ ] Upload New Renault Trafic brochure PDF for local hosting (user needs to upload file)
- [ ] Update brochure button link to point to local PDF file

## Contact Form Issue
The contact form uses Resend API for sending emails. Current issues:

### Problem
The Resend API key in `.env.local` may be invalid (contains `xxx` pattern).

### Solution Options
1. **Get a valid Resend API key:**
   - Sign up at https://resend.com
   - Get your API key from the dashboard
   - Update `.env.local` with: `RESEND_API_KEY=re_your_real_key_here`
   - Note: Free tier only sends to your verified email unless you verify a domain

2. **Verify your domain with Resend:**
   - Add DNS records to verify hilltopcampers.co.uk
   - Then update the "from" email in `/src/app/api/contact/route.ts` to use your domain

3. **Alternative: Use Netlify Forms (if deployed to Netlify):**
   - Add `data-netlify="true"` to the form
   - No API key needed, Netlify handles it automatically

4. **Current fallback:**
   - When the form fails, users see "Send via Email App" and "Call Us" buttons
   - This opens their email client with pre-filled message
