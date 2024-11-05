import React from 'react';


function Skills(){
    return(
        <>
        <div className={'bg-blue-400 h-full flex flex-col justify-center items-center'}>
            <div className={'width-full'}>
                <h1 className={'my-4 text-5xl text-white font'}>Web Technologies</h1>
                <hr/>
            </div>
            <div className={"grid grid-cols-2 gap-4"}>
                <a href="https://www.w3schools.com/css/"><img src="images/css3-icon.png" alt="CSS logo"/></a>
                <a href="https://www.w3schools.com/html/default.asp"><img src="images/html-icon.png" alt="HTML logo"/></a>
                <a href="https://www.w3schools.com/js/default.asp"><img src="images/javascript-icon.png" alt="JavaScript Logo"/></a>
                <a href="https://reactjs.org"><img src="images/react-icon.png" alt="React Logo"/></a>
                <a href="https://github.com"><img src="images/github-icon.png" alt="GitHub Logo"/></a>
                <a href="https://www.python.org"><img className={'w-52 h-52'}src="images/python.png" alt="Python Logo"/></a>
            </div>
        </div>
        </>
    )
    
}
export default Skills;