# How to work with Git

## Get the Project
```
https://github.com/AleTarin/galeriasAPI.git
```

## Create a Branch
```
git checkout -b <branch-name> 
```
> **checkout** => change branch

> **-b**  => refers that you are creating a new branch

> **branch-name** => Name that identifies what you are doing 

## Check what you changed
 ```
git status 
```

## Save your changes
 ```
git add <file-dir>
```
> Only adds one file
> 
> **file-dir** => You can get it from the git status
 ```
git add .
```
> Add all the changed file

 ```
git commit -m "Descriptive message of the change"
```
> Saves the changes in git log
```
git pull origin develop
```
> Get the changes already made in the repository

 ```
> git push origin <your-branch>
```
> Sends the changes to the online repository

## Make a pull request

- Enter to github
- New Pull request
- Select origin branch
- Select destination branch (develop)
- Review that the changes are correct
- Create pull request
- Someone else should review it