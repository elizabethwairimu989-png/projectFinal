# 💼 ISA-TECH – Official Company Website

A modern, responsive, and performance-optimized website for **ISA-TECH**, a technology solutions company offering software development, IT consulting, hardware services, and digital transformation solutions.

---

## 🌐 Live Demo
[🚀 Visit Live Website](https://projectfinal-z3qq.onrender.com/)

---

## 🏢 About ISA-TECH

**ISA-TECH** provides end-to-end digital solutions for businesses seeking to scale through technology.  
Our core services include:

- Custom software development  
- IT infrastructure & networking  
- Hardware sales & maintenance  
- Website & mobile application development  
- Cybersecurity and cloud solutions  

This website serves as ISA-TECH’s modern digital presence, showcasing services, brand identity, and customer value.

---

## 🎨 Brand Identity

### **Color System**
| Purpose | Color | Hex |
|---------|-------|-----|
| **Primary** | Tech Blue | `#1E40AF` |
| **Secondary** | Sky Blue | `#3B82F6` |
| **Neutral Dark** | Background/Text | `#111827` |
| **Neutral Gray** | Body text | `#6B7280` |
| **Light Background** | Section backgrounds | `#F3F4F6` |

**Chosen for:**  
✔ Trust  
✔ Professionalism  
✔ Clarity  
✔ Modern tech feel

### **Typography**
- **Headings:** Poppins / Inter Bold – Strong, modern, corporate look  
- **Body:** Inter Regular – Readable, neutral, elegant  

---

## 🧩 UX & Design Decisions

### **Layout Structure**
- Based on a 12-column grid  
- Uniform section spacing via `SectionWrapper`  
- Consistent component spacing using Tailwind’s 8px scale  
- Design optimized for desktop → tablet → mobile flow  

### **Why These Design Choices?**
- Tech companies require **clarity, trust, and precision**  
- Blue tones represent **reliability**  
- Clean whitespace enhances **professionalism**  
- Minimalistic UI communicates **competence**  

---

## 🔧 Technologies Used
| Technology | Purpose |
|------------|---------|
| React 18 | UI rendering |
| Vite | Fast development & bundling |
| Tailwind CSS 4 | Utility-first styling |
| Render | Hosting & deployment |

---

## 🧱 Component Architecture


**Reusability Approach:**  
- `SectionWrapper` unifies padding & spacing  
- `Card` component reused in services & testimonials  
- `ResponsiveImage` handles lazy loading + image optimization  
- `Button` ensures consistent CTA styling  

---

## ⚡ Performance Enhancements
- Lazy-loaded images  
- Vite production build optimizations  
- Tailwind automatic tree-shaking  
- Reduced bundle size via modular components  
- Lightweight SVG icons  
- Cached assets on Render deployment  

---

## 📸 Image Attribution
Images sourced from **Unsplash** and **Freepik**, licensed for free commercial use.

---

## 🔧 Installation & Setup

```markdown
git clone https://github.com/elizabethwairimu989-png/projectFinal
cd projectFinal

### 2️⃣ Install Dependencies
```bash
npm install


### 2️⃣ Install Dependencies
```bash
npm install

### 3️⃣ Start Development Server
```bash
npm run dev

### 4️⃣ Create Production Build
```bash
npm run build

### Preview Production Build
```bash
npm run preview

## 🧩 Challenges & Solutions

### 1️⃣ Render Deployment Build Failure
- **Cause:** Incorrect Vite commands  
- **Solution:** Updated build command + fixed environment settings  

### 2️⃣ Layout Breaking on Mobile
- **Cause:** Mixed custom CSS and Tailwind utilities  
- **Fix:** Transitioned to 100% Tailwind spacing  

### 3️⃣ Component Import Errors
- **Cause:** Refactor changed folder paths  
- **Fix:** Organized folder structure + unified import patterns

## 🚀 Future Roadmap

### 1️⃣ Full Backend API
- Node + Express  
- Services management  
- Contact/Inquiry system  

### 2️⃣ Admin Dashboard
- Add/edit service offerings  
- Update homepage images  
- Manage testimonials  

### 3️⃣ Enhancements
- Blog section on latest IT trends  
- Portfolio / case studies  
- Chatbot for customer support  
- Dark mode toggle





