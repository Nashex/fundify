import React from 'react'
import { Carousel } from '@mantine/carousel';
import DonationTier from './DonationTier';

type Props = {}

export default function CardCarousel({ }: Props) {
    return (
        <Carousel
            withIndicators
            height="100%"
            slideSize="33.333333%"
            slideGap="sm"
            align="start"
            slidesToScroll={3}
            styles={{
                control: {
                    '&[data-inactive]': {
                        opacity: 0,
                        cursor: 'default',
                    },
                    '&[data-active]': {
                        opacity: 100,
                    }
                },
                indicator: {
                    width: 12,
                    height: 4,
                    transition: 'width 250ms ease',
                    backgroundColor: 'grey',
                    fill: 'grey',
                    opacity: 100,
                    
                    '&[data-active]': {
                        width: 40,
                    },
                }
            }}
        >
            <Carousel.Slide><DonationTier /></Carousel.Slide>
            <Carousel.Slide>2</Carousel.Slide>
            <Carousel.Slide>3</Carousel.Slide>
            <Carousel.Slide>4</Carousel.Slide>
            {/* ...other slides */}
        </Carousel>
    )
}