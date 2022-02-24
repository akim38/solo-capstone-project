<h1 style='font-weight: bold'>QueWhat</h1>
<div>
<p>QueWhat is a clone inspired by <a style='font-weight: bold' href='https://www.quora.com/'>Quora</a>, a site where users can ask questions and answer questions with other users. This project is a current work in progress which will be continuously updated along with the README. Live site can be seen <a style='font-weight: bold' href='https://quewhat.herokuapp.com/'>here</a>!
<br></br> 
</p>

</div>

<h1 style='font-weight: bold'> Index </h1>
<br>
<div style='font-weight: bold'>
 <a href='https://github.com/akim38/solo-capstone-project/wiki/MVP-Feature-List'>Feature List</a> - <a href='https://github.com/akim38/solo-capstone-project/wiki/Database-Schema'>DB Schema</a> - <a href='https://github.com/akim38/solo-capstone-project/wiki/API-Documentation'>API Documentation</a> - <a href='https://github.com/akim38/solo-capstone-project/wiki/Frontend-Routes'> Frontend Routes </a>
<br>
</br>
</div>
<div>
<h1 style='font-weight: bold'>Technologies Used </h1>
<ul>
<li>Python</li>
<li>Flask</li>
<li>SQLAlchemy</li>
<li>PostgreSQL</li>
<li>WTForms</li>
<li>Flask-Login</li>
<li>Alembic</li>
<li>JavaScript</li>
<li>React</li>
<li>Redux</li>
<li>React Router</li>
<br>
</br>
</ul>
</div>

<h1 style='font-weight: bold'> Features </h1> 

###Splash Page
Users are able to sign up for an account using a unique email address and username or sign into their existing account by submitting their credentials. 

###Questions
Users are able to view questions once they are logged in. They are able to click on questions to get more details or answer them. Users are also able to post their own questions as well and add context/details to their question if they choose too. When viewing the details of a question the user has created, the user is also able to edit their question or delete the question if they choose. 

###Answers 
Users are able to answer questions they feel they can contribute to. They can view other users' answers when viewing question details. They can also edit or delete answers they have created. 

###Comments
(Coming soon.) Users will be able to comment on answers if they choose to, to either add to the answer or point out things that may not be correct. 


###Upvotes 
(Comming soon.) Users will be able to upvote or downvote on answers they think are good or bad at responding to the question. Answers will be ordered by number of upvotes with the answer with the most upvotes at the top and the least towards the bottom. 


<h1 style='font-weight: bold'> Getting Started </h1>

1. Clone this repo

    * ```git clone https://github.com/akim38/solo-capstone-project.git```

2. Install Dependencies

* Flask:

    * ``` pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt ```

* React-App:

    * ```npm install```

3. Create a .env file base on the .env.example given

4. Setup your username and database based on what you setup in your .env

5. Migrate and Seed models

    * ```pipenv shell```
    * ```flask db upgrade```
    * ```flask seed all```

6. You can start the server from the root directory. 

    * ```flask run```


7. You can start the front end from the react-app directory. 

    * ```npm start```



