import React from 'react'

function Images() {
  return (
    <div className="Container1">
        <div className='Text'>
            <div className="descr"> 
            <h3>Fully Responsive Design</h3>
            <p>When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!</p>
            </div>
        </div>
        <div className='Image'>
            <img src="https://m.media-amazon.com/images/I/61VuVU94RnL._AC_UY218_.jpg" className="card-img-top" alt="..." style={{height:"500px",width:"250px"}}/>  
        </div>
        <div className='Image'>
            <img src="https://as2.ftcdn.net/v2/jpg/02/10/19/09/1000_F_210190980_xz3EQUjljVIenoREAY03e76L4R20DLc1.jpg" className="card-img-top" alt="..." style={{height:"500px",width:"250px"}}/>  
        </div>
        <div className='Text'>
        <div className="descr">
            <h3>Updated For Bootstrap 5</h3>
            <p>Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!</p>
        </div>
        </div>
        <div className='Text'>
        <div className="descr"> 
            <h3>Easy to Use & Customize</h3>
            <p>Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!</p>
        </div>
        </div>
        <div className='Image'>
            <img src="https://m.media-amazon.com/images/I/41At6UlfYJL._SY445_SX342_QL70_FMwebp_.jpg" className="card-img-top" alt="..." style={{height:"500px",width:"250px"}}/>  
        </div>
    </div>
  )
}

export default Images