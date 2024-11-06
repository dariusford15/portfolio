import React from 'react';


function Home() {
    return (
        <>
            <div className={'w-screen h-screen flex justify-center items-center bg-blue-400 flex-col-reverse md:flex-row'}>

                <div className={'flex items-center justify-center flex-col w-1/2'}>
                        <h2 className={'text-3xl text-center text-white font-serif mb-4'}>Hi my name is Darius.</h2>
                        <p>I'm a web developer looking to broaden my skills and to get real-world experience.</p>
                        <a href="/projects" className={'py-2 px-6 mx-1 bg-blue-600 rounded hover:bg-green-200 my-8'}>Past Work</a>
                </div>
                <img className={'border-2 border-white flex w-1/4 rounded-full heroImg'} src="/assets/linkedInPic.jpg" alt="Darius's face" />
        
    
            </div>
            

        </>
    );
}
export default Home;