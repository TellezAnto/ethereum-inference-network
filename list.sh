#!/bin/bash

curl -X GET http://localhost:3000/api/open-router/list-endpoints | grep "name"
