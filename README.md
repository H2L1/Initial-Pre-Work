# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

The client (your computer) checks with the server it believes the URL is located at. The server checks to see if that domain is hosted on it. If it is, then your website will pull up, if not, then the server will send out requests to other server to see if it can find where the URL you want is located. Once it finds the host server, the first server saves the URL location in it's memory incase another client wants to know where that URL is hosted. This prevents the first server from having to ask around again.

## From start to finish, how does data reach you to be rendered in the browser?

I think this is the same as the first answer.

## What code is rendered in the browser?

HTML, CCS, and Javascript.

## What is the server-side code’s main function?

I think it's to handle the request the client has sent the server to view a webpage for instance.

## What is the client-side code’s main function?

To take the code that it was given from the server side and execute it in a user friendly format.

## What is runtime?

The total time from when a program starts all the way to when it ends.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

There is a new instance each time the client gets a response from the server.

## How many instances of the server-side code are available at any given time?

As many as are needed to handle the client's request. I'm not really sure what this is asking for to be honest. I'm reading about scripts that handle the client's request for a webpage and when a page is posted back to the website. Not sure as to how many instances there are. I think there is an instance every time there is a post back to the server.

## How many instances of the databases connected to the server application are created?

I'm not sure. Is a new one created each time a client calls information from the database? I'm reading that database instances are like partitioned sections of your hard drive that you have a different OS on, but instead of OS the different database instance is a complete database environment that can be used for a different purpose, like storing the information from on department separate from another department's database.  https://www.lifewire.com/database-instance-1019612
