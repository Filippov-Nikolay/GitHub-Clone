import React, {} from "react";

export function OurPartners() {
    const OurPartnersList = [
        {
            id: 1,
            imgSrc: 'https://github.githubassets.com/assets/3m-0151c2fda0ce.svg',
            imgAlt: '3M logo'
        },
        {
            id: 2,
            imgSrc: 'https://github.githubassets.com/assets/kpmg-c249f20c5173.svg',
            imgAlt: 'KPMG logo'
        },
        {
            id: 3,
            imgSrc: 'https://github.githubassets.com/assets/mercedes-fcf97d2d6ec4.svg',
            imgAlt: 'Mercedes-Benz logo'
        },
        {
            id: 4,
            imgSrc: 'https://github.githubassets.com/assets/sap-96248a56d312.svg',
            imgAlt: 'SAP logo'
        },
        {
            id: 5,
            imgSrc: 'https://github.githubassets.com/assets/pg-f1f19955c4e4.svg',
            imgAlt: 'P&amp;G logo'
        },
        {
            id: 6,
            imgSrc: 'https://github.githubassets.com/assets/telus-df0c2109df99.svg',
            imgAlt: 'Telus logo'
        },
    ];

    return (
        <div className="our-partners">
            <p className="our-partners__text">Trusted by the world`s leading organizations ↘️</p>
            <ul className="our-partners__list">
                {OurPartnersList.map((list, listIndex) => (
                    <li className="our-partners__item" key={list.id}>
                        <img className='out-partners__img' src={list.imgSrc} alt={list.imgAlt}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}