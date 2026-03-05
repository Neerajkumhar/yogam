const schedule = [
    { time: '6:00 – 7:00 AM', mon: 'Ashtanga Vinyasa', tue: 'Hatha Yoga', wed: 'Pranayama', thu: 'Ashtanga Vinyasa', fri: 'Hatha Yoga', sat: 'Meditation', sun: 'Sound Healing' },
    { time: '7:00 – 8:00 AM', mon: 'Meditation', tue: 'Functional Fitness', wed: 'Hatha Yoga', thu: 'Meditation', fri: 'Functional Fitness', sat: 'Ashtanga Vinyasa', sun: '—' },
    { time: '8:00 – 9:00 AM', mon: 'Zumba', tue: 'Pranayama', wed: 'Zumba', thu: 'Sound Healing', fri: 'Pranayama', sat: 'Zumba', sun: 'Open Practice' },
    { time: '5:00 – 6:00 PM', mon: 'Hatha Yoga', tue: 'Ashtanga Vinyasa', wed: 'Functional Fitness', thu: 'Hatha Yoga', fri: 'Ashtanga Vinyasa', sat: 'Pranayama', sun: '—' },
    { time: '6:00 – 7:00 PM', mon: 'Functional Fitness', tue: 'Zumba', wed: 'Meditation', thu: 'Functional Fitness', fri: 'Zumba', sat: 'Sound Healing', sun: 'Meditation' },
    { time: '7:00 – 8:00 PM', mon: 'Pranayama', tue: 'Meditation', wed: 'Ashtanga Vinyasa', thu: 'Pranayama', fri: 'Hatha Yoga', sat: 'Functional Fitness', sun: '—' },
]

const days = ['Time', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

const classColors = {
    'Ashtanga Vinyasa': '#c17f52', 'Hatha Yoga': '#6b9e7a', 'Meditation': '#9b8ec0',
    'Pranayama': '#6b9fbb', 'Zumba': '#d4856a', 'Functional Fitness': '#bb9b6b',
    'Sound Healing': '#b07b8c', 'Open Practice': '#8B6914',
}

export default function ScheduleTable() {
    const cols = (row) => [row.mon, row.tue, row.wed, row.thu, row.fri, row.sat, row.sun]

    return (
        <div style={{ overflowX: 'auto', borderRadius: 16, border: '1px solid rgba(201,169,110,0.2)' }}>
            <table className="schedule-table" style={{ minWidth: 720 }}>
                <thead>
                    <tr>
                        {days.map(d => (
                            <th key={d} style={{ minWidth: d === 'Time' ? 140 : 110 }}>{d}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {schedule.map((row, i) => (
                        <tr key={i} style={{ background: i % 2 === 0 ? 'var(--soft-white)' : 'var(--cream)' }}>
                            <td style={{ fontWeight: 600, fontSize: '0.8rem', color: 'var(--earth-brown)', whiteSpace: 'nowrap' }}>
                                {row.time}
                            </td>
                            {cols(row).map((cls, j) => (
                                <td key={j}>
                                    {cls !== '—'
                                        ? <span className="sched-badge" style={{ background: classColors[cls] || '#8B6914' }}>{cls}</span>
                                        : <span style={{ fontSize: '0.75rem', opacity: 0.3 }}>—</span>
                                    }
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
