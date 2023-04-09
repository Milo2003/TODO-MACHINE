import React from 'react';
import { createPortal } from 'react-dom';

import './CongratModal.css';

export function CongratModal({setOpenCongratModal}) {
    return createPortal(
        <div className="congratBackground">
            <div className="containerCongrat">
                <div className='emojis'> 🥳 🎉 👏</div>
                <h2>Felicidades has completado todos tus Todos</h2>
                <h4>Crea uno nuevo</h4>
                <button onClick={()=>{setOpenCongratModal(prevValue => !prevValue)}} className='aceptar'>Aceptar</button>
            </div>
        </div>,
        document.getElementById('congrat')
    );
}
