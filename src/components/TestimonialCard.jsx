import { Star } from 'lucide-react'

export default function TestimonialCard({ name, role, review, rating = 5 }) {
    return (
        <div className="testimonial-card">
            {/* Big quote */}
            <div style={{
                position: 'absolute', top: 16, right: 20,
                fontFamily: 'Georgia,serif', fontSize: '4rem',
                lineHeight: 1, fontWeight: 'bold',
                color: 'var(--earth-brown)', opacity: 0.08,
                pointerEvents: 'none',
            }}>"</div>

            {/* Stars */}
            <div style={{ display: 'flex', gap: 4, marginBottom: 14 }}>
                {Array(rating).fill(0).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" style={{ color: 'var(--warm-tan)' }} />
                ))}
            </div>

            {/* Review text */}
            <p style={{ fontSize: '0.9rem', lineHeight: 1.75, fontStyle: 'italic', color: 'var(--deep-brown)', opacity: 0.8, marginBottom: 20 }}>
                "{review}"
            </p>

            {/* Author */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                    width: 42, height: 42, borderRadius: '50%',
                    background: 'var(--sand)', color: 'var(--earth-brown)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 700, fontSize: '1rem', fontFamily: 'Cormorant Garamond,serif',
                    flexShrink: 0,
                }}>
                    {name.charAt(0)}
                </div>
                <div>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--deep-brown)' }}>{name}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--deep-brown)', opacity: 0.6 }}>{role}</div>
                </div>
            </div>
        </div>
    )
}
