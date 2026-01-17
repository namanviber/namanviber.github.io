# 🎮 Game Ghoul (Official Website)

This repository serves two purposes:
1.  **🚀 Live Website:** The root directory contains the static version of the site served via [GitHub Pages](https://namanviber.github.io).
2.  **🛠️ Development:** It also contains the source code for the dynamic Node.js/Express version of the application.

---

## 🚀 Features

- **Gaming Blog:** Browse and read the latest articles and trends in the gaming world.
- **Accessory Store:** Explore a variety of gaming accessories with detailed product views.
- **Dynamic Content:** Powered by Node.js and MongoDB (in the development version).
- **Shopping Cart:** Add items to your cart for a seamless shopping experience.
- **User Reviews:** Read and contribute to product reviews.
- **Responsive Design:** Optimized for various devices for smooth browsing.

## 🛠️ Tech Stack

- **Static Pages:** HTML, CSS, Vanilla JavaScript
- **Backend (Dev):** Node.js, Express.js
- **Frontend (Dev):** Handlebars (HBS) Templates
- **Database:** MongoDB (using Mongoose ODM)

## 📂 Project Structure

- `index.html`, `Shop.html`, etc.: Static entry points for GitHub Pages.
- `/src`: Contains the main server logic (`index.js`).
- `/Templates`: Handlebars views and partials for the development version.
- `/CSS Files`, `/Images`, `/JS Files`: Shared assets used by both versions.
- `/Model`: Mongoose schemas and data models.
- `/connection`: Database connection configuration.

## 🛠️ Local Development & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/namanviber/namanviber.github.io.git
   cd namanviber.github.io
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### 🗄️ Database Setup (Crucial for Dev)

The development version requires **MongoDB** to function beyond the homepage.

1.  **MongoDB Atlas:** Ensure your MongoDB cluster is active.
2.  **IP Whitelisting:** Navitage to **Network Access** in your Atlas dashboard and ensure your current IP address is whitelisted.
3.  **Connection String:** Update the `URI` in `connection/ConnectDB.js` if necessary.

3. **Run the application:**
   ```bash
   npm start
   ```

4. **Access the site:**
   Navigate to `http://localhost:3000`.

## 👥 Collaborators

| Name | GitHub Profile |
| :--- | :--- |
| **Naman Jain** | [@namanviber](https://www.github.com/namanviber) |
| **Vivaan Sahai** | [@vivaansahai](https://github.com/vivaansahai) |
| **Aryaman Sital** | [@Aryamansital](https://github.com/Aryamansital) |

---
*Created with passion for the gaming community.*
