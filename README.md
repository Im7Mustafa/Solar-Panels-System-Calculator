# Solar Panels System Calculator ☀️

* **Academic Project:** Web Programming & Design Course Requirement
* **Major:** Computer Science, Second Stage
* **Academic Year:** 2025 – 2026
* **Author:** Mustafa A. Ghafour

---

## 📖 Introduction
As the world shifts toward sustainable energy solutions, solar power has emerged as a primary alternative to traditional electrical grids. However, planning a solar setup involves complex technical calculations that can be intimidating for average users. The **Solar Panels System Calculator** was developed to bridge this gap, providing a user-friendly, visually intuitive interface that simplifies the transition to clean energy.

---

## 🎯 Theoretical Framework & Benefits

* **Environmental Impact:** The core objective is to encourage the adoption of renewable energy, thereby reducing carbon footprints and promoting environmental sustainability by decreasing reliance on fossil fuels.
* **Economic Efficiency:** By providing accurate hardware estimations, users can avoid unnecessary expenses. The project helps in determining the exact scale of the system required, preventing both under-powered setups and over-investing in redundant hardware.
* **Hardware Longevity & Safety:** A unique theoretical aspect of this project is the integration of "Safety Limits." By incorporating specific constraints for Inverter loads, the system educates users on hardware maintenance and prevents electrical overloads.

---

## 💻 Practical Implementation

### Technical Stack
* **HTML5:** Structural Backbone
* **CSS3:** UI Styling and Responsive Design
* **JavaScript:** Real-time Calculation Engine

### Design Philosophy: Glassmorphism
The UI utilizes a modern Glassmorphism aesthetic. This is achieved through CSS properties such as `backdrop-filter: blur()` and semi-transparent background colors with RGBA. This style provides a futuristic feel that aligns with the advanced nature of solar energy technology while maintaining readability and visual hierarchy.

### Programming Logic & Algorithms
The calculator is driven by a real-time JavaScript engine that processes user inputs instantly. The following logic constants and limits were applied:
* **Solar Generation:** Each panel contributes approximately 2 Amperes of current.
* **Energy Storage:** Each battery provides a significant 12.5 kW capacity.
* **Load Conversion:** Real-time conversion from Amperes to Kilowatts using a standard voltage of 220V.
* **Hardware Constraints:** Automatic logic checks for a standard 8kVA Inverter, programmed with a strict limit of 10 panels or 3 batteries per inverter to trigger safety warnings.

---

## 📂 Project Architecture

    SOLAR PANELS SYSTEM CALCULATOR/
    │
    ├── index.html
    ├── pages/
    │   ├── about.html
    │   ├── calc.html
    │   └── contact.html
    └── assets/
        ├── css/
        │   ├── main.css
        │   ├── home.css
        │   ├── about.css
        │   ├── calc.css
        │   └── contact.css
        ├── js/
        │   └── calc.js
        ├── pics/
        │   └── solar-bg.jpg
        └── icons/
            ├── favicon.png
            ├── panel.png
            ├── battery.png
            └── inverter.png

---

## 🖥️ User Interface & Page Walkthrough

The project consists of four interconnected, fully responsive pages, each serving a specific user flow:

### 1. Home Page (Landing Page)
Serves as the main gateway to the system. It features a prominent Hero Section and a step-by-step guide explaining how the calculator works, designed to immediately engage the user.

### 2. About Page
Dedicated to the theoretical background of the project. It uses spacious, readable glass-sections to explain the vision, the underlying algorithms, and the importance of hardware safety limits.


### 3. Calculator Page (The Core Engine)
The main functional interface structured in a two-column layout. The left column captures user inputs (Amperes, panels, batteries), while the right column acts as a dynamic dashboard, rendering hardware icons and real-time calculations without requiring a page reload.


### 4. Contact Us Page
Provides a seamless communication channel. It features a fully styled form with floating inputs, maintaining the Glassmorphism identity and offering a professional closing to the user journey.

---

## ✅ Conclusion
The Solar Panels System Calculator successfully integrates professional engineering logic with modern web design. It stands as a functional tool that empowers users to make data-driven decisions about their energy consumption. By combining real-time DOM manipulation with a sophisticated responsive UI, the project demonstrates a high level of frontend development proficiency while serving a critical real-world need.
