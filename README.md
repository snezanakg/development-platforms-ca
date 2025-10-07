# development-platforms-ca

## Project: Supabase News Platform

### 👩‍💻 Author
**Name:** Snežana Kragujevac
**Email:** snekra02735@stud.noroff.no  
**GitHub Repo:** [https://github.com/snezanakg/development-platforms-ca](https://github.com/snezanakg/development-platforms-ca)

---

## 🚀 Project Description  
A full-stack-like news platform where users can:  
- View public articles  
- Register, confirm email, log in  
- Create articles (only for logged in users)  
- Articles are tagged with author and timestamp  

Built using Supabase (auth + database) and frontend with HTML, CSS, JS.

---

## 🧱 Tech Stack  
- Frontend: HTML, CSS, JavaScript  
- Backend: Supabase (auth + database)  
- Version Control: Git / GitHub  

---

## 🔧 Setup & Installation

1. Clone the repo  
   git clone https://github.com/snezanakg/development-platforms-ca.git
   cd development-platforms-ca
Edit js/supabaseClient.js and set:
const SUPABASE_URL = 'https://bncbcsqohzxnajkqigad.supabase.co'
const SUPABASE_ANON_KEY = '...your anon public key...'
Open index.html (or any page) in your browser to run locally.

✅ Features & Pages
index.html — List of articles, login/register, dark mode toggle

create.html — Form to submit new article (auth required)

login.html — Login form

register.html — Registration form

about.html — Info about project + developer

All pages include navigation (Home, About, and appropriate links/buttons) and footer.

🗂 Database Schema (articles table)
Column	Type	Notes
id	int8	Primary key auto-generated
title	text	Article title
body	text	Article content
category	text	Article category
submitted_by	uuid	Author’s user ID
created_at	timestamptz	Defaults to now()

RLS Policies (Row Level Security)

SELECT policy: allow all users (anyone)

INSERT policy: allow only authenticated users

🎨 Styling & UX Enhancements
DRY CSS structure

Hover effect on article cards

Dark mode toggle

Consistent footer + navigation across pages

Responsive design

🧾 How to Use
Register → confirm via email

Log in

On homepage, click Create Article

Submit your article

Refresh homepage → new article should appear

📦 Final Commits & Contribution
We made final commits including:

Navigation and layout fixes on all pages

Create page logic corrected

CSS polishing

README update

