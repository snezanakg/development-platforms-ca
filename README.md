# development-platforms-ca

## Project: Supabase News Platform

### 👩‍💻 Author
**Name:** Snežana Kragujevac
**Email:** snekra02735@stud.noroff.no  
**GitHub Repo:** [https://github.com/snezanakg/development-platforms-ca](https://github.com/snezanakg/development-platforms-ca)

---

## 🚀 Overview
This project is a **functional news platform** built using **Supabase** for backend services and **HTML, CSS, and JavaScript** for the frontend.  
It allows users to:
- View all news articles (public)
- Register and log in
- Create new articles (only for logged-in users)
- Articles automatically record the logged-in author and timestamp

---

## 🧱 Tech Stack
**Frontend:** HTML, CSS, JavaScript  
**Backend (PaaS):** [Supabase](https://supabase.com)  
**Database:** Supabase PostgreSQL (articles table)  
**Authentication:** Supabase Email/Password  
**Version Control:** Git + GitHub  

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/snezanakg/development-platforms-ca.git
cd development-platforms-ca
2️⃣ Open Locally
Open any file (e.g., index.html) in your browser using Live Server or by double-clicking it.

3️⃣ Supabase Configuration
Already included in:

bash
js/supabaseClient.js
Your configuration:

js
const SUPABASE_URL = 'https://bncbcsqohzxnajkqigad.supabase.co'
const SUPABASE_ANON_KEY = 'YOUR_ANON_KEY_HERE'
🧠 Motivation
I chose Option 2 (Frontend with Supabase) because I wanted to build a full-stack-style project using a modern SaaS backend.
Supabase made it easy to integrate authentication, database, and API features without hosting my own backend.

👍 What I Liked
How quickly Supabase sets up authentication and database tables.

Using RLS (Row Level Security) to protect data easily.

😓 What Was Difficult
Understanding Row Level Security policies.

Making sure authentication state updated correctly between pages.

⚖️ Supabase vs Custom API
Using Supabase saved time and avoided writing backend logic manually.
A custom Express.js API offers more control, but Supabase is ideal for rapid development and scalable prototypes.

✅ Features Checklist
 Public article list

 User registration with email + password

 Email confirmation

 User login and logout

 Auth-protected article creation

 Articles stored in Supabase table

 Responsive design with CSS

 Working Supabase integration

 Clean modular JS (auth.js, articles.js)

📂 Project Structure
development-platforms-ca/
├── index.html          # View all articles
├── login.html          # Login page
├── register.html       # Registration page
├── create.html         # Submit new article (auth required)
├── js/
│   ├── supabaseClient.js  # Connection setup
│   ├── auth.js            # Auth helpers
│   └── articles.js        # Article fetch & insert logic
├── css/
│   └── styles.css
└── README.md
🧩 Database Schema
Table: articles

Column	Type	Description
id	int8	Primary key
title	text	Article title
body	text	Article content
category	text	Article category
submitted_by	uuid	References logged-in user
created_at	timestamp	Default now()

Row Level Security (RLS)

✅ Anyone can SELECT (read articles)

✅ Authenticated users can INSERT (add articles)

🧑‍💻 How to Use
Register with an email and password.

Confirm your email (check inbox).

Log in to unlock the “Create Article” button.

Submit your article.

Refresh the homepage to see it listed.

🏁 Submission Info
Branch: feature/news-platform

Pull Request: Submit PR link to Moodle

GitHub Username for Grading Access: cnnrbrn

© 2025 Snežana Kragujevac– Noroff School of Technology and Digital Media
