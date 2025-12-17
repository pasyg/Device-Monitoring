# device_simulator.py
import requests
import time
import random

url = "http://localhost:5144/api/device-data"

rand_ip1 = 1
rand_ip2 = 2

while True:
    # 10 percent chance to get a new IP
    if(random.randint(0, 9) == 0):
        rand_ip1 = random.randint(0, 255)

    test_sensor1 = {
	    "DeviceName" : "PyTestSensor-01",
        "DeviceIp": f"192.168.1.{rand_ip1}",
        "Status" : f"{"online" if random.randint(0, 19) == 0 else "offline"}"
    }
    # 20 percent chance to get a new IP
    if(random.randint(0, 19)):
        new_ip = random.randint(0, 255)
        if(new_ip != rand_ip1):
            rand_ip2 = new_ip

    test_sensor2 = {
            "DeviceName" : "PyTestSensor-02",
            "DeviceIp" : f"192.168.1.{rand_ip2}",
            "Status" : f"{"online" if random.randint(0, 19) == 0 else "offline"}"
    }
    
    response = requests.post(url, json=test_sensor1)
    response = requests.post(url, json=test_sensor2)
    print(f"Sent data")
    
    time.sleep(3)
