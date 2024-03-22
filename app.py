from flask import Flask, render_template, request, jsonify
from extract_information import query_data
app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/process', methods=['POST'])
def process():
    print("fuck")
    user_input = request.json
    last_string = user_input['messages'][-1]["content"]
    result = query_data(last_string)
    diction =     {
  "id": 'chatcmpl-95JSEgjBsxzIEuEBow6720EaueOKo',
  "object": 'chat.completion',
  "created": 1711053450,
  "model": 'gpt-3.5-turbo-0125',
  "choices": [
    {
      "index": 0,
      "message": {"sender":"ChatGPT","content":result},
      "logprobs": 0,
      "finish_reason": 'stop'
    }
  ],
  "usage": { 'prompt_tokens': 140, 'completion_tokens': 21, 'total_tokens': 161 },
  'system_fingerprint': 'fp_4f0b692a78'
}

    response =  jsonify(diction)
    # Set CORS headers here
    response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
    return response, 200

if __name__ == '__main__':
    app.run(debug=True)