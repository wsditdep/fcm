"use client";

import React, { useEffect, useState } from 'react'

const Tc = ({ data }) => {
    const [info, setInfo] = useState({});

    useEffect(() => {
        const infoData = data?.filter(item => item.title === "tc")[0];
        setInfo(infoData);
    }, []);
    return (
        <>
            <section className="content-section">
                <div dangerouslySetInnerHTML={{ __html: info?.description }}></div>
            </section>
        </>
    )
}

export default Tc