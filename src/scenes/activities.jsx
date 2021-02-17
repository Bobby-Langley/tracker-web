import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
import ListGroup from 'react-bootstrap/ListGroup'

function Activities(){
    const[activitiesList, setActivitiesList] = useState(null)
    useEffect(() => {
    fetch('https://tracker-bl.web.app/activities')
        .then(res => res.json())
        .then(data => setActivitiesList(data))
        .catch(error => alert('Error getting Activities'))

}, [])
if(!activitiesList){
    return(
        <Spinner animation="border" role="status">
            <span className="sr-only"> Loading... </span>
        </Spinner>
    )
}
return(
    <ListGroup>
        {activitesList.map(activity=> {
        <ListGroup.Item>key={activity.name}</ListGroup.Item>
})}

    </ListGroup>
)
}

export default Activities