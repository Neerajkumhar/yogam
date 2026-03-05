import { MessageCircle } from 'lucide-react'

export default function ClassCard({ name, description, duration, image, category }) {
    const whatsappMsg = encodeURIComponent(
        `Hello Yogam Team,\nI want to inquire about the *${name}* class.\n\nPlease share timings and fees. 🙏`
    )

    return (
        <div className="class-card">
            {/* Image */}
            <div style={{ overflow: 'hidden', position: 'relative' }}>
                <img
                    src={image}
                    alt={name}
                    className="class-card-img"
                />
            </div>

            {/* Body */}
            <div className="class-card-body">
                <span className="class-card-category">{category}</span>
                <div className="class-card-name">{name}</div>
                <p className="class-card-desc">{description}</p>
                <div className="class-card-duration">⏱ {duration}</div>
                <a
                    href={`https://wa.me/9664172827?text=${whatsappMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`book-${name.replace(/\s+/g, '-').toLowerCase()}`}
                    className="btn btn-wa"
                    style={{ width: '100%', fontSize: '0.875rem', padding: '11px 20px' }}
                >
                    <MessageCircle size={15} />
                    Book on WhatsApp
                </a>
            </div>
        </div>
    )
}
