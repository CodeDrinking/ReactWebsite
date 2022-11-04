import React from 'react'
import '../styles/Home.scss'
import vg from "../assets/dumyy2.webp"
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from "react-icons/ai"

const Home = () => {
    return (
        <>
            <div className='home'>
                <main>
                    <h1>BrightStar</h1>
                    <p>Solution to all your problems</p>
                </main>
            </div>

            <div className="home2">
                <img src={vg} alt="Graphics" />
                <div>
                    <p>This handy tool helps you create dummy text for all your layout needs.
                        We are gradually adding new functionality and we welcome your suggestions and feedback.</p>
                </div>
            </div>
            <div id='about' className='home3'>
                <div>
                    <h1>Who are we ?</h1>
                    <p>
                        A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout,
                        we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph.
                    </p>
                </div>
            </div>

            <div className="home4" id='brand'>
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div 
                        style={{
                            animationDelay:  "0.3s",
                            }}
                        >
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>

                        <div 
                        style={{
                            animationDelay:  "0.5s",
                            }}
                        >
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>

                        <div 
                        style={{
                            animationDelay:  "0.7s",
                            }}
                        >
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>

                        <div 
                        style={{
                            animationDelay:  "1s",
                            }}
                        >
                            <AiFillYoutube />
                            <p>Youtube</p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}




export default Home