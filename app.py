from flask import Flask, request, jsonify, render_template
import text2emotion as te
import nltk
import flask_cors

# Download required NLTK data
nltk.download('punkt')
nltk.download('punkt_tab')
nltk.download('stopwords')
nltk.download('vader_lexicon')

app = Flask(__name__)
flask_cors.CORS(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict_emotion', methods=['POST'])
def predict_emotion():
    data = request.get_json()
    text = data.get("text", "")
    
    if not text.strip():
        return jsonify({"error": "Text is empty"}), 400

    emotions = te.get_emotion(text)
    if not emotions:
        return jsonify({"emotion": "calm"})  # Fallback

    emotion = max(emotions, key=emotions.get)
    return jsonify({"emotion": emotion.lower()})

if __name__ == '__main__':
    app.run(debug=True)
