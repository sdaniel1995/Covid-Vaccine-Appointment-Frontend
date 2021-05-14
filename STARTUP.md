# Prerequisites
   - Have java installed. Click the link for instructions on installation ([java](https://www.oracle.com/java/technologies/javase-downloads.html)).
   - Have gradle installed. Click the link for instructions on insallation ([gradle](https://gradle.org/install/)).
   - Have node.js installed. Click the link for instructions on installation ([node.js](https://nodejs.org/en/download/).)
   - Have git installed. Click the lik for instructions on installation ([git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)).
   - Clone the backend and front end repositiory to local machine. Run these commands after installation of git to get repositories:
       - `git clone https://github.com/sdaniel1995/Covid-Vaccine-Appointment-Backend.git`
       - `git clone https://github.com/sdaniel1995/Covid-Vaccine-Appointment-Frontend.git`
   
# Getting Started
- Open VS Code and open the folder where the cloned frontend repository exist.
- Run the following commands in the terminal: 
    - `npm install (in a package directory, no arguments)`
        -  By default, npm install will install all modules listed as dependencies in package.json. With the --production flag (or when the NODE_ENV environment variable is set to production), npm will not install modules listed in devDependencies. To install all modules listed in both dependencies and devDependencies when NODE_ENV environment variable is set to production, you can use --production=false.
     -  `npm start`
-  Open VS code and open the folder where teh cloned backend repository exist.
-  Run the following command in the terminal:
   - `cd covid_vaccine`
   - `gradle bootRun`
