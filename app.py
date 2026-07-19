from flask import Flask, render_template, request, redirect, url_for
from database import get_connection
import pyodbc


app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/login")
def login():
    return render_template("login.html")


# ================= REGISTER =================

@app.route("/register", methods=["GET","POST"])
def register():

    if request.method == "POST":

        name = request.form["fullname"]
        email = request.form["email"]
        phone = request.form["phone"]
        password = request.form["password"]


        try:

            conn = get_connection()

            cursor = conn.cursor()


            # CHECK EMAIL ALREADY EXISTS

            cursor.execute(
                """
                SELECT Email 
                FROM ChocolateUsers
                WHERE Email=?
                """,
                (email,)
            )


            existing = cursor.fetchone()


            if existing:

                conn.close()

                return """
                <script>
                alert('Email already registered!');
                window.location.href='/register';
                </script>
                """


            # INSERT DATA

            cursor.execute(
                """
                INSERT INTO ChocolateUsers
                (FullName, Email, Phone, Password)
                VALUES (?, ?, ?, ?)
                """,
                (
                    name,
                    email,
                    phone,
                    password
                )
            )


            conn.commit()

            conn.close()


            return """
            <script>
            alert('Registration Successful!');
            window.location.href='/login';
            </script>
            """


        except pyodbc.Error as e:

            print(e)


            return """
            <script>
            alert('Database Error!');
            window.location.href='/register';
            </script>
            """


    return render_template("register.html")



# ================= CART =================

@app.route("/cart")
def cart():

    return render_template("cart.html")



# ================= DATABASE TEST =================

@app.route("/test")
def test():

    conn=get_connection()

    conn.close()

    return "DATABASE CONNECTED SUCCESSFULLY"



if __name__=="__main__":

    app.run(debug=True)
