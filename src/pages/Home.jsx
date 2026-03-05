import { Link } from 'react-router-dom'
import { MessageCircle, ChevronRight, Instagram } from 'lucide-react'
import ServiceCard from '../components/ServiceCard'
import ClassCard from '../components/ClassCard'
import TestimonialCard from '../components/TestimonialCard'
import CTASection from '../components/CTASection'
import ScheduleTable from '../components/ScheduleTable'

const services = [
    { icon: '🧘', title: 'Ashtanga Vinyasa', description: 'Dynamic flowing practice synchronizing breath with movement to build strength and flexibility.' },
    { icon: '🌿', title: 'Hatha Yoga', description: 'Classic yoga postures held mindfully to develop body awareness, balance, and calm.' },
    { icon: '💃', title: 'Zumba Fitness', description: 'High-energy dance workout blending Latin rhythms with easy-to-follow moves for total fitness.' },
    { icon: '🏋️', title: 'Functional Fitness', description: 'Bodyweight exercises that improve strength, balance, and coordination for everyday life.' },
    { icon: '🕯️', title: 'Meditation', description: 'Guided mindfulness and visualization techniques to calm the mind and cultivate inner peace.' },
    { icon: '🌬️', title: 'Pranayama', description: 'Ancient breathing techniques to enhance energy, reduce stress, and improve lung capacity.' },
    { icon: '🎵', title: 'Sound Healing', description: 'Therapeutic singing-bowl vibrations for deep relaxation and energetic chakra balancing.' },
    { icon: '🥗', title: 'Diet Planning', description: 'Personalized Ayurvedic nutrition guidance aligned with your wellness and fitness goals.' },
]

const featuredClasses = [
    { name: 'Ashtanga Vinyasa', description: 'Build strength, flexibility and mental focus through breath-linked movement sequences.', duration: '60 min', image: '/images/class_ashtanga.png', category: 'Strength & Flow' },
    { name: 'Hatha Yoga', description: 'Slower, mindful postures with longer holds — ideal for all levels and deepening your practice.', duration: '60 min', image: '/images/class_hatha.png', category: 'Foundation' },
    { name: 'Meditation', description: 'Guided mindfulness sessions to quiet mental chatter and awaken inner stillness.', duration: '45 min', image: '/images/class_meditation.png', category: 'Mindfulness' },
]

const testimonials = [
    { name: 'Priya Sharma', role: 'Yoga Practitioner, 1 Year', rating: 5, review: 'Yogam has completely transformed my life. The morning Hatha classes leave me energized all day. I\'ve gained flexibility I never thought possible!' },
    { name: 'Rajesh Mehta', role: 'Meditation Student, 6 Months', rating: 5, review: 'The meditation sessions here are deeply healing. After 3 months at Yogam my mind is calmer than ever. Sound Healing is absolutely magical!' },
    { name: 'Anita Rathore', role: 'Zumba & Fitness, 8 Months', rating: 5, review: 'Amazing experience! Lost 12 kgs with Zumba and Functional Fitness. The personalized diet plan was the game-changer. Yogam feels like family!' },
]

const instagramPosts = [
    { img: '/images/gallery_1.png', alt: 'Morning Warrior Flow' },
    { img: '/images/gallery_2.png', alt: 'Tree Pose Balance' },
    { img: '/images/gallery_3.png', alt: 'Studio Session' },
    { img: '/images/gallery_4.png', alt: 'Sound Healing' },
    { img: '/images/gallery_5.png', alt: 'Partner Yoga' },
    { img: '/images/gallery_6.png', alt: 'Pranayama Group' },
]

export default function Home() {
    const bookMsg = encodeURIComponent('Hello Yogam Team,\nI want to book a *Free Trial Class*. Please share available timings. 🙏')

    return (
        <div>
            {/* ── HERO ── */}
            <section className="hero-section">
                {/* Blobs */}
                <div style={{ position: 'absolute', top: '20%', right: 0, width: 400, height: 400, borderRadius: '50%', background: 'var(--warm-tan)', opacity: .18, filter: 'blur(90px)', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, width: 260, height: 260, borderRadius: '50%', background: 'var(--terracotta)', opacity: .12, filter: 'blur(60px)', pointerEvents: 'none' }} />

                <div className="container" style={{ width: '100%' }}>
                    <div className="hero-grid">
                        {/* Text */}
                        <div className="animate-fade-up">
                            <div className="section-label">✦ Welcome to Yogam ✦</div>
                            <h1 className="hero-heading">
                                Elevate Your<br />
                                <em>Mind, Body</em><br />
                                &amp; Soul
                            </h1>
                            <p className="hero-sub">
                                Discover peace, strength, and transformation at Jodhpur's premier yoga studio. Expert-led classes for all levels — morning and evening.
                            </p>
                            <div className="hero-cta-row">
                                <a href={`https://wa.me/9664172827?text=${bookMsg}`} target="_blank" rel="noopener noreferrer" id="hero-book-btn" className="btn btn-wa">
                                    <MessageCircle size={18} /> Book a Class
                                </a>
                                <Link to="/classes" id="hero-classes-btn" className="btn btn-outline">
                                    View Classes <ChevronRight size={16} />
                                </Link>
                            </div>
                            <div className="hero-stats">
                                <div><div className="hero-stat-val">500+</div><div className="hero-stat-lbl">Students</div></div>
                                <div style={{ width: 1, background: 'rgba(139,105,20,.15)', alignSelf: 'stretch' }} />
                                <div><div className="hero-stat-val">8+</div><div className="hero-stat-lbl">Programs</div></div>
                                <div style={{ width: 1, background: 'rgba(139,105,20,.15)', alignSelf: 'stretch' }} />
                                <div><div className="hero-stat-val">5★</div><div className="hero-stat-lbl">Rating</div></div>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="hero-img-wrap">
                            <div style={{ position: 'absolute', inset: 0, borderRadius: 28, background: 'var(--warm-tan)', opacity: .12, filter: 'blur(50px)', pointerEvents: 'none' }} className="animate-pulse-soft" />
                            <img src="/images/hero_yoga.png" alt="Yoga at Yogam Jodhpur" className="hero-img animate-float" />
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="scroll-indicator">
                    <span>scroll</span>
                    <div className="scroll-line" />
                </div>
            </section>

            {/* ── SERVICES ── */}
            <section className="section-pad" style={{ background: 'var(--cream)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: 52 }}>
                        <span className="section-label">What We Offer</span>
                        <h2 className="section-title">Our Programs &amp; Services</h2>
                        <div className="ornament-divider"><span>🪷</span></div>
                    </div>
                    <div className="services-grid">
                        {services.map(s => <ServiceCard key={s.title} {...s} />)}
                    </div>
                </div>
            </section>

            {/* ── ABOUT SNIPPET ── */}
            <section className="section-pad" style={{ background: 'var(--beige)' }}>
                <div className="container">
                    <div className="two-col">
                        <div className="col-img" style={{ position: 'relative' }}>
                            <div style={{ position: 'absolute', top: -16, left: -16, width: 180, height: 180, borderRadius: '50%', background: 'var(--terracotta)', opacity: .12, filter: 'blur(40px)', pointerEvents: 'none' }} />
                            <img src="/images/about_studio.png" alt="Yogam studio" className="section-img" />
                        </div>
                        <div>
                            <span className="section-label">Our Story</span>
                            <h2 className="section-title">The Yogam Philosophy</h2>
                            <div className="ornament-divider" style={{ justifyContent: 'flex-start' }}><span>🪷</span></div>
                            <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--deep-brown)', opacity: .8, marginBottom: 14 }}>
                                At Yogam Jodhpur, we believe wellness is a sacred journey — one that nourishes your mind, strengthens your body, and feeds your soul. Founded in the vibrant city of Jodhpur, our studio is a sanctuary of peace amidst modern life.
                            </p>
                            <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--deep-brown)', opacity: .7, marginBottom: 28 }}>
                                Whether you are a complete beginner or a seasoned yogi, our expert instructors craft every class with intention and warmth, guiding you toward your highest potential.
                            </p>
                            <Link to="/about" id="home-about-btn" className="btn btn-primary">
                                Discover Our Story <ChevronRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FEATURED CLASSES ── */}
            <section className="section-pad" style={{ background: 'var(--cream)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: 50 }}>
                        <span className="section-label">Featured Programs</span>
                        <h2 className="section-title">Popular Classes</h2>
                        <div className="ornament-divider"><span>🪷</span></div>
                    </div>
                    <div className="classes-grid">
                        {featuredClasses.map(c => <ClassCard key={c.name} {...c} />)}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: 36 }}>
                        <Link to="/classes" className="btn btn-outline">
                            View All Classes <ChevronRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── SCHEDULE PREVIEW ── */}
            <section className="section-pad" style={{ background: 'var(--beige)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: 44 }}>
                        <span className="section-label">Plan Your Week</span>
                        <h2 className="section-title">Weekly Class Schedule</h2>
                        <div className="ornament-divider"><span>🪷</span></div>
                    </div>
                    <ScheduleTable />
                    <div style={{ textAlign: 'center', marginTop: 28 }}>
                        <Link to="/schedule" className="btn btn-primary">
                            Full Schedule <ChevronRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── TESTIMONIALS ── */}
            <section className="section-pad" style={{ background: 'var(--cream)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: 48 }}>
                        <span className="section-label">Student Stories</span>
                        <h2 className="section-title">What Our Students Say</h2>
                        <div className="ornament-divider"><span>🪷</span></div>
                    </div>
                    <div className="testimonials-grid">
                        {testimonials.map(t => <TestimonialCard key={t.name} {...t} />)}
                    </div>
                </div>
            </section>

            {/* ── INSTAGRAM PREVIEW ── */}
            <section className="section-pad" style={{ background: 'var(--beige)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: 36 }}>
                        <span className="section-label">Follow Our Journey</span>
                        <h2 className="section-title">@yogam.jodhpur</h2>
                        <a href="https://www.instagram.com/yogam.jodhpur/" target="_blank" rel="noopener noreferrer"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '0.9rem', color: 'var(--earth-brown)', marginTop: 8, fontWeight: 500 }}>
                            <Instagram size={15} /> Follow on Instagram
                        </a>
                    </div>
                    <div className="insta-grid">
                        {instagramPosts.map((p, i) => (
                            <a key={i} href="https://www.instagram.com/yogam.jodhpur/" target="_blank" rel="noopener noreferrer"
                                className="gallery-item" style={{ aspectRatio: '1/1' }}>
                                <img src={p.img} alt={p.alt} />
                                <div className="gallery-overlay" />
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />
        </div>
    )
}
