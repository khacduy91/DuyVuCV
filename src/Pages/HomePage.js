import React from 'react';
import products from '../data/products.json'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { ProgressBar } from 'react-bootstrap'
import './HomePage.css'


class HomePage extends React.Component {
    state = {
        close: true,
        mobileClose: true,
    }

    handleClose = () => {
        const menu = document.getElementById("menu")
        const blank = document.getElementById("blank")
        const rightContainer = document.querySelector('.rightContainer')
        menu.style.left = window.innerWidth * -0.2 + 'px'
        blank.style.width = "0px"
        rightContainer.style.width = "100%"
        rightContainer.style.transition = '0.5s'
        this.setState({ ...this.state, close: true })
    }

    handleOpen = () => {
        const menu = document.getElementById("menu")
        const blank = document.getElementById("blank")
        const rightContainer = document.querySelector('.rightContainer')
        menu.style.left = "0px"
        blank.style.width = "20%"
        rightContainer.style.width = "80%"
        rightContainer.style.transition = '0.5s'
        this.setState({ ...this.state, close: false })
    }

    menuOpen = () => {
        const close = this.state
        const span1 = document.getElementById("span1")
        const span2 = document.getElementById("span2")
        const span3 = document.getElementById("span3")
        const mobileMenu = document.getElementById("mobileMenu")

        span2.style.display = "none"
        span1.style.transform = "rotate(45deg) translateY(7px)"
        span1.style.transition = "0.2s"
        span3.style.transform = "rotate(135deg) translateY(7px)"
        span3.style.transition = "0.2s"
        mobileMenu.style.left = "0"

        this.setState({ ...this.state, mobileClose: !this.state.mobileClose })
        console.log(this.state.close)
    }

    menuClose = () => {
        const close = this.state
        const span1 = document.getElementById("span1")
        const span2 = document.getElementById("span2")
        const span3 = document.getElementById("span3")
        const mobileMenu = document.getElementById("mobileMenu")

        span2.style.display = "block"
        span1.style.transform = "rotate(0) translateY(0)"
        span1.style.transition = "0.2s"
        span3.style.transform = "rotate(0) translateY(0)"
        span3.style.transition = "0.2s"
        mobileMenu.style.left = "-100%"
        this.setState({ ...this.state, mobileClose: !this.state.mobileClose })
        console.log(this.state.close)
    }
    render() {
        function scrollAppear() {
            let project = document.querySelector('.project')
            let projectPosition = project.getBoundingClientRect().top
            let projecta = document.querySelector('.projecta')
            let projectb = document.querySelector('.projectb')
            let projectc = document.querySelector('.projectc')
            let projectd = document.querySelector('.projectd')
            var screenPosition = window.innerHeight / 1.3
            console.log(projectPosition)
            console.log(screenPosition)
            if (projectPosition < screenPosition) {
                projecta.classList.add('projectAppear')
            }
            if (projectPosition < screenPosition) {
                projectb.classList.add('projectAppear')
            }
            // if (projectPosition < screenPosition) {
            //     projectc.classList.add('projectAppear')
            // }
            if (projectPosition < screenPosition) {
                projectd.classList.add('projectAppear')
            }
        }
        window.addEventListener('scroll', scrollAppear)
        // function srollAppear() {
        //     var section2 = document.querySelector('.section2')
        //     var section2 = section2.getBoundingClientRect().top;
        //     var section2Left = document.querySelector('.section2Left');
        //     var section2Right = document.querySelector('.section2Right');
        //     var screenPosition = window.innerHeight / 1.2;

        //     if (section2 < screenPosition) {
        //         section2Left.classList.add('section2LeftAppear')
        //     }
        //     if (section2 < screenPosition) {
        //         section2Right.classList.add('section2RightAppear')
        //     }
        // }
        // window.addEventListener('scroll', srollAppear)
        return (
            <div class='homepage'>
                <div class='x'>
                    <button class='closeButton' style={this.state.close === true ? { left: '-100px' } : { left: window.innerWidth * 0.2 }} onClick={this.handleClose}><FontAwesomeIcon icon={faArrowLeft} /></button>
                    <button class='openButton' style={this.state.close === false ? { left: '-100px' } : { left: '0px' }} onClick={this.handleOpen}><FontAwesomeIcon icon={faArrowRight} /></button>
                </div>
                {/* Menu Desktop */}
                <div id='menu' class='menu'>
                    <div class='logo'>
                        <img src='https://raw.githubusercontent.com/khacduy91/khacduy_CV/gh-pages/Profile.jpg' />
                    </div>
                    <div class='mainmenu'>
                        <ul>
                            <li><a href='/#about' >About</a></li>
                            <li><Link to='/khacduy91_CV/porfolio'><span>Porfolio</span></Link></li>
                            <li><a href='/#contact'><span>Contact</span></a></li>
                        </ul>
                    </div>
                    <div class='socialContact'>
                        <a href="https://www.facebook.com/Assist2709"><FontAwesomeIcon icon={faFacebookSquare} /></a>

                    </div>
                </div>
                {/* Menu Mobile */}
                <a onClick={this.state.mobileClose !== false ? this.menuOpen : this.menuClose} class='hamburger'>
                    <span id='span1'></span>
                    <span id='span2'></span>
                    <span id='span3'></span>
                </a>
                <div id="mobileMenu" class='mobileMenu'>
                    <ul class='mainmenu mobile'>
                        <div class='line'>
                            <span></span>
                        </div>
                        <li><a href='/#about' >About</a></li>
                        <li><Link to='/khacduy91_CV/porfolio'><span>Porfolio</span></Link></li>
                        <li><a href='/#contact'><span>Contact</span></a></li>
                    </ul>
                </div>
                <div id='blank'></div>
                {/* Right Container */}
                <div class='rightContainer'>
                    <section class='section1'>
                        <div class='intro'>
                            <p>Hi! I'm Duy Vu</p>
                            <span>I graduated from Front End cource of Nordic Coder</span>
                        </div>
                        <div class='introImg'>
                            <img src='https://raw.githubusercontent.com/khacduy91/khacduy_CV/gh-pages/Programming-removebg.png'></img>
                        </div>
                    </section>
                    <section class='section2'>
                        <div class='aboutMe'>
                            <div>
                                <p class='title'>ABOUT ME</p>
                                <p class='secondTitle'>WHO AM I?</p>
                                <p class='textBlock'>Hello! My name is Khac Duy Vu and I am 29 years old. I had 5 years of exprerience as a real estate broker in Ho Chi Minh City and Phu Quoc. The job gave me the opportunity to learn about Wordpress websites to create my own sales channel. Since the first website, I found myself really interested in designing websites. That was the reason why I deciced to become a Front End Developer.</p>
                                <p class='textBlock'>Là người năng nổ, có trách nhiệm cao trong công việc, cộng với khả năng tìm tòi học hỏi nhanh các công nghệ kiến thức mới, tôi luôn hoàn thành tốt các công việc được giao về thời gian và chất lượng. Trong thời gian tới đây, tôi sẽ tiếp tục tìm hiểu, học hỏi để trau dồi thêm kiến thức c, áp dụng các công nghê mới nhất cũng như nâng cao kỹ năng nhầm phục vụ cho công việc của tôi một cách tốt nhất</p>
                            </div>
                            <div>
                                <p class='title'>MY SPECIALITY</p>
                                <p class='secondTitle'>MY SKILL</p>
                                <div class='progressBar'>
                                    <p>Html <ProgressBar animated striped now={70} label="70%" /></p>
                                    <p>Css <ProgressBar animated striped variant="danger" now={65} label="65%" /></p>
                                </div>
                                <div class='progressBar'>
                                    <p>ReactJS <ProgressBar animated striped now={40} label="40%" /></p>
                                    <p>Wordpress <ProgressBar animated striped variant="danger" now={50} label="50%" /></p>
                                </div>
                                <div class='progressBar'>
                                    <p>Photoshop <ProgressBar animated striped now={60} label="60%" /></p>
                                    <p>Illustrator <ProgressBar animated striped variant="danger" now={60} label="60%" /></p>
                                </div>
                            </div>
                        </div>
                        <div class='recentWork'>
                            <p class='title'>MY WORK</p>
                            <p class='secondTitle'>RECENT WORK</p>
                            <div class='project'>
                                <div class='projecta'>
                                    <a href='http://khacduyland.com/'>
                                        <img src='https://raw.githubusercontent.com/khacduy91/khacduy_CV/gh-pages/Project1.png'></img>
                                        <p class='projectTitle'>khacduyland.com</p>
                                    </a>
                                </div>
                                <div class='projectb'>
                                    <a href='http://rivana.vn/'>
                                        <img src='https://raw.githubusercontent.com/khacduy91/khacduy_CV/gh-pages/Project2.png'></img>
                                        <p class='projectTitle'>rivana.vn</p>
                                    </a>
                                </div>
                                {/* <div class='projectc'>
                                    <a href='http://bietthuparkhyattphuquoc.com/'>
                                        <img src='https://raw.githubusercontent.com/khacduy91/khacduy_CV/gh-pages/Project3.png'></img>
                                        <p class='projectTitle'>Project 3</p>
                                    </a>
                                </div> */}
                                <div class='projectd'>
                                    <Link to='/khacduy91_CV/porfolio'>
                                        <img src='https://raw.githubusercontent.com/khacduy91/khacduy_CV/gh-pages/Project4.png'></img>
                                        <p class='projectTitle'>My React Project</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class='section3'>
                        <div>
                            <p class='title' style={{ textAlign: 'center' }}>MY CERTIFICATE</p>
                            <p class='cerTitle'>FRONT END DEVELOPER <br/><span style={{ color: '#dc3545', fontFamily: 'helvetica' }}>NORDIC <span style={{ color: 'black' }}><FontAwesomeIcon icon={faAngleLeft} /> CODER <FontAwesomeIcon icon={faAngleRight} /></span></span></p>
                            <div class='cerImg'>
                            <img src='https://raw.githubusercontent.com/Assist2709/DuyVuCV/gh-pages/certificate.jpg'></img>
                        </div>
                        </div>
                       
                    </section>
                </div>
            </div>
        )
    }
}
export default HomePage;
