import { useState } from 'react';
import './App.css';
import { Save } from "../wailsjs/go/main/App";

function App() {
    const [textareaContent, setResultText] = useState("");
    const updateResultText = (result: string) => setResultText(result);

    const saveToFile = async () => {
        try {
            const result = await Save(textareaContent);
            if (result) {
                alert("File saved successfully!");
            }
        } catch (error) {
            console.error("Failed to save file:", error);
        }
    };

    return (
        <div id="App">
            <div className="container">
                <textarea name="notepad" id="notepad" onChange={(ev) => {
                    updateResultText(ev.target.value)
                }}></textarea>
                <button className="save" onClick={saveToFile}>Save</button>
            </div>
        </div>
    )
}

export default App
