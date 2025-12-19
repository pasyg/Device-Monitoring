# AI assisted Device Monitoring

This project combines an API for collecting and viewing data from different devices in a Dashboard (<b>soon<sup>TM</sup></b>), with a LLM binding for natural language features like querying the database, answering specific questions about the data or detecting anomalies in the devices behavior. All features are ~~((going to be))~~ accessible through a React/Vite frontend.


# How to Run
## ! Important !
Create a free Gemini API key under <link>https://aistudio.google.com/app/api-keys</link>, add an environment file in ```/llm/.env``` and add ``GEMINI_API_KEY=<insert API KEY>`` to work with the LLM. To run without a LLM call, comment out ``query = llm_client.generate_sql_query(user_prompt)`` in ``llm/main.py`` and uncomment ``query = "SELECT * FROM Devices;``.

Clone the repository:
```bash
https://github.com/pasyg/Device-Monitoring.git
```
Then ``cd Device-Monitoring/`` into it.

## Linux

### Backend
To run the backend from `./DeviceMonitoring/backend/device_api`:

```bash
dotnet run
```

### Frontend
To run the frontend from `./DeviceMonitoring/frontend/react`:

```bash
npm install
npm run dev
```

Then access on:

```>
http://localhost:5173/
```


### LLM Assistance
To activate the LLM assistance from ``./DeviceMonitoring/llm`` , first make sure python 3.12 or newer, aswell as ``venv`` are installed. Create a new virtual environment:

```bash
python -m venv /llm/
```

Activate the virtual environment:

```bash>
source /llm/bin/activate
```

And install the necessary requirements:

```bash
pip install -r requirements.txt
```

Then run via:

```bash
uvicorn main:app --port 8000
```

### Mock data
To generate mock data to fill the database, go to:

```bash
./test/deviceswim/
```

and run the simulator:

```bash
python device_sim.py
```


## Docker
To run the code within a Docker container, simply build:

```bash
docker compose build
```

and run:

```bash
docker compose up
```

Then access on:

```>
http://localhost:5173/
```

# Features

## SQL Query
To use the SQL Query feature, simply add a question in the upper textbox and click the button "Send Query". After that, the box below will show the generated SQL Query and the resulting table will be shown below, as can be seen in the image.
![](/img/sql_query.png)



# More to come
- More, different LLMs
-  Logging system (for device malfunctioning, anomaly detection, etc....)
- More device features
	- Register devices
	- Heartbeat
	- Control devices (change project name?!?!)
	- HTTPS
- ...

