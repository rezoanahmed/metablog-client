import Logo from "../Logo/Logo";

const Footer = () => {
    return (
        <div className="mt-36">
            <footer className="footer p-10 bg-base-200 text-base-content">
                <nav className="max-w-xs">
                    <header className="footer-title">About</header>
                    <p className="text-justify mb-2">
                    Meta Blog is a dynamic online platform that explores a myriad of topics, blending insightful commentary with engaging content. From tech trends and lifestyle hacks to cultural phenomena and thought-provoking essays, Meta Blog offers a diverse range of perspectives. </p>
                    <p><span className="font-bold">Email:</span> info@metablog.com</p>
                    <p><span className="font-bold">Contact:</span> +880 1234 5678</p>
                    
                </nav>
                <nav>
                    <header className="footer-title">Quick Link</header>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">About</a>
                    <a className="link link-hover">Blog</a>
                    <a className="link link-hover">Archive</a>
                    <a className="link link-hover">Author</a>
                </nav>
                <nav>
                    <header className="footer-title">Category</header>
                    <a className="link link-hover">Lifestyle</a>
                    <a className="link link-hover">Technology</a>
                    <a className="link link-hover">Travel</a>
                    <a className="link link-hover">Business</a>
                    <a className="link link-hover">Economy</a>
                    <a className="link link-hover">Sports</a>
                </nav>
                <nav>
                    <div className="p-8 rounded-md shadow-md bg-white flex flex-col justify-center gap-2">
                        <h1 className="text-lg font-bold">Weekly Newsletter</h1>
                        <p>Get blog articles and offers via email</p>
                        <input type="text" className="input input-md" placeholder="Your Email" />
                        <button className="btn btn-primary">Subscribe</button>

                    </div>
                </nav>
            </footer>
            <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
                <aside className="items-center grid-flow-col">
                    <Logo></Logo>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                    </div>
                </nav>
            </footer>
        </div >
    );
};

export default Footer;