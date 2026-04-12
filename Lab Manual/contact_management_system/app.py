"""
Project Title: Contact Management System (Flask CRUD)
Description:
A simple contact manager built using Flask.
Supports Create, Read, Update, Delete and Search operations.
"""

from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# In-memory storage (list of dictionaries)
contacts = []


# HOME + SEARCH
@app.route('/')
def index():
    query = request.args.get('search', '').lower()

    if query:
        filtered_contacts = [
            c for c in contacts
            if query in c['name'].lower() or query in c['phone']
        ]
    else:
        filtered_contacts = contacts

    return render_template('index.html', contacts=filtered_contacts)


# ADD CONTACT
@app.route('/add', methods=['GET', 'POST'])
def add_contact():
    error = None

    if request.method == 'POST':
        name = request.form.get('name').strip()
        phone = request.form.get('phone').strip()
        email = request.form.get('email').strip()

        # ✅ Validation
        if not name or not phone or not email:
            error = "All fields are required!"
        else:
            contact = {
                'id': len(contacts),
                'name': name,
                'phone': phone,
                'email': email
            }
            contacts.append(contact)
            return redirect(url_for('index'))

    return render_template('add_contact.html', error=error)


# EDIT CONTACT
@app.route('/edit/<int:id>', methods=['GET', 'POST'])
def edit_contact(id):
    contact = contacts[id]

    if request.method == 'POST':
        contact['name'] = request.form['name']
        contact['phone'] = request.form['phone']
        contact['email'] = request.form['email']
        return redirect(url_for('index'))

    return render_template('edit_contact.html', contact=contact)


# DELETE CONTACT
@app.route('/delete/<int:id>')
def delete_contact(id):
    contacts.pop(id)

    # Reassign IDs
    for i, c in enumerate(contacts):
        c['id'] = i

    return redirect(url_for('index'))


# RUN APP
if __name__ == '__main__':
    app.run(debug=True)