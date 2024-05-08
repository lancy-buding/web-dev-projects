import {useState, useEffect} from 'react';
import {Container, Navbar, Nav} from 'react-bootstrap';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScoll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', onScoll);

        return () => window.removeEventListener('scroll', onScoll);
    },[])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    return (
        <Navbar expand="lg" className={scrolled ? "scrolled":""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"> 
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* href="#home": 这是该导航链接指向的目标位置。在这里，它是指向页面内部的某个具有 id="home" 属性的元素。点击链接后，页面会滚动到该元素所在的位置。 */}
                        {/* 根据条件 activeLink === 'home' 的值，如果 activeLink 等于 'home'，则会给链接添加 'active navbar-link' 类名；否则只添加 'navbar-link' 类名。 */}
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav> 
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="#"><img src={navIcon1} alt=""/></a>
                            <a href="#"><img src={navIcon2} alt=""/></a>
                            <a href="#"><img src={navIcon3} alt=""/></a>
                        </div>
                        <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
                    </span>
                </Navbar.Collapse> 
            </Container>
        </Navbar>
    );
}
