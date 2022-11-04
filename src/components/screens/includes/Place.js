import axios from "axios";
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "./Header";
import styled from "styled-components";

function Place() {
    const [place, setPlace] = useState({
        name: "",
        gallery: [],
    });
    useEffect(() => {
        axios
            .get("https://traveller.talrop.works/api/v1/places/view/1 ")
            .then((response) => {
                setPlace(response.data.data);
                console.log(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    });
    return (
        <>
            <Helmet>{place.name}</Helmet>
            <Header />
            <MainContainer>
                <Title>{place.name}</Title>
                <InfoContainer>
                    <Category>{place.category_name}</Category>
                    <LocationContainer>
                        <Location
                            src={
                                require("../../../assets/images/place.svg")
                                    .default
                            }
                            alt="Image"
                        />
                        <LocationName>{place.location}</LocationName>
                    </LocationContainer>
                </InfoContainer>
                <Gallery>
                    <GalleryImageItem>
                        <GalleryImage src={place.image} alt="" />
                    </GalleryImageItem>
                    {place.gallery.map((image) => (
                        <GalleryImageItem>
                            <GalleryImage src={image.image} alt="" />
                        </GalleryImageItem>
                    ))}
                </Gallery>
                <SubHeading>Place Details </SubHeading>
                <Description>{place.description}</Description>
            </MainContainer>
        </>
    );
}
const MainContainer = styled.div``;
const Title = styled.h1``;
const InfoContainer = styled.div``;
const Category = styled.span``;
const LocationContainer = styled.div``;
const Location = styled.img``;
const LocationName = styled.span``;
const Gallery = styled.ul``;
const GalleryImageItem = styled.li``;
const GalleryImage = styled.img``;
const SubHeading = styled.h3``;
const Description = styled.p``;

export default Place;
