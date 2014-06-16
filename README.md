# Working with localStorage</h1>

## Introduction

- Stores key/value pairs locally within the client web browser 
- Key/value keys persists after the browser is refreshed/closed/navigated away from
- Data doesn’t need to be transmitted to the remote web browser 
- Compatible across all major web browsers 
- Can be used to remember login usernames
- Can be used to create local save-states 
- Ideal for saving and storing non-essential data in the client side

## localStorage setItem method

``` 
localStorage.setItem("key", "value")
```
- Takes two arguements (both in strings).
- This method creates a key/value pair in localStorage.
- The first argument is the key, and the second argument is the value.


## localStorage getItem method

``` 
localStorage.getItem("key")
```
- Takes in the key of a stored key/value pair.
- This method calls the value of a key that is already stored

## localStorage removeItem method

``` 
localStorage.removeItem("key")
```
- Takes in the key of a stored key/value pair.
- This method calls the associated key-value pair, and removes it from localStorage.

## Things to consider 
- localStorage methods only take strings as it's arguments
- The maximum amount of data stored cannot exceed 5 mb
- Not a replacement total replacement for back-end databases

## Additional Links 
- Context explanation http://diveintohtml5.info/storage.html 
- Thorough method explanations + cool tricks to work around string-only limitation
http://www.smashingmagazine.com/2010/10/11/local-storage-and-how-to-use-it/
- browser compatibility http://caniuse.com/namevalue-storage