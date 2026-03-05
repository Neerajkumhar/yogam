import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Classes', path: '/classes' },
    { label: 'Schedule', path: '/schedule' },
    { label: 'Diet Plan', path: '/diet-plan' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Testimonials', path: '/testimonials' },
    { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        setIsOpen(false)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [location.pathname])

    return (
        <nav
            className={`navbar${scrolled ? ' scrolled' : ''}`}
            style={{ background: scrolled ? undefined : 'rgba(250,246,240,0.82)', backdropFilter: 'blur(16px)' }}
        >
            <div className="navbar-inner">
                {/* Logo */}
                <Link to="/" className="nav-logo-wrap" aria-label="Yogam Jodhpur Home">
                    <img
                        src="/images/yogam-logo.jpg"
                        alt="Yogam – Jodhpur Yoga Studio"
                        style={{
                            height: 52,
                            width: 'auto',
                            objectFit: 'contain',
                            borderRadius: 8,
                            display: 'block',
                            transition: 'transform 0.3s ease',
                        }}
                        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.06)')}
                        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                </Link>

                {/* Desktop links */}
                <ul className="nav-links">
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <Link
                                to={link.path}
                                className={`nav-link${location.pathname === link.path ? ' active' : ''}`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Book Now + Hamburger */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <a
                        href="https://wa.me/9664172827"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nav-book-btn"
                    >
                        📲 Book Now
                    </a>
                    <button
                        className="nav-hamburger"
                        onClick={() => setIsOpen((o) => !o)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile drawer */}
            <div className={`nav-mobile-menu${isOpen ? ' open' : ''}`}>
                <div className="nav-mobile-inner">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`nav-mobile-link${location.pathname === link.path ? ' active' : ''}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <a
                        href="https://wa.me/9664172827"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nav-mobile-book"
                    >
                        📲 Book a Class on WhatsApp
                    </a>
                </div>
            </div>
        </nav>
    )
}
