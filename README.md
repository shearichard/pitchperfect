# README
## Using twisted as the server 
The basis for this is the following blog post : https://blog.anvileight.com/posts/simple-python-http-server/

However for some reason the suggested command to start twisted in that blog post is not correct. This is the correct
command.

```
twistd -n -o web --path=./www/
```
This will serve on localhost:8080 .

##Virtenv
The virtualenv on polo is 'py3twstd'.

