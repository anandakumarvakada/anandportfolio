# Vakada Ananda Kumar — Portfolio

## Run locally
Open `index.html` directly, or serve the folder with any static web server.

## Add the professional photo
The prompt referenced a provided professional photo, but no image file was available to package in this build.
Replace:
`assets/profile-photo-placeholder.svg`
with your actual photo and update the `<img>` source in `index.html` if needed.

## Contact form
This project uses Formspree as the frontend-safe email delivery option.
1. Create a Formspree form at https://formspree.io/
2. Set the form destination to an account that can receive `anandakumarvakada@gmail.com`.
3. Replace `YOUR_FORMSPREE_ENDPOINT` in `index.html` with your Formspree endpoint, e.g. `https://formspree.io/f/xxxxxxxx`.
4. Do not put private API keys or passwords in frontend files.

The form is intentionally not fake: without a configured endpoint, it shows a setup message rather than claiming a message was sent.

## Resume
`resume.pdf` is included and contains only the supplied information.
