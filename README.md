# quadBtech_assignment
## Assigment Submission for quandBtech Internship test.

The frontend is almost identicalto the given link of the website.

First, it fetches the data from 'https://api.wazirx.com/api/v2/tickers' and then loads it into MySQL database, 
which is then used to retrieve data for the backend endpoint.
The backend has one endpoint ('/data') to send data to frontend.
Each time there is a GET request, it fetches  fresh data from the Wazirx API , loads to database and then sends it the frontend.


