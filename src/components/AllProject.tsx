import React from 'react';

function AllProject() {
    // @ts-ignore
    function ProjectTemplate({ image, title, description,link }) {
        const projectItems = image.map((images:string, index:number) => (
            <div key={index} className="flex bg-white rounded-md border border-slate-200">
                <div className="flex-1 p-10">
                    <h3 className="text-xl font-medium text-gray-700">
                        {title[index]}
                    </h3>
                    <p className="mt-2 text-slate-500">
                        {description[index]}
                    </p>
                    <a href={link[index]} className="mt-2 inline-flex text-sky-500">
                        Read More →
                    </a>
                </div>
                <div className="relative hidden h-full w-1/3 overflow-hidden lg:block">
                    <div className="absolute inset-0">
                        <img
                            src={image[index]}
                            className="h-full w-full object-cover object-left-top"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        ));

        return <>{projectItems}</>;
    }


    // const image:string = "https://d33wubrfki0l68.cloudfront.net/e5290c26cc1703e54e0afe3d1472046098ecd819/53775/new/landing/live-chat.png";
    // const image2:string = "https://d33wubrfki0l68.cloudfront.net/c43307b88fb814366e4f3a181c788796cba83faa/4c05c/new/landing/omnichannel.png"

    const images:string[] = [
        "https://d33wubrfki0l68.cloudfront.net/e5290c26cc1703e54e0afe3d1472046098ecd819/53775/new/landing/live-chat.png",
        "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~ZWGTN933YJLC/CERTIFICATE_LANDING_PAGE~ZWGTN933YJLC.jpeg",
        "https://d33wubrfki0l68.cloudfront.net/e5290c26cc1703e54e0afe3d1472046098ecd819/53775/new/landing/live-chat.png",
        "https://d33wubrfki0l68.cloudfront.net/e5290c26cc1703e54e0afe3d1472046098ecd819/53775/new/landing/live-chat.png",
        "https://d33wubrfki0l68.cloudfront.net/e5290c26cc1703e54e0afe3d1472046098ecd819/53775/new/landing/live-chat.png",
        // Add more image URLs as needed
    ];


    const titles:string[] = [
        "React| Internshala (13th August, 2023)",
        "Algorithms Specialization| Coursera (22nd October, 2022)",
        "Introduction to MongoDB| MongoDB Inc (6th May, 2022)",
        "Title 4",
        "Title 5",
    ];

    const descriptions:string[] = [
        "Completed a 6-week online training on React. Consisted of Introduction, Tic Tac Toe Game, Box Office App, Chat Application, Custom Backend, and Assignment & Summary modules.",
        "Programming and thinking skills to the next level which helped me to pursue serious software engineering, and study advanced topics in algorithms.",
        "Implemented MongoDB's document data model, managing large datasets and utilizing the CRUD API and Aggregation Framework. Streamlined data operations, improving database performance by 40%.",
        "Description 4",
        "Description 5",
    ];

    const link:string[]=[
        "https://trainings.internshala.com/view_certificate/8omokq1818r/7932x11nshc/",
        "https://www.coursera.org/account/accomplishments/specialization/ZWGTN933YJLC?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=s12n",
        "https://www.coursera.org/account/accomplishments/verify/6JSVUMJURH6G?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
        "https://trainings.internshala.com/view_certificate/8omokq1818r/7932x11nshc/",
        "https://trainings.internshala.com/view_certificate/8omokq1818r/7932x11nshc/",
        "https://trainings.internshala.com/view_certificate/8omokq1818r/7932x11nshc/",
        "https://www.coursera.org/account/accomplishments/verify/6JSVUMJURH6G?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
    ]

    return (
        <>
        <div className="text-4xl font-bold flex justify-center">
            Projects
        </div>
        <div className="flex min-h-screen items-center justify-center p-10">
            <div className="container grid max-w-screen-xl gap-8 lg:grid-cols-2 lg:grid-rows-2" >
                <ProjectTemplate image={images} title={titles} description={descriptions} link={link}/>
            </div>
        </div>
        </>
    );
}

export default AllProject;