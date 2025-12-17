const API_BASE_URL = "http://localhost:5144/api";

export const deviceApi = {
    getAll: async() => {
        const response = await fetch(`${API_BASE_URL}/device`);
        if(!response.ok) throw new Error(`HTTP Error! status:  ${response.status}`);
        return response.json();
    },
    create: async (deviceData) => {
        const response = await fetch(`${API_BASE_URL}/device`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json' },
            body: JSON.stringify(deviceData)
        });
        if(!response.ok) throw new Error(`HTTP Error! status:  ${response.status}`);
        return response.json();
    },
}