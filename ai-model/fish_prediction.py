from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    return jsonify({'fish_density': 75})

if __name__ == '__main__':
    app.run(port=5001)
