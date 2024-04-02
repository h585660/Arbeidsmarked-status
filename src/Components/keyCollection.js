import React from 'react';

const ChartControls = ({ onSelectKey }) => {
    const typeKeys = [
        { key: '01-03', name: 'Jordbruk, skogbruk og fiske' },
        { key: '05-09', name: 'Bergverksdrift og utvinning' },
        { key: '10-33', name: 'Industri' },
        { key: '35-39', name: 'Elektrisitet, vann og renovasjon' },
        { key: '41-43', name: 'Bygg og anleggsvirksomhet' },
        { key: '45-47', name: 'Varehandel, motorvognreparasjoner' },
        { key: '49-53', name: 'Transport og lagring' },
        { key: '55-56', name: 'Overnatting og serveringsvirksomhet' },
        { key: '58-63', name: 'Informasjon og kommunikasjon' },
        { key: '64-66', name: 'Finansiering og forsikringsvirksomhet' },
        { key: '68', name: 'Omsetting og drift av fast eiendom' },
        { key: '69-75', name: 'Faglig, vitenskaplig og teknisk tjenesteyting' },
        { key: '77-82', name: 'Forretningsmessig tjenesteyting' },
        { key: '84', name: 'Offentlig administrasjon og forsvar, og trygdeordninger under offentlig forvaltning' },
        { key: '85', name: 'Undervisning' },
        { key: '86', name: 'Helsetjenester' },
        { key: '87', name: 'Pleie- og omsorgstjenester i institusjon' },
        { key: '88', name: 'Sosiale omsorgstjenester uten botilbud' },
        { key: '90-93', name: 'Kulturell virksomhet, underholdning og fritidsaktiviteter' },
        { key: '94-96', name: 'Annen tjenesteyting' }
    ]; 

    return (
        <div>
            <h2>Sektor:</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {typeKeys.map(item => (
                    <button
                        key={item.key}
                        onClick={() => onSelectKey(item.key)}
                        style={{ marginRight: '10px', marginBottom: '10px', width: '200px', height: '60px' }}
                    >
                        {item.name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ChartControls;
