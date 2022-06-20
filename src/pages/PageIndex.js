import React, { useEffect, useState} from "react";
import {useHistory, Link} from "react-router-dom";

import NeighborhoodSelector from "../components/NeighborhoodSelector";
import NewNeighborhoodForm from "../components/NewNeighborhoodForm";

const SERVER_API = process.env.REACT_APP_SERVER_API;

function PageIndex(){
    const [neighborhoods, setNeighborhoods] = useState([])
    const history = useHistory();


    const onSubmit = ({id}) => {
        history.push(`/neighborhoods/${id}`)
    }

    useEffect(() => {
            fetch(`${SERVER_API}/neighborhoods`)
                .then(res => res.json())
                .then(setNeighborhoods)
        }, []
    )

    return(
        <div>
            <NeighborhoodSelector neighborhoods={neighborhoods} onSubmit={onSubmit} />
            <Link to='/neighborhoods/new' >
                <h4>Add a new neighborhood here!</h4>
            </Link>
        </div>
    )

}

export default PageIndex