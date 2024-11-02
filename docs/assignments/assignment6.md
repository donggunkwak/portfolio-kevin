---
title: "Assignment 6"
layout: doc
---

## [Task List](https://docs.google.com/spreadsheets/d/1upjspoVjjHvaycJIrtH6zwqx1awYiG1n3NW0FuEL4i0/edit?usp=sharing)

[Website](https://brainwave-frontend-eight.vercel.app/)

## Study Reports

### Kristine:

On the first task, the account management task, what was unexpected for me was that Kristine did not think it was clear
whether or not she was already logged into the website. She had to see that there was some text telling her to login.
This is because the homepage already looks accessible, and everything seems available even if you are not logged in (even
if it isn't). And furthermore, to log in, she first clicked on the home button, perhaps due to the icons being too small and
because she maybe thought that the home page would also have a login feature. However, the rest of the task went well.

For task 2, everything was going well until the comment section, which was understandably difficult to find. She first clicked
on the profile to try and find the comments. Then, she saw "unverified", thinking it was telling her that she was unverified
when it was actually the user she clicked on. Perhaps this is due to the profile page not being clear enough that it was a profile,
and not a message. Then, she went back to the home page to get to the post, and stated she was trying to find a comment button, and
could not find the commenting feature without my help.

Task 3 went fine, everything about the voting concept was intuitive to her, but she stated she wasn't really reading the info too
much, and instead just going off of verifications.

Task 4 was also very intuitive, except that she wished that some sort of update on if the verification went through would be nice.

For task 5, Kristine had no problem finding the page for administrating the verification requests. However, she was very confused
with the UI, as she thought the text box to put in the description of what the verification is was instead links of stuff that 
the users would put in. This is because of the words "verification specification" and "verification contents".

### Cameron:

For task 1, Cameron thought it was actually obvious that he was logged out and needed to press the login button. However, something
new he brought up was that, even though he went into the settings to change the username and logout, he might've thought it was
in the profile tab, and that he just guessed and got lucky.

For task 2, the plus button was again obvious for creating posts, and he expected his post to be under his profile which it was.
However, like Kristine, he had trouble finding where to comment, and was expecting a comment button. He even ended up clicking
the edit button, thinking it might be a comment button as well. He required my help in finding the comment feature as well.
Towards the end of the task, he even told me that he wouldn't have known there was a comment feature if I hadn't told him there
was one and that there was a task.

For task 3, Cameron provided some really interesting insights on how people might use the website for its trustworthiness features.
When asked to go vote on posts, he expected to see who clicked on the post and who voted on it, instead of going to the poster's
profile to see if they were verified. I think perhaps this is partly because it is unclear whether or not the users are verified
in the post component themselves, as there is no icon. However, he also said that it seemed important who voted on the post,
as he thought that, if he was a professor, he would spend more time voting then actually posting.

For task 4, submitting a verification request was quite easy for Cameron, but he expected to see some indication of the verification
request he just submitted. He also wished that the verification form had a title section and a body section, so it could be more
clear what the title was and what the content was.

In task 5, Cameron found the administrating feature quite easily as well. However, he also was confused on the text box,
thinking it was where screenshots that the user provided would be. This is because it said "verification contents". However,
he eventually figured out that the textbox was what would show up on the user's profile. He said that "'verification contents' is
like what the user submitted, and as an admin it's strange to see, but noticed that it was a textbox so I figured it out". Tying into
his statement in task 4, he said that having a title and body separated would be enough, so when an admin accepted a request,
just the title would show up on his profile.

## Design Flaws
- (Physical, Moderate) As Kristine stated during her user test, it is unclear whether or not you are logged into the website. 
This is because the website looks almost identical whether or not you are logged in or not, except for the difference of some text
and a few icons at the top. The home page has it seem like almost all the features you can do are available, as you can look at all
posts and the like buttons are even all there (even though you can't click it). Some ideas would to be to make the app not available
to use until you logged in, similar to instagram or facebook. Or, just have the home page be more obvious that it is not logged in,
maybe with larger text taking up most of the screen telling the user to log in or a more grayed out version of the website to signify
that the website is not fully available.

- (Linguistic, Critical) Kristine and Cameron both were unable to find the commenting feature, and Cameron even said that he wouldn't
have known it exists unless he was told. This is most likely due to the fact that there is nothing on the website telling the user
that the posts have comments. In other social media apps, there is usually an indication of how many comments a post has or even 
a comment button. This was an extremely critical flaw in the website, and some fixes are definitely in need, like a comment button,
or even a "click here to open the contents of the post".

- (Linguistic, Major/Critical) Both Kristine and Cameron had trouble understanding what the UI meant for the administrating feature,
both thinking that the textbox was where images or videos would show. Cameron got it after some time, but it was still taking way too long.
The reason this happened was because the page was made for admin users like me, who would understand what the page is for, but
this caused it to be way too unclear. The text "verifcation contents" and "verifcation specification" made it seem like that would
be what the user put in, even if their own content was put above. I think Cameron's idea of splitting the verification submission
into a title and body would work really well to fix this issue, as the admin user wouldn't even have to put any text, they would
just click accept or deny and the title would show up on users' profiles. Another possible way to fix this is to just put some
better text explaining what the textbox is for.