import React from 'react';
import '../styles/Main.css'

export default function Main() {
    return (
        <main>
            <div className="container">
                <div className='ProfilePicture'>
                </div>
                <section className='contact'>
                    <h3 className='authorName'>Laura Smith</h3>
                    <p className='authorOccupation'> Frontend Developer</p>
                    <p className='authorContact'>laurasmith.website</p>
                    <div className='contactBtns'>
                        <button type='button'><i class="fa-solid fa-envelope"></i> Email</button>
                        <button type='button'><i class="fa-brands fa-linkedin"></i> Linkedln</button>
                    </div>
                </section>
                <section className='about'>
                    <h4>About</h4>
                    <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                </section>
                <section className='intrests'>
                    <h4>Intrests</h4>
                    <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                </section>
                <footer>
                    <i class="fa-brands fa-twitter-square"></i>
                    <i class="fa-brands fa-facebook-square"></i>
                    <i class="fa-brands fa-instagram-square"></i>
                    <i class="fa-brands fa-github-square"></i>
                </footer>
            </div>
        </main>
    )
}