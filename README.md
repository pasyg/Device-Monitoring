# AI assisted Device Monitoring

This project combines an API for collecting and viewing data from different devices in a Dashboard (<b>soon<sup>TM</sup></b>), with a LLM binding for natural language features like querying the database, answering specific questions about the data or detecting anomalies in the devices behavior. All features are ~~((going to be))~~ accessible through a React/Vite frontend.


# How to Run
## ! Important !
Create a free Gemini API key under <link>https://aistudio.google.com/app/api-keys</link>, add an environment file in ```/llm/.env``` and add ``GEMINI_API_KEY=<insert API KEY>`` to work with the LLM.

Clone the repository:
<code bash>
https://github.com/pasyg/Device-Monitoring.git
</code>
Then ``cd Device-Monitoring/`` into it.

## Linux

### Backend
To run the backend from `./DeviceMonitoring/backend/device_api`:

<code bash>
dotnet run
</code>

### Frontend
To run the frontend from `./DeviceMonitoring/frontend/react`:

<code bash>
npm install<br>
npm run dev
</code>

Then access on:

<code>
http://localhost:5173/
</code>


### LLM Assistance
To activate the LLM assistance from ``./DeviceMonitoring/llm`` , first make sure python 3.12 or newer, aswell as ``venv`` are installed. Create a new virtual environment:

<code bash>
python -m venv /llm/
</code>

Activate the virtual environment:

<code>
source /llm/bin/activate
</code>

And install the necessary requirements:

<code bash>
pip install -r requirements.txt
</code>

Then run via:

<code bash>
uvicorn main:app --port 8000
</code>

### Mock data
To generate mock data to fill the database, go to:

<code bash>
./test/deviceswim/
</code>

and run the simulator:

<code bash>
python device_sim.py
</code>


## Docker
To run the code within a Docker container, simply build:

<code bash>
docker compose build
</code>

and run:

<code bash>
docker compose up
</code>

Then access on:

<code>
http://localhost:5173/
</code>

# More to come
- More, different LLMs
-  Logging system (for device malfunctioning, anomaly detection, etc....)
- More device features
	- Register devices
	- Heartbeat
	- Control devices (change project name?!?!)
	- HTTPS
- ...

