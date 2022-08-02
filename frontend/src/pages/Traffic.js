import { useEffect, useState } from 'react';

// Components
import Widget from '../components/Widget.component';

const Traffic = () => {

    const [widgets, setWidget] = useState(null);

    useEffect(() => {
        const fetchOverview = async () => {
            const response = await fetch(`/api/traffic`);
            const json = await response.json();

            if (response.ok) {
                setWidget(json)
            }
        }

        fetchOverview()
    }, [])

    return (
        <div className="traffic">
            <div className="widgets">
                {widgets && widgets.map(widget => (
                    <Widget key={widget.id} widget={widget} />
                ))}
            </div>
        </div >
    )
}

export default Traffic;