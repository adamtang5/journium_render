# remove all console.log and debugger
grep -lr console.log --exclude-dir=node_modules
grep -lr debugger --exclude-dir=node_modules

heroku login

heroku git:remote -a aa-journium
