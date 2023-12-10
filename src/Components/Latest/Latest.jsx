
const Latest = () => {
    const myPosts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    return (
        <div className="mt-36">
            <h1 className="font-bold text-xl">Latest Post</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    myPosts.map(element => <>
                        <div
                            className="relative flex max-w-[24rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                            <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
                                <img
                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
                                    alt="ui/ux review check" />
                            </div>
                            <div className="p-6">
                                <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                    UI/UX Review Check
                                </h4>
                                <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
                                    Because it&apos;s about motivating the doers. Because I&apos;m here to
                                    follow my dreams and inspire others.
                                </p>
                            </div>
                            <div className="flex items-center justify-between p-6">
                                <div className="flex items-center">
                                    <img alt="natali craig"
                                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
                                        className="h-9 w-9 !rounded-full  border-2 border-white hover:z-10" />
                                    <p className="ml-2">John Doe</p>
                                </div>
                                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                    January 10, 2020
                                </p>
                            </div>
                        </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default Latest;