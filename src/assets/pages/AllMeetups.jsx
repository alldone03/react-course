
import { useState, useEffect } from "react";
import MeetupList from "../../components/meetups/MeetupList";


function AllMeetupdPage() {

    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState(true);


    useEffect(() => {
        setIsLoading(true)
        fetch('https://react-getting-started-56347-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json'
        ).then((response) => {
            return response.json();
        }).then((data) => {
            const meetups = [];
            for (const key in data) {
                const meetup = {
                    id: key,
                    ...data[key]

                }
                meetups.push(meetup);
            }
            setIsLoading(false);
            setLoadedMeetups(meetups);
        });
    }, []);

    if (isLoading) {
        return <section>
            <p>Loading...</p>
        </section>
    }
    return (<section>
        <h1>All Meetup Page</h1>
        <MeetupList meetups={loadedMeetups} />
    </section>)
}

export default AllMeetupdPage;