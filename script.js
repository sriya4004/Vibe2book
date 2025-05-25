const books = {
  happy: [
    { title: "Ikigai", url: "https://m.media-amazon.com/images/I/71tbalAHYCL.jpg" },
    { title: "The Power of Your Subconscious Mind", url: "static/images/thepowerofyoursubconsciousmind.jfif"},
    { title: "The Alchemist", url: "https://m.media-amazon.com/images/I/71aFt4%2BOTOL.jpg" },
    { title: "The Secret", url: "static/images/secret.jfif" },
    { title: "Good Vibes, Good Life", url: "static/images/good.jfif" },
    { title: "Atomic Habits", url: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg" },
    { title: "Do It Today", url: "https://m.media-amazon.com/images/I/61ZPDQOjw-L.jpg" },
    { title: "Think Like a Monk", url: "static/images/thinklikeamonk.jfif" },
    { title: "Rich Dad Poor Dad", url: "https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg" },
    { title: "The Psychology of Money", url: "static/images/the.jfif" },
    { title: "How to Win Friends & Influence People", url: "static/images/how.jfif" },
    { title: "Life's Amazing Secrets", url: "static/images/lifeamazingsecrets.jfif" },
    { title: "Wings of Fire", url: "static/images/wingsoffire.jfif" },
    { title: "You Can", url: "static/images/youcan.jfif" },
    { title: "My Gita", url: "static/images/mygita.jfif" }
  ],
  sad: [
    { title: "It Ends With Us", url: "https://m.media-amazon.com/images/I/81s0B6NYXML.jpg" },
    { title: "A Man Called Ove", url: "static/images/amancalledove.jfif" },
    { title: "The Fault in Our Stars", url: "static/images/thefaultinourstars.jfif" },
    { title: "Me Before You", url: "static/images/mebeforeyou.jfif" },
    { title: "The Kite Runner", url: "static/images/thekiterunner.jfif" },
    { title: "Eleanor Oliphant is Completely Fine", url: "static/images/eleanor.jfif" },
    { title: "Before We Were Strangers", url: "static/images/beforewewerestrangers.jfif" },
    { title: "Verity", url: "static/images/verity.jfif" },
    { title: "The Silent Patient", url: "static/images/thesilentpatient.jfif" },
    { title: "Reminders of Him", url: "static/images/remindersofhim.jfif" },
    { title: "Ugly Love", url: "static/images/uglylove.jfif" },
    { title: "All the Bright Places", url: "static/images/allthebrightplaces.jfif" },
    { title: "A Little Life", url: "static/images/alittlelife.jfif" },
    { title: "We Were Liars", url: "static/images/wewereliars.jfif" },
    { title: "November 9", url: "static/images/nov9.jfif" }
  ],
  angry: [
    { title: "The Subtle Art of Not Giving a F*ck", url: "https://m.media-amazon.com/images/I/71QKQ9mwV7L.jpg" },
    { title: "Can't Hurt Me", url: "static/images/hurt.jfif" },
    { title: "Unfu*k Yourself", url: "static/images/unfuck.jfif" },
    { title: "Think Again", url: "static/images/think.jfif" },
    { title: "12 Rules for Life", url: "static/images/12.jfif" },
    { title: "Discipline Equals Freedom", url: "static/images/dis.jfif" },
    { title: "Extreme Ownership", url: "static/images/extreme.jfif" },
    { title: "No More Mr. Nice Guy", url: "static/images/no.jfif" },
    { title: "Boundaries", url: "static/images/bound.jfif" },
    { title: "Radical Acceptance", url: "static/images/radical.jfif" },
    { title: "The Courage to Be Disliked", url: "static/images/dislike.jfif" },
    { title: "The Mountain Is You", url: "static/images/mountain.jfif" },
    { title: "Grit", url: "static/images/grit.jfif" },
    { title: "Drive", url: "static/images/drive.jfif" },
    { title: "Ego is the Enemy", url: "static/images/ego.jfif" }
  ],
  surprise: [
    { title: "The White Tiger", url: "static/images/white.jfif" },
    { title: "Sacred Games", url: "static/images/sacred.jfif" },
    { title: "The Palace of Illusions", url: "static/images/palace.jfif" },
    { title: "The Immortals of Meluha", url: "static/images/imm.jfif" },
    { title: "2 States", url: "static/images/states.jfif" },
    { title: "The God of Small Things", url: "static/images/god.jfif" },
    { title: "Q&A", url: "static/images/qa.jfif" },
    { title: "Five Point Someone", url: "static/images/five.jfif" },
    { title: "Half Girlfriend", url: "static/images/half.jfif" },
    { title: "The Girl in Room 105", url: "static/images/105.jfif" },
    { title: "The Secret of the Nagas", url: "static/images/nagas.jfif" },
    { title: "The Blue Umbrella", url: "static/images/um.jfif" },
    { title: "Chanakya’s Chant", url: "static/images/chan.jfif" },
    { title: "The Ministry of Utmost Happiness", url: "static/images/mini.jfif" },
    { title: "A Suitable Boy", url: "static/images/suit.jfif" }
  ]
};

function recommendBooks(emotion) {
  const container = document.getElementById('recommendations');
  container.innerHTML = '';

  if (emotion && books[emotion]) {
    books[emotion].forEach(book => {
      const card = document.createElement('div');
      card.className = 'book-card';

      const img = document.createElement('img');
      img.src = book.url;
      img.alt = book.title;

      const caption = document.createElement('p');
      caption.textContent = book.title;

      card.appendChild(img);
      card.appendChild(caption);
      container.appendChild(card);
    });
  } else {
    container.innerHTML = '<p>No recommendations available for this emotion.</p>';
  }
}

async function getEmotionAndRecommend() {
  const text = document.getElementById('userInput').value.trim();
  const container = document.getElementById('recommendations');
  container.innerHTML = '';

  if (!text) {
    container.innerHTML = '<p>Please enter how you are feeling.</p>';
    return;
  }

  try {
    const response = await fetch('/predict_emotion', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text })
    });

    const result = await response.json();
    console.log("Emotion received:", result);

    const emotion = result.emotion;

    let mapped;
    switch (emotion) {
      case 'happy':
        mapped = 'happy';
        break;
      case 'sad':
        mapped = 'sad';
        break;
      case 'angry':
        mapped = 'angry';
        break;
      case 'fear':
      case 'calm':
      case 'surprise':
      default:
        mapped = 'surprise'; // use "surprise" as fallback
    }

    container.insertAdjacentHTML('beforeend', `<h2>Books for when you're feeling <em>${mapped}</em>:</h2>`);
    recommendBooks(mapped);
  } catch (error) {
    container.innerHTML = '<p style="color:red;">⚠️ Error fetching emotion. Is your Flask server running?</p>';
    console.error(error);
  }
}