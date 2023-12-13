import React from 'react';


function Home() {
    return (
        <>
            <div className={'w-screen h-screen flex justify-center items-center bg-blue-400 md:flex-col'}>

                <div className={'flex items-center justify-center flex-col'}>
                    
                    <img className={'flex w-1/4 rounded-full'} src="assets/LinkedInPic.jpg" alt="" />
                        <div className={'flex flex-col w-3/4 mt-2'}>
                            <h2 className={'text-3xl text-center text-white font-serif mt-4'}>Hi my name is Darius Ford. I'm a Web Developer!</h2>
                            <div className={"flex items-center justify-center"}>
                            <a href="/projects" className={'flex w-1/4 py-2 px-6 mx-1 bg-blue-600 rounded hover:bg-green-200 my-8'}>See My Past Work</a>
                            </div>
                        </div>
        
    
                </div>
               


            </div>

        </>
    );
}
export default Home;