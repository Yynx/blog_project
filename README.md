# Blog Project  #

## Planning  ##

### User stories ###
As a user, I want to have a website where I can post journal entries to record my daily life.
As a user, I want to be able to read other people’s journal entries.
As a user, I would like to be able to post GIFS in my journal to make the posts more expressive.
As a user, I want my journal entries to be saved so I can refer back to them.
As a user, I want to be able to react to journal posts with emojis so I can share how I feel about the journal posts.
As a user, I want to be able to comment on people’s journal entries to show feedback/support.

### Tasks / Features ###
HTML/CSS layout (pair. large)
Making blog posts (pair. medium)
Leaving comments + word/character limit (solo. small)
Adding emoji reactions (solo. small)
GIFS API (Giphy?) (solo. medium)
Server side - routing (medium. pair)
jQuery functionality (medium. pair)
Saving and loading JSON data (medium. pair)
Github setup (small. solo)
GitHub pages/Heroku (medium. solo)


### Technologies ###
jQuery
Bootstrap
Node.js and Express
EJS/Pug
GitHub pages/Heroku

### The Team ###

#### Team preferences ####
Lauren - frontend
Dan - frontend/backend
Brian -front end/backend
Josh - backend
Using camelCase

##### Standups ####
9.30AM (and evening one if proposed)

#### Teamwork style #####
Morning: Driver/navigator with a feedback session
After lunch: solo work
After that: group catchup going through solo work


## Day 1 - Minimum Viable Product ##

After planning for our first day we decided to work on our MVP:

A basic html site hosted by githubpages/heroku that allows users to view and create blog posts.

For this we spilt into two pairs:
Pair 1 - working on backend - Using node.js and express to save to and load from a JSON Object storing blogs
Pair 2 - working on frontend - HTML and CSS layout for homepage, blog creation and blog viewing.

This was useful as it means we could use base parts of the front and back end respectivley on how the other functioned.


### Method ### 
During this we choose to work in small cycles of creating a part of the site:

1. made sure to get basic functionality tested and working before overcomplicating.
2. linked smaller functions together / added additional functionality once finished.
3. consider mutiple plans of action during development incase parts were not compatible.

This meant we were building on a solid foundation.


### Issues ###
1. Problems with git hub branches using git command line 
--> using github pages

2. Loading files were asynchronous so we were accessing the json file prior to it being loaded 
--> Nested functionality that needed the files within the load file callback

3. Refactoring code too early which lead to a loss of functionality 
--> Returned to previous version of code and will refactor during polishing

## Day 2 - Minimum Viable Product ##

### Stand Up ###

Pair 1:
Achievements: Navbar, form page, homepage, basic layout and css, git hub setup.

Pair 2: 
Achievements: Saving/loading json files, node js express (some routes), setup class structure, basic html to test these.

Goals for the day:
Merge front and backend.
Host site.

Blockers: Due to early issues merging on git might have some issues

