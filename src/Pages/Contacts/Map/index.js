import React, { useState } from 'react'
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import LoadingProgress from '../../../Shared/Components/LoadingProgress'
import styles from './Map.module.css'

function MyMap() {
    const [infoOpen, setInfoOpen] = useState(false);
    const [zoom, setZoom] = useState(14);
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: 'AIzaSyDwqyqTXf3LudFEVva7Pp2RJomnhbPMAPI'
    })
    const onMarkerClick = () => {
        if (infoOpen) { setInfoOpen(false); }
        setInfoOpen(true);
        setZoom(16)
    }
    const position = {
        lat: 42.71395564458539,
        lng: 23.265231330162912
    }

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100%' }}
            zoom={zoom}
            center={position}
        >
            <Marker
                position={position}
                title="студио за масажи Top Мassage"
                onClick={onMarkerClick}
            />
            {
                infoOpen
                    ?
                    <InfoWindow
                        onCloseClick={() => setInfoOpen(false)}
                        position={position}
                    >
                        <div className={styles.info}>
                            <div className={styles.infoTitle}>Top Massage</div>
                            <p>бул. "Царица Йоана" 49</p>
                            <p>1324 ж.к. Люлин 7, София</p>
                            <p>България</p>
                        </div>
                    </InfoWindow>
                    : null
            }
            <></>
        </GoogleMap >
    ) : <LoadingProgress />
}

export default MyMap
