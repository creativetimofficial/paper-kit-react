/*!

=========================================================
* Paper Kit React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
    Container
} from "reactstrap";

// core components

// index sections
import SectionMiniProject from "views/index-sections/SectionMiniProject";

const projects = [
    {
        title: "To Do List",
        description: "Users can create a list of tasks in the application and "
            + "the user can also mark the task as strikethrough when completed. "
            + "Other tasks of users will not be visible on others. "
            + "The application allows users to edit and delete any task. ",
        source: "https://github.com/henrickdeguzman/task-manager-frontend",
        live: "",
        tech: [
            "MongoDB",
            "Express",
            "Angular",
            "Node JS"
        ],
        demo: [
            {
                src: require("assets/img/projects/ToDoList_1.jpg"),
                altText: "",
                caption: ""
            },
            {
                src: require("assets/img/projects/ToDoList_2.jpg"),
                altText: "",
                caption: ""
            },
            {
                src: require("assets/img/projects/ToDoList_3.jpg"),
                altText: "",
                caption: ""
            }
        ]
    },
    {
        title: "Robofriends",
        description: "The application uses external API for the photo of robots as well as their names. "
            + "Users can search robot names and change the shown robot based on the searched name. ",
        source: "https://github.com/henrickdeguzman/robofriends",
        live: "https://henrickdeguzman.github.io/robofriends",
        tech: [
            "React",
            "Node JS"
        ],
        demo: [
            {
                src: require("assets/img/projects/Robo_1.jpg"),
                altText: "",
                caption: ""
            },
            {
                src: require("assets/img/projects/Robo_2.jpg"),
                altText: "",
                caption: ""
            }
        ]
    },
    {
        title: "Face Recognition",
        description: "Users can enter URL of image and the application will detect the face on the image. "
            + "The application uses external API called Clarify for the detection of the face. "
            + "The users will be stored in the database with the hash password for security. "
            + "The goal of the application is to enter many image URLs.",
        source: "https://github.com/henrickdeguzman/face-recognition-app",
        live: "https://face-recognition-app.onrender.com/",
        tech: [
            "React",
            "Express",
            "Node JS",
            "PostgreSQL"
        ],
        demo: [
            {
                src: require("assets/img/projects/FaceRecognition_1.jpg"),
                altText: "",
                caption: ""
            },
            {
                src: require("assets/img/projects/FaceRecognition_2.jpg"),
                altText: "",
                caption: ""
            },
            {
                src: require("assets/img/projects/FaceRecognition_3.jpg"),
                altText: "",
                caption: ""
            },
            {
                src: require("assets/img/projects/FaceRecognition_4.jpg"),
                altText: "",
                caption: ""
            },
            {
                src: require("assets/img/projects/FaceRecognition_5.jpg"),
                altText: "",
                caption: ""
            }
        ]
    }
];

function SectionProjects() {
    return (
        <>
            <div className="section pt-o" id="carousel">
                <h1 className="title text-center">Projects</h1>
                <Container>
                    {projects.map((project) => {
                        return (
                            <SectionMiniProject
                                title={project.title}
                                description={project.description}
                                source={project.source}
                                live={project.live}
                                techs={project.tech}
                                items={project.demo} />
                        );
                    })}
                </Container>
            </div>
        </>
    );
}

export default SectionProjects;
