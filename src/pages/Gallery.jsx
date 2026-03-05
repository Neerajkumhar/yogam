import { useState } from 'react'
import CTASection from '../components/CTASection'
import { Instagram } from 'lucide-react'

const galleryImages = [
    { src: '/images/gallery_1.png', alt: 'Morning Warrior Flow at Sunrise', category: 'Classes' },
    { src: '/images/gallery_2.png', alt: 'Tree Pose Balance Practice', category: 'Poses' },
    { src: '/images/gallery_3.png', alt: 'Studio Downward Dog Session', category: 'Classes' },
    { src: '/images/gallery_4.png', alt: 'Sound Healing Bowl Therapy', category: 'Healing' },
    { src: '/images/gallery_5.png', alt: 'Partner Yoga Practice', category: 'Classes' },
    { src: '/images/gallery_6.png', alt: 'Morning Pranayama Group', category: 'Breathwork' },
    { src: '/images/class_ashtanga.png', alt: 'Ashtanga Vinyasa Flow', category: 'Classes' },
    { src: '/images/class_hatha.png', alt: 'Hatha Yoga Sequence', category: 'Poses' },
    { src: '/images/class_meditation.png', alt: 'Guided Meditation Circle', category: 'Mindfulness' },
    { src: '/images/class_pranayama.png', alt: 'Pranayama Breathwork', category: 'Breathwork' },
    { src: '/images/class_zumba.png', alt: 'Zumba Fitness Class', category: 'Fitness' },
    { src: '/images/about_studio.png', alt: 'Yogam Studio Interior', category: 'Studio' },
]

const categories = ['All', 'Classes', 'Poses', 'Mindfulness', 'Breathwork', 'Healing', 'Fitness', 'Studio']

export default function Gallery() {
    const [active, setActive] = useState('All')
    const [lightbox, setLightbox] = useState(null)

    const filtered = active === 'All' ? galleryImages : galleryImages.filter(i => i.category === active)

    return (
        <div style={{ paddingTop: 'var(--nav-h)' }}>
            {/* Header */}
            <div className="page-header">
                <span className="section-label">Our Moments</span>
                <h1 className="page-header-title">Gallery</h1>
                <div className="ornament-divider" style={{ justifyContent: 'center' }}><span>🪷</span></div>
                <a href="https://www.instagram.com/yogam.jodhpur/" target="_blank" rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '0.9rem', color: 'var(--earth-brown)', fontWeight: 500, marginTop: 8 }}>
                    <Instagram size={15} /> Follow @yogam.jodhpur for more
                </a>
            </div>

            {/* Filters */}
            <section style={{ padding: '28px 24px', background: 'var(--cream)' }}>
                <div className="container">
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
                        {categories.map(cat => (
                            <button key={cat} className={`filter-btn${active === cat ? ' active' : ''}`} onClick={() => setActive(cat)}>{cat}</button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Grid */}
            <section className="section-pad" style={{ background: 'var(--cream)', paddingTop: 20 }}>
                <div className="container">
                    <div className="gallery-grid">
                        {filtered.map((img, i) => (
                            <div key={i} className="gallery-item" style={{ aspectRatio: '1/1', cursor: 'pointer' }}
                                onClick={() => setLightbox(img)}>
                                <img src={img.src} alt={img.alt} loading="lazy" />
                                <div className="gallery-overlay" />
                            </div>
                        ))}
                    </div>
                    {filtered.length === 0 && (
                        <p style={{ textAlign: 'center', padding: 48, color: 'var(--deep-brown)', opacity: .45 }}>No images in this category yet.</p>
                    )}
                </div>
            </section>

            {/* Lightbox */}
            {lightbox && (
                <div onClick={() => setLightbox(null)} style={{
                    position: 'fixed', inset: 0, zIndex: 200,
                    background: 'rgba(0,0,0,0.92)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20,
                }}>
                    <div onClick={e => e.stopPropagation()} style={{ position: 'relative', maxWidth: 900, width: '100%' }}>
                        <img src={lightbox.src} alt={lightbox.alt} style={{ width: '100%', maxHeight: '82vh', objectFit: 'contain', borderRadius: 16, display: 'block' }} />
                        <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.7)', marginTop: 10, fontSize: '0.875rem' }}>{lightbox.alt}</p>
                        <button onClick={() => setLightbox(null)} style={{
                            position: 'absolute', top: 10, right: 10, width: 36, height: 36, borderRadius: '50%',
                            background: 'rgba(255,255,255,0.15)', color: 'white', border: 'none', cursor: 'pointer',
                            fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>✕</button>
                    </div>
                </div>
            )}

            {/* Instagram CTA */}
            <section style={{ padding: '48px 24px', background: 'var(--beige)', textAlign: 'center' }}>
                <p style={{ fontSize: '0.9rem', color: 'var(--deep-brown)', opacity: .7, marginBottom: 18 }}>
                    See daily poses, class highlights, and student transformations on Instagram
                </p>
                <a href="https://www.instagram.com/yogam.jodhpur/" target="_blank" rel="noopener noreferrer" className="btn"
                    style={{ background: 'linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)', color: 'white' }}>
                    <Instagram size={16} /> Follow on Instagram
                </a>
            </section>

            <CTASection />
        </div>
    )
}
