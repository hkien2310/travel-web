import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useContext } from "react";
import DestinationsContext from "../context/DestinationsContext";
import { DETAILS, CITY } from "../context/type/DestionationsType";
import Header from "../components/Header";
import {Helmet} from "react-helmet-async"
import DestinationsInfo from "../components/DestinationsInfo";
import Cities from "../components/cities/Cities";

const Details = () => {
    const {destinationsData, dispatch} = useContext(DestinationsContext);
    const {id} = useParams()
    // console.log(destinationsData.filteredCities)
    const {details, filteredCities} = destinationsData

    useEffect(()=> {
        dispatch({type: DETAILS, payload: id});
        dispatch({type: CITY, payload: id});
        window.scrollTo(0, 0);
    }, [id]);
    return (
        <>
        <Helmet>
            <title>{details.name}</title>
        </Helmet>
        <Header 
        titleHeader={details.name}
        image={details.bigImage}
        />
        <DestinationsInfo details={details}/>
        <Cities cities={filteredCities} name={details.name}/>
        </>
    )
}

export default Details;