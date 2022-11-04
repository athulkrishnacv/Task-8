import React, { useState, useEffect } from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

function Places() {
    const [places, setPlaces] = useState([]);
    useEffect(() => {
        axios
            .get("https://traveller.talrop.works/api/v1/places/")
            .then((response) => {
                setPlaces(response.data.data);
                console.log(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const renderPlaces = () => {
        return places.map((place) => {
            return (
                <PlaceCard key={place.id}>
                    <PlaceCardLink to={""}>
                        <PlaceImage src={place.image} alt="" />
                        <PlaceBottomContainer>
                            <PlaceTitle>{place.name}</PlaceTitle>
                            <Location>
                                <LocationIcon
                                    src={
                                        require("../../../assets/images/place.svg")
                                            .default
                                    }
                                    Himalaya
                                    alt="Image"
                                />
                                <LocationName>{place.location}</LocationName>
                            </Location>
                        </PlaceBottomContainer>
                    </PlaceCardLink>
                </PlaceCard>
            );
        });
    };
    return (
        <>
            <Helmet>
                <title>Places travel guide</title>
            </Helmet>

            <TopContainer>
                <Heading>Welcome Athulkrishna</Heading>
                <Paragraph>Explore the world around you</Paragraph>
            </TopContainer>
            <PlacesContainer>{renderPlaces()}</PlacesContainer>
        </>
    );
}
const TopContainer = styled.div`
    width: 90%;
    margin: 100px auto 0;
`;
const Heading = styled.h1`
    font-size: 36px;
    margin-bottom: 20px;
`;
const Paragraph = styled.p`
    font-size: 22px;
    color: #dfdfe2;
`;
const PlacesContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    margin: 50px auto 0;
`;
const PlaceCard = styled.li`
    width: 250px;
    margin-right: 2%;
    margin-bottom: 20px;
`;
const PlaceCardLink = styled(Link)``;
const PlaceImage = styled.img`
    width: 100%;
    display: block;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
`;
const PlaceBottomContainer = styled.div`
    padding: 10px 10px;
`;
const PlaceTitle = styled.h3`
    margin-bottom: 10px;
    font-size: 18px;
`;
const Location = styled.div`
    display: flex;
`;
const LocationIcon = styled.img`
    margin-right: 10px;
`;
const LocationName = styled.span`
    font-size: 1px;
`;

export default Places;
