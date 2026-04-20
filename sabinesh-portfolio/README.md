# Sabinesh S — Portfolio Website

A modern, cinematic black & white portfolio for **Sabinesh S** — Full Stack Developer, AI Engineer, and Agentic AI Specialist.

## ✨ Features

- **Antigravity Design**: Floating glassmorphism cards, animated star-field background, and levitating UI elements
- **SABINESH AGENT**: AI chatbot widget (demo mode out-of-box, connects to any LLM backend via env)
- **WhatsApp Integration**: Persistent floating WhatsApp connect button
- **Smooth Animations**: Framer Motion throughout — entrance animations, hover effects, parallax depth
- **Fully Responsive**: Mobile, tablet, desktop optimized
- **Sections**: Hero, About, Skills, Experience, Projects, Contact, Footer

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment

```bash
cp .env.example .env
```

Edit `.env` and set your chatbot API URL (optional — runs in demo mode without it):

```
VITE_CHATBOT_API_URL=http://localhost:8000/chat
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── StarField.jsx       # Animated canvas star field background
│   ├── Navbar.jsx          # Fixed navigation with scroll detection
│   ├── Hero.jsx            # Animated hero with floating elements
│   ├── About.jsx           # Bio, photo placeholder, personal details
│   ├── Skills.jsx          # Visual skill bars with categories
│   ├── Experience.jsx      # Internship timeline cards
│   ├── Projects.jsx        # Project cards with GitHub links
│   ├── Contact.jsx         # Contact form + direct links
│   ├── Footer.jsx          # Minimal footer with socials
│   ├── WhatsAppButton.jsx  # Persistent WhatsApp floating button
│   └── ChatBot.jsx         # SABINESH AGENT AI chatbot widget
├── App.jsx                 # Root component
├── main.jsx                # Vite entry point
└── index.css               # Tailwind + global styles
```

## 🤖 Connecting the AI Chatbot

The SABINESH AGENT chatbot (`src/components/ChatBot.jsx`) works in **demo mode** out of the box with pre-written responses.

To connect a real LLM backend:

1. Build a FastAPI / Node.js server that accepts:
   ```json
   POST /chat
   { "messages": [{ "role": "user", "content": "Hello" }] }
   ```
   And returns:
   ```json
   { "response": "AI reply here" }
   ```

2. Set `VITE_CHATBOT_API_URL=http://your-server.com/chat` in `.env`

3. Restart the dev server — the chatbot will auto-connect.

## 📸 Adding Your Photo

In `src/components/About.jsx`, replace the avatar placeholder div with:

```jsx
<img src="/your-photo.jpg" alt="Sabinesh S" className="w-full h-full object-cover" />
```

Place your photo in the `public/` folder.

## 🎨 Customization

- **Colors**: Edit `src/index.css` — the design uses pure black/white
- **Content**: Edit data arrays inside each component
- **Fonts**: Loaded via Google Fonts in `index.html`

## 📦 Tech Stack

- **React 18** + **Vite 5**
- **Tailwind CSS 3**
- **Framer Motion 11**
- **Lucide React** (icons)
- Canvas API (star field)

## 📞 Contact

**Sabinesh S** — sabinesh14s@gmail.com | +91 84890 39175
