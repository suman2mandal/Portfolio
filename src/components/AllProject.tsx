import React from 'react';

function AllProject() {
    // @ts-ignore
    function ProjectTemplate({ image, title, description }) {
        return (
            <>
                <div className="flex bg-white rounded-md border border-slate-200">
                    <div className="flex-1 p-10">
                        <h3 className="text-xl font-medium text-gray-700">
                            {title}
                        </h3>
                        <p className="mt-2 text-slate-500">
                            {description}
                        </p>
                        <a href="" className="mt-2 inline-flex text-sky-500">
                            Read More →
                        </a>
                    </div>
                    <div className="relative hidden h-full w-1/3 overflow-hidden lg:block">
                        <div className="absolute inset-0">
                            <img
                                src={image}
                                className="h-full w-full object-cover object-left-top"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </>
        );
    }

    const image = "https://d33wubrfki0l68.cloudfront.net/e5290c26cc1703e54e0afe3d1472046098ecd819/53775/new/landing/live-chat.png";
    const image2 = "https://d33wubrfki0l68.cloudfront.net/c43307b88fb814366e4f3a181c788796cba83faa/4c05c/new/landing/omnichannel.png"

    const Title = "Omnichannel support center";
    const Description =
        "Chatwoot connects with popular customer communication channels like\n" +
        "                                Email, Website live-chat, Facebook, Twitter, WhatsApp, Instagram,\n" +
        "                                Line, etc., and helps you deliver a consistent customer experience\n" +
        "                                across channels."


    return (
        <>
        <div className="text-4xl font-bold flex justify-center">
            Projects
        </div>
        <div className="flex min-h-screen items-center justify-center p-10">
            <div className="container grid max-w-screen-xl gap-8 lg:grid-cols-2 lg:grid-rows-2" >
                <ProjectTemplate image={image} title={Title} description={Description}/>
                <ProjectTemplate image={image} title={Title} description={Description}/>
                <ProjectTemplate image={image} title={Title} description={Description}/>
                <ProjectTemplate image={image} title={Title} description={Description}/>
                <ProjectTemplate image={image} title={Title} description={Description}/>
                <ProjectTemplate image={image} title={Title} description={Description}/>
            </div>
        </div>
        </>
    );
}

export default AllProject;