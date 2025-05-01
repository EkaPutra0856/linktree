from flask import Flask, request, jsonify, render_template

# Initialize Flask application
app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    # This will render the index.html file from the 'templates' folder
    return render_template('index.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000)