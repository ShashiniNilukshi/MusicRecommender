from flask import Flask, jsonify, request
import pickle
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load data from the pkl file
def load_data():
    with open('similarity.pkl', 'rb') as f:
        data = pickle.load(f)
    return data

# Recommender function
def recommender(Song_name):
    # Load similarity matrix and DataFrame
    similar = pickle.load(open("Similarity", "rb"))
    df = pickle.load(open("df", "rb"))
    
    # Find index of the input song
    idx = df[df['song'] == Song_name].index[0]
    
    # Sort distances and get top 5 similar songs
    distances = sorted(list(enumerate(similar[idx])), reverse=True, key=lambda x: x[1])
    songs = [df.iloc[distances[i][0]].song for i in range(1, 6)]
    
    return songs

# Endpoint to serve the recommended songs
@app.route('/api/recommend', methods=['POST', 'GET'])

def recommend():
    if request.method == 'POST':
        if request.is_json:
            data = request.get_json()
            if 'song' in data:
                song_name = data['song']
                recommended_songs = recommender(song_name)
                return jsonify(recommended_songs)
            else:
                return jsonify({'error': 'Missing song name in JSON data'}), 400
        else:
            return jsonify({'error': 'Request Content-Type must be application/json'}), 415
    elif request.method == 'GET':
        return jsonify({'error': 'GET requests are not supported for this endpoint'}), 405

if __name__ == '__main__':
    app.run(debug=True)
