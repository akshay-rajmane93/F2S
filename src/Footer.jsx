import React from 'react';

const Footer =()=>{
    const year = new Date().getFullYear();
    return(<>
        <footer >
        <div className="row container">
        <div className="col-md-6 footer_adress">
        <p>Address: 185/193, Sector 29, Ravet, Pimpri-Chinchwad, Maharashtra 412101 <br/>Phone No:- +91-9689902390/8806688772</p>
        <a   className="footer_nav" href="https://www.google.com/maps/dir/18.557961,73.7830858/f2s+gym/@18.6037995,73.7341016,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3bc2b9e214576bf1:0x1a358168315c66ff!2m2!1d73.7524273!2d18.6502748" rel='noreferrer' target="_blank">See Map</a>
        </div>
        <div className="col-md-6 footer_icons">
        <a className="footer_btn" href='https://www.facebook.com/f2sgym/' rel='noreferrer' target="_blank">
        <i class="fab fa-facebook"></i>
        <span>Facebook</span>
        </a>
        <a className="footer_btn" href="https://instagram.com/f2s_house_of_fitness?igshid=111zqf80i6d9c" rel='noreferrer' target='-blank'>
        <i class="fab fa-instagram"></i>
        <span>Instagram</span>
        </a>
        </div>
       
       
        <div className="col-md-12 footer_bottom">
            <p>@{year} F2S House of fitness. </p>
            </div>
            </div>
        </footer>
    </>)
    
}

export default Footer;