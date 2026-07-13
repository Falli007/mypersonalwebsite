import os

from flask import Flask, render_template, request, redirect, url_for, session

app = Flask(__name__)
app.secret_key = os.environ["SESSION_SECRET"]
RESUME_PASSWORD = os.environ["RESUME_PASSWORD"]

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/resume-login', methods=['GET', 'POST'])
def resume_login():
    if request.method == 'POST':
        if request.form['password'] == RESUME_PASSWORD:
            session['resume_authorized'] = True
            return redirect(url_for('resume'))
        else:
            return "Wrong password, please try again."
    return render_template('resume_login.html')

@app.route('/resume')
def resume():
    if not session.get('resume_authorized'):
        return redirect(url_for('resume_login'))
    return render_template('resume.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/projects')
def projects():
    return render_template('projects.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/send_message', methods=['POST'])
def send_message():
    # No email provider is configured yet - log the enquiry server-side for now.
    print('New contact form submission:', dict(request.form))
    return redirect(url_for('contact'))

if __name__ == '__main__':
    app.run(debug=True)
