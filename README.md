# 🎬 Vidzy

**Vidzy** is a single-page video management web application that allows users to browse, add, edit, delete, and filter video records. The app is built using **AngularJS**, **Node.js**, **Express**, **MongoDB**, and styled with **Bootstrap**.

---

## ⚙️ Technologies Used

- **Frontend:** AngularJS 1.4 + Bootstrap 5
- **Backend:** Node.js + Express
- **Database:** MongoDB
- **Package Manager:** npm

---

## 🚀 How to Run the Project

1. **Install dependencies:**

```bash
npm install
Start the server:
node app.js
Open in your browser:
http://localhost:3000
✅ Features

Display a list of videos
Add a new video via form
Edit an existing video
Delete a video
Filter/search by genre
Form validation (all fields required)
Clean and modern UI using Bootstrap
🔍 Available Routes (AngularJS)

/ — Main page with video list
#/add — Add a new video
#/edit/:id — Edit a video by ID
#/details/:id — View video details
📁 Project Structure

vidzy/
├── public/
│   ├── partials/
│   │   ├── home.html
│   │   ├── add.html
│   │   ├── edit.html
│   │   └── details.html
│   ├── app.js
│   ├── index.html
│   └── styles.css
├── routes/
│   └── videos.js
├── app.js
├── package.json
└── README.md
📦 Sample Video Format

{
  "title": "Apollo 13",
  "genre": "Drama",
  "description": "NASA must bring Apollo 13 crew home after internal damage..."
}
🧑 Author

Built as part of a university project on Web Technologies
GitHub: https://github.com/sarccasm

Let me know if you want this added into your ZIP or pushed to GitHub with `.gitignore`, 
