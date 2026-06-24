# Mumbai Local Survival Guide 🚆

A responsive frontend web application built as a guide platform for students, professionals, and tourists navigating Mumbai. This project provides local train routes, travel tips, station information, and city navigation essentials.

## 🎯 Project Overview
This project was developed to demonstrate core frontend development skills, focusing on clean design, intuitive navigation, and responsive implementation across devices. It fulfills the requirements for building a structured, modern web application.

## ✨ Features
* **Multi-Page Architecture:** Includes dedicated Home, About, Services, and Contact pages.
* **Responsive Design:** A mobile-first approach ensuring the UI looks great on desktops, tablets, and mobile devices (especially for users checking routes on the go).
* **Interactive UI:** Features a fully functional, state-managed Contact Form.
* **Seamless Routing:** Utilizes React Router for instant, page-reload-free navigation.

## 🛠️ Technologies Used
* **React.js (ES6+)**: Functional components and hooks (`useState`).
* **Vite**: Lightning-fast build tool and development server.
* **React Router DOM**: For client-side routing.
* **HTML5 & CSS3**: Custom, responsive styling without relying on heavy external UI libraries.

## 🚀 Getting Started

### Prerequisites
* Node.js (v14 or higher) installed on your machine.

### Installation & Setup
1. **Clone the repository:**
   \`\`\`bash
   git clone <your-github-repo-url>
   cd mumbai-local-guide
   \`\`\`

2. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

3. **Start the development server:**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **View the application:**
   Open your browser and navigate to `http://localhost:5173` (or the port specified in your terminal).

## 📁 Project Structure
\`\`\`text
src/
├── components/
│   └── Navbar.jsx        # Top navigation bar
├── pages/
│   ├── Home.jsx          # Landing page and hero section
│   ├── About.jsx         # Mission statement and purpose
│   ├── Services.jsx      # Route guides and ticket info
│   └── Contact.jsx       # Interactive contact form
├── App.jsx               # Main routing configuration
├── index.css             # Global responsive styling
└── main.jsx              # React DOM entry point
\`\`\`

## 📝 Evaluation Criteria Focus
* **UI/UX Design Quality:** Clean layout prioritizing readability and user experience over visual clutter.
* **Responsiveness:** Fluid grid layouts and media queries adapt the content from large monitors down to standard smartphone screens.
* **Code Organization:** Modular component architecture separating routing, UI elements, and page views.
