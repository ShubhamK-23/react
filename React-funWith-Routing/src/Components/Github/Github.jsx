// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() { 
    const data = useLoaderData();

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 200px)' }}>
            <div className="flashcard mdl-card mdl-shadow--2dp" style={{ maxWidth: '500px', border: '1px solid #ccc', borderRadius: '10px' }}>
                <div className="mdl-card__title mdl-card--expand" style={{ backgroundColor: 'rgb(194, 65, 12)', color: '#fff' }}>
                    <h2 className="mdl-card__title-text" style={{ textAlign: 'center', fontSize: '2rem', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>{data.name}</h2>
                </div>
                <div className="mdl-card__supporting-text" style={{ padding: '1.5rem' }}>
                    <div className="mdl-grid" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div className="mdl-cell mdl-cell--6-col">
                            <img className="avatar" src={data.avatar_url} alt="Avatar" style={{ width: '140px', height: '140px', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '50%', marginRight: '1.5rem' }} /> 
                        </div>
                        <div className="mdl-cell mdl-cell--6-col">
                            
                            <p className="followers" style={{ fontSize: '1.2rem', marginTop: '0', marginBottom: '0.5rem' }}>Followers: {data.followers}</p>
                            <p className="following" style={{ fontSize: '1.2rem', marginTop: '0', marginBottom: '0.5rem' }}>Following: {data.following}</p>
                        </div>
                    </div>
                </div>
                <div className="mdl-card__actions mdl-card--border" style={{ display: 'flex', justifyContent: 'center', padding: '1.5rem', borderTop: '1px solid #eee' }}>
                    <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"> Learn More </a>
                </div>
            </div>
        </div>
    );
}

export default Github;







