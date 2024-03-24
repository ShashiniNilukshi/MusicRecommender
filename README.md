
# Rythem Day Music Recommender

## Project Description
Rythem Day Music Recommender is a web application designed to provide users with recommendations for songs that match the vibe of their favorite tracks. Leveraging machine learning techniques, particularly cosine similarity, the application analyzes user input and suggests songs with similar characteristics.
## Front End Development
The front end of the project is developed using React.js, a popular JavaScript library for building user interfaces. HTML, CSS, and JavaScript are utilized to create the user interface components, including input forms, buttons, and displays for recommended songs. React Router is employed for navigation between different pages within the application, providing seamless user experience.
## Machine Learning Model
The core functionality of the music recommender system is powered by a machine learning model developed using Python in Jupyter Notebooks. The model employs cosine similarity, a mathematical measure, to calculate the similarity between vectors representing songs. Each song is represented as a vector in a multi-dimensional space, where each dimension corresponds to a specific feature of the song (e.g., tempo, genre, mood). By comparing the cosine of the angle between vectors, the model identifies songs with similar characteristics.
## Backend Integration with Flask
To connect the front end with the machine learning model, Flask, a micro web framework for Python, is utilized as the backend server. Flask provides a simple and lightweight framework for handling HTTP requests and responses. The frontend sends user input (favorite song) to the backend via HTTP requests, and the backend processes this input using the machine learning model to generate song recommendations. The recommended songs are then sent back to the frontend for display to the user.

### To install and set up the Rythem Day Music Recommender project, follow these steps:

#### Prerequisites
> Node.js and npm installed on your machine for frontend development.
Python installed on your machine for backend and machine learning model development.

Jupyter Notebook installed for running the machine learning model development.

Git installed for cloning the project repository (optional but recommended).

#### Downloading the Pickle File
Dowbload the similarity.pkl file from https://drive.google.com/file/d/1d6T7wayvFmUmXZvAzXV46I_Fc2kRx9i-/view?usp=sharing

