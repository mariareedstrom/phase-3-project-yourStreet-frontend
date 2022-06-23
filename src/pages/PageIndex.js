import React, { useEffect, useState} from "react";
import {useHistory, Link} from "react-router-dom";

import NeighborhoodSelector from "../components/NeighborhoodSelector";

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
        </div>
    )

}

export default PageIndex