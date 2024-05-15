Taken a string input
split into array
Go through every element to create a unique key in an object
Go through every element again, if the element matches key then check the next element to add to the property value in an array
Stop when element is null

NO NEED FOR DOUBLE FOR LOOP

--------

iterate through the properties
> With each key, add to result stirng
>> randomly pick one of the array of values
>> 0 to array.length pick a number
>> if selection is null, stop AND THEN

> take that value as the key

> go to the property using that key / repeat



const chains = {
  "The":  ["cat", "cat", "hat"],
  "cat":  ["is", "is"],
  "is":   ["in", "the", "a"],
  "in":   ["the"],
  "the":  ["hat.", "cat."],
  "hat.": ["The"],
  "cat.": ["The", null],
  "hat":  ["is"],
  "a":    ["cat"],
}