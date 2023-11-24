import React from 'react';

function Education() {
    return (
        <>
            <div className="text-4xl font-bold flex justify-center">
                Education
            </div>
            {/* component */}
            <div className="container mx-auto w-full h-full">
                <div className="relative wrap overflow-hidden p-10 h-full">
                    <div
                        className="border-2-2 absolute dark:border-white border-gray-700 h-full border"
                        style={{ left: "50%" }}
                    />
                    {/* right timeline */}
                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                        <div className="order-1 w-5/12" />
                        <div className="z-20 flex items-center order-1 dark:bg-white bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                            <h1 className="mx-auto font-semibold text-lg dark:text-black text-white">1</h1>
                        </div>
                        <div className="order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-4">
                            <h3 className="mb-3 font-bold text-gray-800 text-xl">Lorem Ipsum</h3>
                            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text
                                ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book.
                            </p>
                        </div>
                    </div>
                    {/* left timeline */}
                    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                        <div className="order-1 w-5/12" />
                        <div className="z-20 flex items-center order-1 dark:bg-white bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                            <h1 className="mx-auto text-white font-semibold dark:text-black text-lg">2</h1>
                        </div>
                        <div className="order-1 bg-slate-600 rounded-lg shadow-xl w-5/12 px-6 py-4">
                            <h3 className="mb-3 font-bold text-white text-xl">Lorem Ipsum</h3>
                            <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text
                                ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book.
                            </p>
                        </div>
                    </div>
                    {/* right timeline */}
                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                        <div className="order-1 w-5/12" />
                        <div className="z-20 flex items-center order-1 dark:bg-white bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                            <h1 className="mx-auto font-semibold text-lg dark:text-black text-white">3</h1>
                        </div>
                        <div className="order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-4">
                            <h3 className="mb-3 font-bold text-gray-800 text-xl">Lorem Ipsum</h3>
                            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text
                                ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book.
                            </p>
                        </div>
                    </div>
                    {/* left timeline */}
                    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                        <div className="order-1 w-5/12" />
                        <div className="z-20 flex items-center order-1 dark:bg-white bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                            <h1 className="mx-auto text-white font-semibold dark:text-black text-lg">4</h1>
                        </div>
                        <div className="order-1 bg-slate-600 rounded-lg shadow-xl w-5/12 px-6 py-4">
                            <h3 className="mb-3 font-bold text-white text-xl">Lorem Ipsum</h3>
                            <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text
                                ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Education;