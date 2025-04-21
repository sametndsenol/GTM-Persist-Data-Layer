
# GAEvent Persistence Script for Google Tag Manager

This script allows a `GAEvent` sent from one page (e.g., after a form submission) to persist and be automatically re-sent as `GAEvent2` on the next page load. Ideal for maintaining analytics continuity between pages without modifying server-side logic or using backend code.

---

## 🔍 What It Does

- 🧲 Listens for `dataLayer.push({ event: 'GAEvent', ... })`
- 💾 Saves the full event data to `localStorage`
- 🔁 On the next page load, re-sends it as `GAEvent2`
- 🧼 Clears the stored data after replay to prevent duplicates

---

## 🧠 Why Use It?

- Perfect for tracking conversions that happen *after* a form submission
- Preserves GA4 or other analytics event data across navigation
- Zero server setup – works entirely via the browser and GTM
- No dependencies, 100% vanilla JavaScript (ES5)

---

## 🛠️ How To Install

1. In **Google Tag Manager**, create a new tag:
   - **Tag Type:** Custom HTML
   - **HTML Content:** Paste the contents of `gaevent2-gtm-tag.js`
   - **Trigger:** All Pages

2. (Optional) You can customize the trigger to run only on certain URLs or paths if needed.

---

## 💡 Example Use Case

Imagine a user submits a form. You push a `GAEvent` with form metadata. The user is redirected to a thank-you page.  
On that new page, this script automatically pushes a `GAEvent2` with the same parameters, so your analytics platform captures the event in the right context.

---

## 🧾 Files

- `gaevent2-gtm-tag.js` – The main script you add in GTM
- `README.md` – This guide
