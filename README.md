# ddt
example code for a drill down tool using meteor and chat.js to display real time IOT telemetry data

This code makes the following assumptions:
a) IOT telemetry is coming to a server somewhere
b) the telemetry is being parsed into consumable data. In my case I am using fluentd to parse the telemetry, which I receive via syslog from the receiving server.
c) the telemtry is inserted into a mongo db. In my case fluentd is doing this.
d) this code then subscribes to and publishes (meteor terminology) the data, making it visible

I wrote this mostly because I could not find a working code prototype for using multi-dimensional line charts in meteor.
This code is working. It has warts, but it may be neough to get you going. 

cheers.
