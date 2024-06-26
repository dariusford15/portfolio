import React from 'react';

import Card from '../components/Card';


function Projects(){

    const projects = [
        {
            project: "Project 1",
            title: "Basic Business or Personal Website",
            details: [
                {info:"created at least three separate HTML pages"},
                {info:"created a stylesheet with CSS to style all the HTML pages"},
                {info:"used at least one image and a form that includes at least three fields"},
            ],
            link: "https://github.com/dariusford15/project1"
        },
        {   
            project: "Project 2",
            title: "Website with Search Engine",
            details: [
                {info: "created GIPHY search engine that allows user to enter and submit a keyword and makes a request to the GIPHY API based on that keyword"},
                {info: "the API receives and parses the response and displays images on the page from that response using a custom CSS grid to display the images"},
                {info: "created a responsive site that works well on both desktop and mobile devices"},
            ],
            link: "https://github.com/dariusford15/project2"
        },
        {
            project: "Project 3",
            title: "Task Management Web App",
            details: [
                {info: "created an app that has at least two views"},
                {info: "created an app that displays a list of to-do items that allows the user to add a new item to the list"},
                {info: "offered a way for a task to be marked as completed, a way for a task to be removed from the list and a way to view either all to-dos, completed to-dos or incomplete to-dos"},
            ],
            link: "https://github.com/dariusford15/Project-3"
        },
        {
            project: "Project 4",
            title: "Trading Application Project",
            details: [
                {info: "created a trading screen that is split into two parts"},
                {info: "user has the ability to sell stock and specify the quantity they want to sell based off of what the user has purchased"},
                {info: "implemented a Transaction History view that allows the user to see their trading history in the form of a list of transactions"},
            ],
            link: "https://github.com/dariusford15/stock-app-web"
        },
        {
            project: "Project 5",
            title: "Question App",
            details: [
                {info: "created a dashboard that allows the user to select a category that takes them screen that consists of questions and answers based on that category"},
                {info: "created a dashboard that allows the user to create a question or respond to a question with an answer"},
                {info: "created a database for the backend of the site to keep track of answers, categories, questions and users"},
            ],
            link: "https://github.com/dariusford15/question-app-web"
        },
    ]
    
    return (
        <>
        <div className={'bg-blue-400 h-full'}>
        <div className= {'flex flex-col gap-y-4 md:grid md:grid-rows-2 md:grid-flow-col md:gap-4 p-4'}>
           {projects.map((item) => (
                
                <Card
                    key={item.project}
                    title={item.title}
                    url={item.link}
                    description={item.details.map((description,index) => (
                        <li key={index}>{description.info}</li>
                        ))}
                />
                ))}
           </div>
        </div>
        </>
        )
}
export default Projects;