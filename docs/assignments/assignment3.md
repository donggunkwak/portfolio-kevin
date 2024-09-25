---
title: "Assignment 3"
layout: doc
---

# Brainwave
## Pitch
Brainwave intends to act a social media focused on learning, teaching, and sharing information. Specifically, for those people who want to pick up new hobbies or skills, or are in school, to find connections to those similar to them and facilitate their learning experience. The app will be focused on really being an outlet to learn, unlike other apps that are mostly just for entertainment. However, it will still be entertaining as to not become similar to websites/apps that are just purely educational/professional. 

Similar to many other social media apps, the app will have short form videos, long form videos, and blogs to share media. However, as a lot of information spread on social media apps are very susceptible to being false information, Brainwave works to help fix this issue. Trustworthy information is a key goal with Brainwave, and we try to accomplish this through Professional Verification to verify professionals in their fields, and through a new way for users to react to media: Correctness voting. Instead of just upvoting or downvoting, Brainwave introduces the concept of Correctness voting, where users can vote on if a media has information that is correct or not. This way, users can decide for themselves to see if the media they saw should be trusted or not, and see if others think so as well. Brainwave works to create an inclusive, trustworthy, and still entertaining learning environment for users.

## Concepts
### Posting [ User ]

*-Purpose-* 

Users can post videos (short or long form) or blogs so other users can see.

*-Operational Principle-* 

After making a post, other users can see the post and the user that made them.

*-State-*
```
posts: set IDs
author: posts->one User
creationDate: posts-> one Date
type: posts-> ENUM[short, long, blog]
content: posts -> one Video or one String
```

*-Actions-*
```
createPost(author:User, t:ENUM[short, long, blog], content:Video/String):
    generate post = ID
    posts += post
    post.author := author
    post.type := t
    post.content := content
    post.creationDate := Current Date

deletePost(post:ID):
    posts -= post
    post.author := None
    post.type := None
    post.content := None
    post.creationDate := None
```
### Authenticating [ User ]

*-Purpose-* 

Authenticate users so that the app users correspond to people

*-Operational Principle-* 

After a user registers with a username and password, they can authenticateas that user by providing the same username and password pair

*-State-*
```
users: set User->(username: String, password: String)
```
*Actions-*
```
register(username:String, password:String):
    if username not in users: 
        users+= new ID -> (username,password)

authenticate(username:String, password:String):
    if (username,password) in users:
        authenticate

changeUsername(user:User, username:String):
    if user == currentUser and username not in users:
        users.user.username := username
```
### Sessioning [ User ]

*-Purpose-* 

Allows user to log in as a specific user to start a session on the app.

*-Operational Principle-*

A user can log in and do whatever they want to do on the app as "user".

*-State-*
```
currentUser:User
```
*-Actions-*
```
start(user:User):
    user := user

end():
    user := None
```
### Professional Verifying [ User ]

*-Purpose-* 

Verifies users that are professionals so other users can see that they are trustworthy sources of information.

*-Operational Principle-* 

A user can make a request to get verified, then their account will be verified.

*-State-*
```
verifiedUsers: set User
nonVerifiedUsers: set User
```
*-Actions-*
```
verifyUser(user:User):
    nonVerifiedUsers -= user
    verifiedUsers += user

unverifyUser(user:User):
    nonVerifiedUsers += user
    verifiedUsers -= user
```
### Liking [ Item, User ]

*-Purpose-*

Allows users to like items to keep them saved and rank by popularity

*-Operational Principle-*

After many different users have liked different items, items with more likes will show up to users more often, or can be sorted
by popularity.

*-State-*
```
likedItems: User-> set of items
numLikes: Item-> one Integer
```

*-Actions-*
```
like(user:User, likedItem:Item):
    user.likedItems += likedItem
    likedItem.numLikes +=1

removeLike(user:User, likedItem:Item):
    assert likedItem in user.likedItem
    user.likedItems -= likedItem
    likedItem.numLikes -=1
```

### Correctness Voting [ Item, User ]

*-Purpose-*

Allows users to vote on if an item is correct or not in its information.

*-Operational Principle-*

After many users vote on the correctness of different items, other users can see if the information provided in the item is trustworthy or not.

*-State-*
```
userVote: User-> set (Item, ENUM[correct, incorrect])
numCorrect: Item-> one Integer
numIncorrect: Item-> one Integer
```
*-Actions-*
```
voteCorrect(user:User, votedItem:Item):
    assert votedItem not in user.userVote
    votedItem.numCorrect+=1
    user.userVote += (votedItem, correct)

voteIncorrect(user:User, votedItem:Item):
    assert votedItem not in user.userVote
    votedItem.numIncorrect+=1
    user.userVote += (votedItem, incorrect)

removeVote(user:User, votedItem:Item):
    assert votedItem in user.userVote
    if user.userVote[ 1 ] == correct:
        votedItem.numCorrect-=1
    else if user.userVote[ 1 ] == incorrect:
        votedItem.numIncorrect-=1
    user.userVote -= votedItem
```
### Commenting [ Item, User ]

*-Purpose-*

Users can comment to reply to other items.

*-Operational Purpose-*

After making a comment on an item, a user can see the comments made with the item.

*-State-*
```
comments: Item-> set (User, String)
```
*-Actions-*
```
makeComment(item:Item, user:User, comment:String):
    item.comments += (user,comment)

deleteComment(item:Item, user:User, comment:String):
    assert (user,comment) in item.comments
    item.comments -= (user,comment)
```

## Dependency Diagram
![Dependency](/assets/images/assignment3/DependencyDiagram.png){:width="800"}