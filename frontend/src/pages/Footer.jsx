import React from "react";
import './footer.css';
function Footer(){
    
return(
<footer id="footer" className="footer">
<div className="footer-top">
<div className="container">
<div className="row gy-4">
<div className="col-lg-5 col-md-12 footer-info">
<a href="/" className="logo d-flex align-items-center">
<span>STARFLIX</span>
</a>
<p>
StarFLix is a subscription-based streaming service that allows our members to watch TV shows and movies on an internet-connected device
</p>
<div className="social-links mt-3">
<a href="#" className="twitter">
<ion-icon name="logo-twitter"></ion-icon>
</a>
<a href="#" className="facebook">
<ion-icon name="logo-facebook"></ion-icon>
</a>
<a href="#" className="instagran">
<ion-icon name="logo-instagram"></ion-icon>
</a>
<a href="#" className="youtube">
<ion-icon name="logo-youtube"></ion-icon>
</a>
</div>
<div className="container">
<div className="copyright">
&#169;Copyright{''}
<strong>

</strong>
All Rights Reserved
</div>
<div className="credits">

</div>
</div>
</div>
<div className="col-lg-2 col-6 footer-links">
<h4>Useful Links</h4>
<ul>

    <li>Terms and Service</li>
    <li>Privacy Policy</li>
    <li>Help Center</li>
</ul>
</div>
<div className="col-lg-2 col-6 footer-links">
<h4>Our Cinemas</h4>
<ul>
    <li>Delhi</li>
    <li>Coimbatore</li>
    <li>Chennai</li>
    <li>Bangalore</li>
    <li>Kolkata</li>
</ul>
</div>
<div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
<h4>Contact Us</h4>
<p>
Myleripalayam <br />
Coimbatore, Tamil Nadu 641032
<br />
India <br />
<br />
<strong>Phone:</strong> +91 9443444404
<br />
<strong>Email:</strong> rishiragu25@gmail.com
<br />
</p>
</div>
</div>
</div>
</div>

</footer>
);}

export default Footer;