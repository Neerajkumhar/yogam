export default function GalleryGrid({ images }) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((img, i) => (
                <div
                    key={i}
                    className="gallery-item"
                    style={{
                        aspectRatio: i % 3 === 0 ? '1/1.2' : '1/1',
                        gridRow: i % 3 === 0 ? 'span 1' : 'span 1',
                    }}
                >
                    <img src={img.src} alt={img.alt} loading="lazy" />
                    <div className="gallery-overlay" />
                </div>
            ))}
        </div>
    )
}
