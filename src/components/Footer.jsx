import React from 'react'


function Footer() {
  return (
    <>
    <footer className='footer bg-light' style={{height:"250px"}}>
        <div className='footerlist'>
        <ul className="list-inline mb-2">
                    <li className="list-inline-item"><a href="#!">About</a></li>
                    <li className="list-inline-item">⋅</li>
                    <li className="list-inline-item"><a href="#!">Contact</a></li>
                    <li className="list-inline-item">⋅</li>
                    <li className="list-inline-item"><a href="#!">Terms of Use</a></li>
                    <li className="list-inline-item">⋅</li>
                    <li className="list-inline-item"><a href="#!">Privacy Policy</a></li>
        </ul>
        <p>© Your Website 2023. All Rights Reserved.</p>
        </div>
        
    </footer>
    </>
  )
}

export default Footer