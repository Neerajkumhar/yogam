import { Check, Heart } from 'lucide-react'
import CTASection from '../components/CTASection'

const whyChooseUs = [
    { icon: '🎓', title: 'Expert Instructors', desc: 'Certified yoga teachers with years of hands-on experience in traditional and modern yoga traditions.' },
    { icon: '🌿', title: 'Holistic Approach', desc: 'We integrate asana, pranayama, meditation, diet, and sound healing for complete wellness.' },
    { icon: '🏠', title: 'Peaceful Studio', desc: 'A beautifully designed serene studio that helps you go deeper into your practice.' },
    { icon: '🤝', title: 'Personalized Attention', desc: 'Small batch sizes ensure each student receives individual guidance and corrections.' },
    { icon: '📅', title: 'Flexible Timings', desc: 'Morning and evening batches to fit every schedule — early bird or evening owl.' },
    { icon: '💫', title: 'All Levels Welcome', desc: 'From complete beginners to advanced practitioners — we have the perfect class for you.' },
]

const values = [
    { label: 'Ahimsa', description: 'Non-violence in practice and in life, starting with how we treat ourselves.' },
    { label: 'Satya', description: 'Truthfulness on the mat translates to authenticity in daily relationships.' },
    { label: 'Santosha', description: 'Contentment — finding joy and gratitude in each present moment.' },
    { label: 'Tapas', description: 'Discipline and self-effort that transform potential into transformation.' },
]

const trainerSkills = [
    'Certified Yoga Teacher (RYT 500)',
    'Specialist in Ashtanga & Hatha Yoga',
    'Sound Healing & Meditation Guide',
    'Ayurvedic Nutrition Consultant',
    '500+ students transformed',
]

// Reusable section header
const SectionHeader = ({ label, title, center = true }) => (
    <div style={{ textAlign: center ? 'center' : 'left', marginBottom: 48 }}>
        <span className="section-label">{label}</span>
        <h2 className="section-title">{title}</h2>
        <div className="ornament-divider" style={center ? {} : { justifyContent: 'flex-start' }}>
            <span>🪷</span>
        </div>
    </div>
)

export default function About() {
    return (
        <div style={{ paddingTop: 'var(--nav-h)' }}>
            {/* Page Header */}
            <div className="page-header">
                <span className="section-label">Our Journey</span>
                <h1 className="page-header-title">About Yogam</h1>
                <div className="ornament-divider" style={{ justifyContent: 'center' }}><span>🪷</span></div>
                <p className="page-header-sub">
                    A sanctuary of wellness nestled in the heart of Jodhpur, Rajasthan — where ancient wisdom meets modern living.
                </p>
            </div>

            {/* Studio Intro */}
            <section className="section-pad" style={{ background: 'var(--cream)' }}>
                <div className="container">
                    <div className="two-col">
                        <div className="col-img" style={{ position: 'relative' }}>
                            <img src="/images/about_studio.png" alt="Yogam Studio Interior" className="section-img" />
                            <div className="glass-card" style={{ position: 'absolute', bottom: -12, right: -12, padding: '14px 18px', display: 'none' }}>
                                <div style={{ fontWeight: 600, color: 'var(--deep-brown)' }}>Est. 2020</div>
                                <div style={{ fontSize: '0.8rem', opacity: .65, color: 'var(--deep-brown)' }}>Jodhpur, Rajasthan</div>
                            </div>
                        </div>
                        <div>
                            <SectionHeader label="Our Story" title="A Sanctuary for the Soul" center={false} />
                            <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--deep-brown)', opacity: .8, marginBottom: 16 }}>
                                Yogam was born from a deep love for the ancient wisdom of yoga and a desire to share its transformative power with the people of Jodhpur. We envision a world where every person has access to the healing practices of yoga, pranayama, and mindful movement.
                            </p>
                            <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--deep-brown)', opacity: .7, marginBottom: 16 }}>
                                Our studio is not just a place to practice yoga — it is a community. A family of like-minded souls who support each other's growth, celebrate victories, and hold space during challenges.
                            </p>
                            <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--deep-brown)', opacity: .65 }}>
                                From the gentle rhythm of Hatha yoga to the dynamic flow of Ashtanga Vinyasa, from the meditative silence of pranayama to the joyful energy of Zumba — Yogam has something for everyone at every stage of life.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy */}
            <section className="section-pad" style={{ background: 'var(--beige)' }}>
                <div className="container" style={{ maxWidth: 860 }}>
                    <SectionHeader label="Our Beliefs" title="The Philosophy We Live By" />
                    <div className="values-grid">
                        {values.map(v => (
                            <div key={v.label} className="card" style={{ padding: 28 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                                    <div style={{ width: 34, height: 34, borderRadius: '50%', background: 'var(--sand)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <Heart size={14} fill="currentColor" style={{ color: 'var(--earth-brown)' }} />
                                    </div>
                                    <h3 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.25rem', fontWeight: 600, color: 'var(--deep-brown)' }}>{v.label}</h3>
                                </div>
                                <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--deep-brown)', opacity: .72 }}>{v.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trainer */}
            <section className="section-pad" style={{ background: 'var(--cream)' }}>
                <div className="container">
                    <div className="two-col">
                        <div>
                            <SectionHeader label="Meet Your Guide" title="Expert Yoga Instructor" center={false} />
                            <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--deep-brown)', opacity: .8, marginBottom: 14 }}>
                                Our lead instructor brings years of dedicated practice and teaching experience, blending traditional yogic wisdom with a modern, compassionate approach. Trained in classical Hatha, Ashtanga Vinyasa, and Iyengar traditions, they create a safe, nurturing space for every student.
                            </p>
                            <p style={{ fontSize: '1rem', lineHeight: 1.85, color: 'var(--deep-brown)', opacity: .7, marginBottom: 24 }}>
                                With a certification in Nutrition and Ayurvedic wellness, our instructor also offers personalized diet plans that complement your yoga practice for holistic transformation.
                            </p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                                {trainerSkills.map(s => (
                                    <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.9rem', color: 'var(--deep-brown)' }}>
                                        <div style={{ width: 22, height: 22, borderRadius: '50%', background: 'var(--sage)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                            <Check size={11} color="white" />
                                        </div>
                                        {s}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <div style={{ position: 'absolute', inset: 0, borderRadius: 24, background: 'var(--warm-tan)', opacity: .1, filter: 'blur(40px)', pointerEvents: 'none' }} />
                            <img src="/images/about_trainer.png" alt="Yogam Lead Instructor" className="section-img" style={{ position: 'relative', maxHeight: 520 }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose */}
            <section className="section-pad" style={{ background: 'var(--beige)' }}>
                <div className="container">
                    <SectionHeader label="Why Yogam?" title="What Makes Us Different" />
                    <div className="why-grid">
                        {whyChooseUs.map(item => (
                            <div key={item.title} className="card" style={{ padding: 26 }}>
                                <div style={{ fontSize: '2rem', marginBottom: 14 }}>{item.icon}</div>
                                <h3 style={{ fontFamily: 'Cormorant Garamond,serif', fontSize: '1.15rem', fontWeight: 600, color: 'var(--deep-brown)', marginBottom: 8 }}>{item.title}</h3>
                                <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--deep-brown)', opacity: .7 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection title="Ready to Begin Your Practice?" subtitle="Join the Yogam family and experience the transformation that hundreds of students in Jodhpur are already living." />
        </div>
    )
}
