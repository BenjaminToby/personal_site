import React from 'react'
import { useRouter } from 'next/router';

const GeneralHeader = () => {
    const router = useRouter();

    function pushRouter(e) {
        e.preventDefault();
        let url = e.target.dataset.href;
        router.push(url);
    }

    return (
        <header>
            <a className="logo-link-block" onClick={ () => {
                pushRouter("/")
            } }><h1>Tben.me</h1></a>
            <nav>
                <a href='/' data-href="/" onClick={ (e) => {
                    pushRouter(e)
                } }>Home</a>

                <a href='/about' data-href="/about" onClick={ (e) => {
                    pushRouter(e)
                } }>About Me</a>

                <a href='/work' data-href="/work" onClick={ (e) => {
                    pushRouter(e)
                } }>My Work</a>

                <a href='/blog' data-href="/blog" onClick={ (e) => {
                    pushRouter(e)
                } }>Blog</a>

                <a data-href="#" href='/documents/Benjamin_Toby_CV-updated.pdf' target="_blank">My Resume</a>

                <a href='/contact' data-href="/contact" onClick={ (e) => {
                    pushRouter(e)
                } }>Contact Me</a>
            </nav>
        </header>
    )
}

export default GeneralHeader
