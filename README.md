# 📰 Supabase News Platform

A full-stack web application that allows users to **browse**, **filter**, and **create news articles** with authentication, using **Supabase** as the backend service.

Developed as part of the **Development Platforms Course Assignment (Noroff)**.

---

## 🚀 Features

✅ User authentication (register, login, logout)  
✅ Create new articles (authenticated users only)  
✅ Browse all articles (public access)  
✅ Filter articles by category  
✅ View personal “My Articles” page  
✅ Form validation and visual feedback  
✅ Dark mode toggle  
✅ Responsive layout for mobile and desktop  

---

## 🧠 Technology Stack

**Frontend:**
- HTML5, CSS3, JavaScript (ES Modules)
- Supabase JS Client Library

**Backend (Platform-as-a-Service):**
- [Supabase](https://supabase.com/) for:
  - Authentication (email/password)
  - Database (PostgreSQL)
  - Row Level Security (RLS)

---

## ⚙️ Installation and Setup

### 1️⃣ Clone the Repository

git clone https://github.com/<your-username>/development-platforms-ca.git
cd development-platforms-ca
2️⃣ Configure Supabase
Create a Supabase project and set up two tables:

users (automatic via Supabase Auth)
articles
Column	Type	Description
id	bigint	Primary key
title	text	Article title
body	text	Article content
category	text	Article category
submitted_by	uuid	User ID (foreign key)
created_at	timestamp	Default: now()

Enable RLS on the articles table.

Then copy your Supabase URL and anon key into js/supabaseClient.js:


import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const SUPABASE_URL = 'https://yourproject.supabase.co'
const SUPABASE_ANON_KEY = 'your-anon-key'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
3️⃣ Run the Project
Just open index.html in your browser.
You can also use the Live Server VS Code extension for easier local testing.

🧩 File Structure

development-platforms-ca/
│
├── css/
│   └── styles.css
│
├── js/
│   └── supabaseClient.js
├── auth.js
│ └── articles.js 
├── index.html
├── login.html
├── register.html
├── create.html
├── articles.html
├── about.html
├── README.md
└── assets/
    ├── icon-news.png
    ├── icon-login.png
    ├── icon-register.png
    ├── icon-article.png
    └── icon-news-round.png
💬 Motivation
I chose Option 2 (Frontend with Supabase) because I enjoy creating full-stack applications with instant backend integration and authentication handled automatically.

What I liked:
Supabase makes backend setup fast and developer-friendly

Authentication and database management were smooth

Seeing everything connected and live on the frontend was rewarding

What I found difficult:
Handling authentication states correctly across pages

Styling consistent layouts and dark mode

Managing async Supabase responses for validation

What I learned:
How to use Supabase for real-world web app projects

How to combine frontend and backend logic securely

How to structure clean, DRY, modular code in JavaScript

Custom API vs SaaS (Supabase)
A custom API (Express) gives full control but requires more setup

Supabase (SaaS) is faster for development and includes built-in auth, RLS, and database UI

For small to mid-sized apps, Supabase is ideal for simplicity and speed

🧾 Credits
Developed by Snežana Kragujevac
© 2025 — Supabase News Platform

