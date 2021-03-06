# Chitter API Front-End Challenge

## The task
Build a front-end single-page-app to interface with the Chitter backend API.

## User Stories
```
As a user
So I can see what other people are saying
I want to be able to view all peeps on one page
```

```
As a user
So I can post my own peeps
I want to be able to register
```

## How to Run
```
git clone https://github.com/EsamAl-Dabagh/chitter-api-front-end-challenge.git
cd chitter-api-front-end-challenge
```
Then open `index.html`

## Technologies

JavaScript: Using the fetch API to make calls to the Chitter backend API. 
Test-Driven using Jasmine. 

## Domain Model
```

+---------------+
|               |
|  INTERFACE    |
|               |
+---------------+
       |
       |
       |
+---------------+
|               |
|  CONTROLLER   |
|               |
+---------------+
       |
       |              +--------------+  
       |              |              |
       |------------> |    PEEPS     |
       |              |              |
       |              +--------------+       +--------------+
       |                                     |              |
       |-----------------------------------> | AllPeepsView |
       |                                     |              |
       |                                     +--------------+
       |
       |
       |
       |                                     +--------------+        
       |                                     |              |
       |-----------------------------------> | RegisterView |
                                             |              |
                                             +--------------+

```