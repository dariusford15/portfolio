import React from 'react';


function About() {
    const Education = [
        {
            college: "Colorado Technical University",
            details: [
                { info: "Degree: Bachelor's of Science in Information Technology: Specialization in Web Development" },
                { info: "GPA: 3.6" },
                { info: "Date: 2018 - 2020" },
            ]
        }
    ]
    return (
        <>
            <div className={"flex justify-center items-center flex-col bg-blue-400"}>
                <h1 className="mt-5 text-3xl text-white text-center underline">Education</h1>
                {Education.map((item) =>
                    <div>
                        <h1 className={'pt-5 text-xl text-center '}>{item.college}</h1>
                        <ul className={"text-center"}>
                            {item.details.map((description) =>
                                <li className="">{description.info}</li>
                            )}
                        </ul>
                    </div>
                )}
                <h1 className="pt-5 pb-5 text-3xl text-white text-center underline">About Me</h1>
                <div class="box">
                    <img src="/assets/portfolio.jpg" alt="" class="box-img" width="200px" height="300px" />
                        <h5>Web Developer - Web Designer</h5>
                        <p>I am a web developer, who enjoys creating websites that are appealing to the eye. I am a graduate of Colorado Technical University with a bachelors in Information Technology with a specialization in Web Development and also have a Full-Stack Web Development Certification.
                        My experience is shown through projects done through QuickStart. My main focus as of now is working with HTML, CSS, JavaScript and React, but I’m open to take on other technologies.
                        </p>
                        <ul>
                            <li><a href="https://www.facebook.com"><i class="fab fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="https://www.instagram.com"><i class="fab fa-instagram"></i></a></li>
                        </ul>
                </div>
            </div>
        </>
    );
}
export default About;
