---
title: "Assignment 4"
layout: doc
---

# Brainwave
[Github](https://github.com/donggunkwak/Brainwave)

[Vercel](https://brainwave-pied-one.vercel.app/)

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
content: posts -> one Video or one String
```

*-Actions-*
```
createPost(author:User, content:Video/String):
    generate new post:Post
    posts += post
    post.author := author
    post.content := content

deletePost(post:ID):
    posts -= post
```
### Authenticating

*-Purpose-* 

Authenticate users so that the app users correspond to people

*-Operational Principle-* 

After a user registers with a username and password, they can authenticateas that user by providing the same username and password pair

*-State-*
```
users: set User
username: users -> one String
password: users -> one String
```
*Actions-*
```
register(username:String, password:String):
    if username not in users: 
        users+= new User
        users.username = username
        users.password = password

authenticate(username:String, password:String, out auth:boolean):
    if (username,password) in users:
        auth = True

changeUsername(user:User, username:String):
    user.username := username

updatePassword(user:User, password:String):
    user.password := password
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
requestContent: verifyRequests -> one Image and/or one String


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
likes: set Like
likedItem: likes -> one Item
liker: likes -> one User
```

*-Actions-*
```
like(user:User, likedItem:Item, out like:Like):
    likes += like
    like.liker = user
    like.likedItem = likedItem

removeLike(user:User, likedItem:Item):
    likes -= Like(user,likedItem)
```

### Correctness Voting [ Item, User ]

*-Purpose-*

Allows users to vote on if an item is correct or not in its information.

*-Operational Principle-*

After many users vote on the correctness of different items, other users can see if the information provided in the item is trustworthy or not.

*-State-*
```
votes: set Vote
voteType: votes-> one ENUM{Correct,False}
voter: votes -> one User
votedItem: votes -> one Item
```
*-Actions-*
```
voteCorrect(user:User, votedItem:Item, out vote: Vote):
    votes += vote
    vote.voter = user
    vote.voteType = Correct
    vote.votedItem = votedItem

voteIncorrect(user:User, votedItem:Item):
    votes += vote
    vote.voter = user
    vote.voteType = Incorrect
    vote.votedItem = votedItem

removeVote(user:User, votedItem:Item):
    votes -= Vote(user, votedItem)
```
### Commenting [ Item, User ]

*-Purpose-*

Users can comment to reply to other items.

*-Operational Purpose-*

After making a comment on an item, a user can see the comments made with the item.

*-State-*
```
comments: set Comment
author: comments -> one User
item: comments -> one Item
content: comments -> one String
```
*-Actions-*
```
makeComment(item:Item, user:User, content:String, out comment: Comment):
    comments+= comment
    comment.item = item
    comment.author = user
    comment.content = content

deleteComment(item:Item, user:User, content:String):
    comments -= Comment(user,item,content)
```

## Global Data Model
app Brainwave

    include Posting[Authenticating.User], 
    Authenticating, 
    Sessioning[Authenticating.User], 
    ProfessionalVerifying[Authenticating.User], 
    Liking[Posting.Post/Commenting.Comment, Authenticating.User], 
    CorrectnessVoting[Posting.Post/Commenting.Comment, Authenticating.User], 
    Commenting[Posting.Post, Authenticating.User] 

## Data Diagram
![Diagram](/assets/images/assignment4/A4diagram.jpeg){:width="800"}

## Design Reflection

A large thing that needed to be resolved was videos, photos, and just how media was handled. With limited access to storing media,
I had to make the decision to just have text available for the backend, and would have the text hold links to videos or photos,
most likely from a google drive upload. I could've tried to make something for direct uploads, but another student had
asked a similar question in the Discourse, to which a TA replied that it wasn't worth the time investment as it would take away
from the goals of the class, so I decided against it.

Another ambiguity was how the professional verification concept would work, like who would be able to verify it. Because of this,
I ended up making it so that the users also have an "admin" variable, that sets to true if they are an admin. I'm a little worried
about the safety of this feature, but wasn't sure how to secure it. However, this way, any "admin" user can approve or reject
verification requests from other users. This was also an ambiguity I needed to figure out, as I was not sure how users would make
requests. I ended up making RequestVerifyDocs, similar to the friend requests docs (which I didn't use in the app but used as reference),
that users could submit. The alternative was just to have the verification requests be a thing separate from the app entirely,
perhaps using google forms or some other outside tool, but I decided against it so I could fully test all my features. 

There were a lot of details about my concepts that I hadn't fully thought of in my previous assignments, so implementing them
definitely caused me to rethink a lot of design decisions and choose the way I would represent my concepts. I like the way
my implementation turned out, even though it definitely took a lot of changing of states and actions for the concepts.