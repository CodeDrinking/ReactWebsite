import React from 'react'

function Contact() {
  return  <div className='contact'> 
    <main>
        <h1>Contact Us</h1>

        <form action="">

            <div>
                <label htmlFor=""></label>
                <input type="text" required placeholder='abc' />

            </div>

            <div>
                <label htmlFor=""></label>
                <input type="email" required placeholder='abx@gmail.com' />

            </div>

            <div>
                <label htmlFor=""></label>
                <input type="text" required placeholder='tell us abaout your query' />

            </div>
            <button type='submit'>Send</button>

        </form>
    </main>
  </div>
}

export default Contact