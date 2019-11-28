# Blog Project  #

## Planning  ##

### User stories ###
- As a user, I want to have a website where I can post journal entries to record my daily life.
- As a user, I want to be able to read other people’s journal entries.
- As a user, I would like to be able to post GIFS in my journal to make the posts more expressive.
- As a user, I want my journal entries to be saved so I can refer back to them.
- As a user, I want to be able to react to journal posts with emojis so I can share how I feel about the journal posts.
- As a user, I want to be able to comment on people’s journal entries to show feedback/support.

### Tasks / Features ###
- HTML/CSS layout (pair. large)
- Making blog posts (pair. medium)
- Leaving comments + word/character limit (solo. small)
- Adding emoji reactions (solo. small)
- GIFS API (Giphy?) (solo. medium)
- Server side - routing (medium. pair)
- jQuery functionality (medium. pair)
- Saving and loading JSON data (medium. pair)
- Github setup (small. solo)
- GitHub pages/Heroku (medium. solo)

### Technologies ###
- jQuery
- Bootstrap
- Node.js and Express
- EJS/Pug
- GitHub pages/Heroku
- fs
- [ml-sentiment](https://www.npmjs.com/package/ml-sentiment)
- [inputEmoji](https://github.com/ili4x/inputEmoji)

### The Team ###

#### Team preferences ####
- Lauren - frontend
- Dan - frontend/backend
- Brian - frontend/backend
- Josh - backend
- Using camelCase

##### Standups ####
9.30AM (and evening one if proposed)

#### Teamwork style #####
- Morning: Driver/navigator with a feedback session
- After lunch: solo work
- After that: group catchup going through solo work

## Day 1 - Minimum Viable Product ##

After planning for our first day we decided to work on our MVP:

A basic html site hosted by githubpages/heroku that allows users to view and create blog posts.

For this we spilt into two pairs:
- Pair 1: working on frontend - HTML and CSS layout for homepage, blog creation and blog viewing
- Pair 2: working on backend - Using node.js and express to save to and load from a JSON Object storing blogs

This was useful as it made sure we could use the frontend and backend respectively regardless of how the other functioned.


### Method ### 
We choose to work in small cycles of creating a part of the site:

1. Made sure to get basic functionality tested and working before overcomplicating.
2. Linked smaller functions together / added additional functionality once finished.
3. Considered multiple plans of action during development in case parts were not compatible.

This meant we were building on a solid foundation.


### Issues ###
1. Problems with github branches using git command line 
--> using github pages

2. Loading files were asynchronous so we were accessing the json file prior to it being loaded 
--> Nested functionality that needed the files within the load file callback

3. Refactoring code too early which lead to a loss of functionality 
--> Returned to previous version of code and will refactor during polishing

## Day 2 - Minimum Viable Product ##

### Stand Up ###

#### Achievements:

Pair 1: Navbar, form page, homepage, basic layout and css, github setup.

Pair 2: Saving/loading json files, node js express (some routes), set up class structure, basic html to test these.

#### Goals for the day: 
Merge front and backend.
Host site.

#### Blockers:
Due to early issues merging on git might have some issues

## Day 3 - Minimum Viable Product

### Stand Up

#### Achievements:

Brian:
* Implemented emoji feature
* Went through libraries with bad readmes until finding one that worked!

Lauren / Josh:
* Merged site together
* Added css
* Added comment functionality

Dan:
* Got giphy 'working' on express and JQuery
* Going with JQuery

#### Goals: 

Brian: 
* Sentiment analysis for blog content
* Use info to suggest emojis to use
* Heroku/github pages

Josh: 
* Emoji buttons
* Comment functionality (how they're loaded / saved on submission)
* Implement preview button to view blog post

Lauren:
* Fix giphy css
* Work with Dan on giphy functionality

Dan:
* Fix up giphy app to load list of individual gifs (stop duplicates from happening)

#### Stretch goals: 
* Automatic tagging of pages (Josh/Brian)
* Determine what is possible from all these

#### Blockers: 
None

## Day 4

### Stand Up

#### Achievements:
Lauren & Dan:

* Added giphy support to blog upload page.
* Worked on homepage styling.

Today's goals:

* Finish giphy implementation.
* Finalise styling.
* Deploy.

Josh:
* Refactored app.js.
* Added routes and the required logic.
* Implemented file handling classes.

Today's goals:
* Reaction route.
* Roam.

Brian:

* Sentiment analysis extension, including html and styling.

Today's goals:
* Update routes.
* Styling for analysis page.
* Deploy.


