# Accumulators

An accumulator will take elements of an array and a static object 
and act on the element relative to that object. 

In this case, a particular key value is collected, and that collection is passed 
to another function.  For this we need a passback function (or series of functions.  
to be used.  

## A thing about the design. 
Some of the functions I am bringing in depend on the values produces by the previous functions
I am taking a key `key1` from the object, and setting it to whatever mapping it is 
(start a blank one if not available ) and adding the current key to it.  I am also attaching
this second key to a set.  There are three separable operations here (maybe four is better)
)

* Ensure a map is attached to`key1` 
* Ensure that 'key2' is mapped to `elt` in that mapping. 
* Ensure that `elt[key2]` is added to a prior set. 

What needs to know about what to do these two things? 

1. The outer function has to know about the mapping and the  element.  The key 
could be baked in.
1. The inner map function has to know about the outer mapping and the element.  Both keys 
could be baked in. 
3. The second inner map just needs to know the element. 

Creating unary functions out of these (think point-free on the next try) makes the 
composition problem much easier.  The master function runs, and the inner functions are run on the SAME mapping and the 
SAME element with no problem. 

> 
> Rule of working : apply the next standard of generalizability.  
> Apply the others after working the first one FIVE times.
>
> And Dude. 
>Dude! 
>
> You have to get much better about returning to these 5x exercises.  
>They don't take that long and you will kick ass at this job if you do. 
>
>
## The main attachment macro
The idea is to go through an array of objects or maps.  For each of these objects or 
maps, check if it has a designated key.  If it does, then add to the entry the map. 


````javascript
const 
````
