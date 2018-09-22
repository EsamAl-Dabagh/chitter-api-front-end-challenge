# Chitter API Front-End Challenge

## The task
Build a front-end single-page-app to interface with the Chitter backend API.

## Proposed Domain Model
```
                                            +---------------+
                                            |               |
                                            |  CONTROLLER   |
                                            |               |
                                            +---------------+


              VIEWS                                                                     MODELS
        +---------------+                                                          +---------------+
        |               |                                                          |               |
        |    SIGNUP     |                                                          |     USERS     |
        |               |                                                          |               | 
        +---------------+                                                          +---------------+

        +---------------+                                                          +---------------+
        |               |                                                          |               |
        |    LOG IN     |                                                          |     PEEPS     |
        |               |                                                          |               | 
        +---------------+                                                          +---------------+

        +---------------+                                                          +---------------+
        |               |                                                          |               |
        |   ALL PEEPS   |                                                          |     PEEP      |
        |               |                                                          |               | 
        +---------------+                                                          +---------------+

        +---------------+
        |               |
        |  SINGLE PEEP  |
        |               |
        +---------------+

        +---------------+
        |               |
        |   NEW PEEP    |
        |               |
        +---------------+




```