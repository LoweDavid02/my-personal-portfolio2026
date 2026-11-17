# Missing & Unverified Content Checklist

The portfolio strictly avoids fabricating metrics, employment history, live links, or certificates. Use this checklist to supply or confirm remaining items:

## 1. Contact & Identity Verification
- [ ] **Confirm preferred primary email**: Both `lowedavidctubat02@gmail.com` (from `lowedavidtubatcv.pdf`) and `louiecamarines21@gmail.com` (from prior `Hero.jsx`/`Contact.jsx`) exist in the repository. Currently `lowedavidctubat02@gmail.com` is set as primary in `src/config/site.js`.
- [ ] **Production canonical URL**: Set `VITE_SITE_URL` in `.env` / Vercel environment variables once the final domain is assigned, and update `public/sitemap.xml` and `public/robots.txt` with the absolute domain.

## 2. Project Assets & Live Links (`src/data/projects.js`)
- [ ] **Barangay San Vicente Service Request & Ticketing System**
  - [ ] Live deployment URL (`links.demo`), if hosted publicly
  - [ ] Documentation link (`links.documentation`), if applicable
  - [ ] Additional screenshots (resident guest ticket submission view, ticket tracking view, personnel assignment/evidence upload view)
  - [ ] Verified completion date & post-deployment adoption outcomes (once deployed)
- [ ] **OpenDoor Consultation Booking System (Web)**
  - [ ] Live deployment URL (`links.demo`), if publicly accessible
  - [ ] Additional screenshots (Office Management, Consultation Summary, Analytics views)
- [ ] **OpenDoor Mobile Application**
  - [ ] Expo preview / APK / Store link (`links.demo`), if shared publicly
  - [ ] Additional mobile screenshots (booking creation form, notifications/detail modal)
- [ ] **BitForge IT Services (Startup Project)**
  - [x] Public Render live URL (`https://bitforge-it-services-management.onrender.com`)
  - [ ] GitHub repository link (`links.github`), if public
  - [ ] Additional screenshots (Services, Portfolio, Team, Book Now views)
  - [ ] Launch date (`startedAt`) and specific role details (`role`)
- [ ] **Additional Standalone Projects**
  - [ ] Add verified individual projects for `Frontend Development`, `Backend & APIs`, `UI/UX Design`, or `Academic Projects` categories if separate repositories/builds exist outside the three documented systems.

## 3. Experience & Credentials (`src/data/experience.js`)
- [ ] **Certifications**: `CERTIFICATIONS` in `src/data/experience.js` is currently empty. Add verified certificates (title, issuer, issue date, credential verification URL) when available.
- [ ] **Formal Internships / Work Experience**: Add verified internship or employment entries to `EXPERIENCE_TIMELINE` when completed.

## 4. Resume (`public/resume/developer-resume.pdf`)
- [ ] **Review CV PDF copy**: Copied from `src/assets/lowedavidtubatcv.pdf`. Note the existing PDF header contains a spelling typo (`UI/UX DESIGNNER`); consider exporting a corrected PDF revision and replacing `public/resume/developer-resume.pdf`.
