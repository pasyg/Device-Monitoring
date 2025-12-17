import { useState } from "react";

function SqlQuery() {
    const [text, setText] = useState("");
    const [response, setResponse] = useState("");

    console.log("SqlLLL2");

    const API_LLM = import.meta.env.VITE_LLM_URL;
    const API_BACKEND = import.meta.env.VITE_BACKEND_URL;

    const sendToApi = async () => {   
        try {
            const response = await fetch(`${API_LLM}/sqlquery`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ message: text }),
            });
  
            const data = await response.json();
            var output = 'Final query:\n' + data.query + "\n\n" + 'Executed:\n' + data.sql_execute
            setResponse(output);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <textarea
                name="SQLQuery Request"
                type="text"
                value={text}
                onChange={ (e) => setText(e.target.value) }
                className="w-3/4 h-40 p-6 bg-white text-black rounded-xl border-2 focus:border-black resize-none mb-4"
                placeholder="Write SQL Query here..."
            />
            <div className="relative">
                <button 
                    onClick={sendToApi}
                    className="absolute -bottom-10 -left-4 hover:bg-gray-500 bg-white border rounded cursor-pointer text-xl ml-4 px-2 py-2">
                        Send Query
                </button>
            </div>
            <textarea
                value={response}
                className="w-3/4 h-80 p-4 bg-white text-black rounded-xl border-2 resize-none mt-16"
                readOnly
                placeholder="LLM Response"
            />
        </div>
    );
}

export default SqlQuery;