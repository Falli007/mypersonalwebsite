from flask import Flask, render_template, request, redirect, url_for, session

app = Flask(__name__)
app.secret_key = "JesusLovesMe1996#"  # Replace with a real secret

@app.route('/resume-login', methods=['GET', 'POST'])
def resume_login():
    if request.method == 'POST':
        # Check if password is correct
        if request.form['password'] == 'Fredzi1996#':
            session['resume_authorized'] = True
            return redirect(url_for('resume'))
        else:
            return "Wrong password, please try again."
    return render_template('resume_login.html')

@app.route('/resume')
def resume():
    # Check if the user is authorized
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

if __name__ == '__main__':
    app.run(debug=True)
