import { useState } from 'react';
import './App.css';
import DealersHand from './components/DealersHand';
import PlayersHand from './components/PlayersHand';
import Options from './components/Options';

function App() {
    const [split, setSplit] = useState(false);
    const [double, setDouble] = useState(true);

    function dealCards () {

    }

    return (
        <>
            <div>
                <div>
                    <DealersHand />
                    
                </div>
                <div>
                    <PlayersHand />
                    <Options />

                </div>
            </div>
        </>
    )
}

export default App
