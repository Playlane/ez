# EZ Health Primary & Behavioral Health — website

A static, multi-page website. No build step and no dependencies.

## Pages
Each tab in the menu is its own page. The Services tab has a dropdown, and each service in it has its own page.

| Tab | File |
|---|---|
| Home | `index.html` |
| Services (overview) | `services.html` |
| Services → Adult & Geriatric Primary Care | `adult-geriatric-primary-care.html` |
| Services → Chronic Disease Management | `chronic-disease-management.html` |
| Services → Chronic Pain Management | `chronic-pain-management.html` |
| Services → Preventive Care | `preventive-care.html` |
| Services → Psychiatric Evaluation | `psychiatric-evaluation.html` |
| Services → Medication Management | `medication-management.html` |
| Services → Addiction Treatment | `addiction-treatment.html` |
| Services → Addiction Counseling | `addiction-counseling.html` |
| Services → Specialist Referrals | `specialist-referrals.html` |
| Our Provider | `provider.html` |
| Recovery Care | `recovery.html` |
| For Partners | `partners.html` |
| About | `about.html` |
| Contact | `contact.html` |

On GitHub Pages, each address also works without `.html` (for example `ezpbh.com/services`).

Shared files: `css/styles.css` (design), `js/main.js` (menu and form), `assets/` (logo and photos). To show Dr. Eze's photo, send it to be added in place of the `FE` placeholder.
Keep these folders next to the pages when you upload.

## Publish on GitHub Pages
1. Create a new repository and upload everything in this folder, keeping the folder structure.
2. Go to **Settings → Pages**, set **Source** to *Deploy from a branch*, choose `main` and `/ (root)`, and save.
3. Your site will be live at `https://<your-username>.github.io/<repo-name>/` in a minute or two.
4. To use `ezpbh.com`, add it under **Settings → Pages → Custom domain** and update your DNS records as GitHub describes.

## Turn on the contact form
GitHub Pages can't send email, so the form uses [Formspree](https://formspree.io) (free tier available).
1. Create a Formspree form and copy its ID (looks like `xyzabcd`).
2. In `contact.html`, replace `YOUR_FORM_ID` in the form's `action` with your ID.

Until then, the form tells visitors to call instead.

## Before going live, please confirm
- Phone number (the old site displayed 227-259-9679 but its call link dialed 227-259-9879).
- Email address (consider a domain address such as info@ezpbh.com).
- Office hours and accepted insurance, if you'd like them listed.
