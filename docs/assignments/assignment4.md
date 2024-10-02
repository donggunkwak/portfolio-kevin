---
title: "Assignment 4"
layout: doc
---

# Brainwave
## Concepts
### Posting [ User ]

*-Purpose-* 

Users can post videos (short or long form) or blogs so other users can see.

*-Operational Principle-* 

After making a post, other users can see the post and the user that made them.

*-State-*
```
posts: set Post
author: posts->one User
creationDate: posts-> one Date
type: posts-> ENUM[short, long, blog]
content: posts -> one Video or one String
```

*-Actions-*
```
createPost(author:User, t:ENUM[short, long, blog], content:Video/String):
    generate new post:Post
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
### Authenticating

*-Purpose-* 

Authenticate users so that the app users correspond to people

*-Operational Principle-* 

After a user registers with a username and password, they can authenticateas that user by providing the same username and password pair

*-State-*
```
users: set User(username: String, password: String)
```
*Actions-*
```
register(username:String, password:String):
    if username not in users: 
        users+= new User-> (username,password)

authenticate(username:String, password:String, out auth:boolean):
    if (username,password) in users:
        auth = True

changeUsername(username:String):
    users.username := username
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
    currentUser := user

end():
    currentUser := None
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
verifyRequests: set Request
requestUser: verifyRequests -> one User
requestContent: verifyRequests -> one Image or one String


```
*-Actions-*
```
submitRequest(user:User, content:Image/String, out request:Request):
    verifyRequest += request
    request.requestUser := user
    request.requestContent := content

verifyUser(verifyRequest: Request):
    nonVerifiedUsers -= verifyRequest.user if user in nonVerifiedUsers
    verifiedUsers += verifyRequest.user if user not in verifiedUsers

unverifyUser(user:User):
    nonVerifiedUsers += user if user not in nonVerifiedUsers
    verifiedUsers -= user if user in verifiedUsers
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

## Global Data Model
app Brainwave

    include Posting[User], Authenticating, Sessioning[User], ProfessionalVerifying[User], Liking[Item, User], CorrectnessVoting[User], Commenting[Item, User] 