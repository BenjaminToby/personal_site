import React from 'react'
import { useRouter } from 'next/router';

const GeneralHeader = () => {
    const router = useRouter();

    function pushRouter(e) {
        let url = e.target.dataset.href;
        router.push(url);
    }

    return (
        <header>
            <a className="logo-link-block" onClick={ () => { pushRouter("/") } }><h1>Tben.me</h1></a>
            <nav>
                <a data-href="/" onClick={ (e) => { pushRouter(e) } }>Home</a>
                <a data-href="/about" onClick={ (e) => { pushRouter(e) } }>About Me</a>
                <a data-href="/work" onClick={ (e) => { pushRouter(e) } }>My Work</a>
                <a data-href="#" href='/documents/Benjamin_Toby_CV-updated.pdf' target="_blank">My Resume</a>
                <a data-href="/contact" onClick={ (e) => { pushRouter(e) } }>Contact Me</a>
            </nav>
        </header>
    )
}

export default GeneralHeader
