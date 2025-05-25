# 📚 Emotion-Based Book Recommendation System (Vibe2book)

This project is a web-based application that recommends books based on the user's current emotional state. It uses Natural Language Processing (NLP) to detect emotions from user input and suggests relevant books accordingly.

## 🔮 Features

- Detects user's emotion from free-form text using `text2emotion`
- Recommends books categorized by emotions (Happy, Sad, Angry, Surprise)
- Simple and responsive UI with HTML/CSS/JavaScript
- Built using Python Flask for backend

---

## 🚀 Demo
![image](https://github.com/user-attachments/assets/15b6ec27-5d91-49ff-ad8e-181bcc1cd4bb)

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Python, Flask
- **NLP**: `text2emotion` (uses NLTK internally)

---

## 📁 Folder Structure

emotion-book-recommender/
│
├── app.py
├── requirements.txt
├── README.md
│
├── templates/
│ └── index.html
│
├── static/
│ ├── style.css
│ ├── script.js
│ └── images/
│ └── *.jfif (Book cover images)
│
└── screenshots/
└── app_screenshot.png (Your screenshot here)


## ⚙️ Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/emotion-book-recommender.git
   cd emotion-book-recommender
Create a virtual environment (optional but recommended)

python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
Install dependencies

pip install -r requirements.txt
Run the application

python app.py
Open in browser
http://127.0.0.1:5000/

📦 Dependencies
Create a requirements.txt with the following:

Flask
flask_cors
text2emotion
nltk
Or generate it using:

pip freeze > requirements.txt

🧠 Example Inputs
Happy: "I had such a beautiful day, everything went great!"

Sad: "I feel so lost and alone."

Angry: "This is so frustrating! Nothing is going right."

Surprise: "I wasn’t expecting that! What a twist!"

📄 License
This project is open-source and free to use under the MIT License.

🙋‍♀️ Author
Sriya Pandey
