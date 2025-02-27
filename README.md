# **PABBY Initiative** 🚀  

### **Empowering Africa’s Web3 Future 🌍**  
A modern, sleek, and fully responsive website for the **PABBY Initiative**, designed to educate and certify individuals in **Web3, AI, and Cybersecurity** using NFT-based certifications.

---

## **🌟 Features**  
✅ **Glassmorphic UI Design** – Sleek, modern interface with smooth animations  
✅ **Framer Motion Animations** – Engaging animations for a dynamic feel  
✅ **Fully Responsive** – Mobile-friendly with a hamburger menu  
✅ **Smooth Navigation** – Click-to-scroll sections  
✅ **Waitlist Signup** – Integrated with **Formspree** for submissions  
✅ **Deployed on Vercel** – Fast, scalable, and secure hosting  

---

## **📂 Project Structure**
```
📦 PABBY-Initiative
├── 📂 public        # Static assets (logo, images, videos)
├── 📂 src
│   ├── 📂 components # Reusable UI components (Header, Footer, etc.)
│   ├── 📂 pages      # Main pages (Home, Waitlist, etc.)
│   ├── 📂 styles     # CSS stylesheets
│   ├── App.js        # Main app component
│   ├── index.js      # Entry point
├── .gitignore        # Files to ignore in Git
├── package.json      # Project dependencies & scripts
├── README.md         # Documentation
```

---

## **🚀 Installation & Setup**  

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/pabby01/pabby-initiative.git
cd pabby-initiative
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Run Locally**
```sh
npm run dev
```
The project will run on **http://localhost:5173** 🌍

---

## **🖥️ Deployment on Vercel**  
### **1️⃣ Install Vercel CLI**  
```sh
npm install -g vercel
```
### **2️⃣ Deploy**  
```sh
vercel
```
Follow the on-screen instructions to complete deployment.

---

## **📧 Contact Form & Waitlist Setup**
This project uses **Formspree** for handling form submissions.  

### **Update `Waitlist.js` & `ContactForm.js`**
Replace `"YOUR_FORM_ID"` with your **Formspree ID**:
```js
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```
Make sure your **Formspree email is verified** and your **Vercel domain is whitelisted**.

---

## **🛠️ Technologies Used**
- **React.js** ⚛️ – Frontend framework  
- **Framer Motion** 🎭 – Animations  
- **React Router** 🚏 – Page navigation  
- **Formspree** 📩 – Form handling  
- **Vercel** 🌎 – Deployment  

---

## **🔧 Future Enhancements**
- ✅ Add **backend support** for storing waitlist data  
- ✅ Integrate **Web3 wallet login**  
- ✅ Implement **Dark Mode UI**  

---

## **📜 License**
This project is **MIT Licensed**. Feel free to fork and contribute! 🤝  

---
🔥 **Built with ❤️ for Africa’s Web3 Revolution!** 🚀