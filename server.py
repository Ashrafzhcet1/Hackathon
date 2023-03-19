from flask import Flask, jsonify, request
from transformers import pipeline
from flask_cors import CORS

app = Flask(__name__)

cors = CORS(app, resources={r"/summarize": {"origins": "*"}})


@app.route('/summarize', methods=['POST'])
def setName():

    body = request.get_json()
    text = body['text']

    summarizer = pipeline("summarization")
    summarizedText = summarizer(text, max_length=130, min_length=30, do_sample=False)

    return jsonify({'data': summarizedText})


if __name__ == '__main__':
    app.run(debug=True)
