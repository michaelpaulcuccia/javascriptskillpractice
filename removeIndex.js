/*
REMOVE A POST (Object) FROM AN ARRAY OF POSTS BY USING USER_ID


ORIGINAL CODE:
const removeIndex = post.comments.map(comment => comment.user.toString()).indexOf(req.user.id);
post.comments.splice(removeIndex, 1);

- The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
- The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new element

*/


let posts = {
    comments: [
        { _id: 1, text: 'comment text one', user: 1 },
        { _id: 2, text: 'comment text two', user: 2 },
        { _id: 3, text: 'comment text three', user: 3 }
    ]
};

let reqUserId = 2

//remove toString()
const removeIndex = posts.comments.map(comment => comment.user).indexOf(reqUserId);
console.log(removeIndex);
//OUTPUT:: 1

let removedPost = posts.comments.splice(removeIndex, 1);
console.log(removedPost);
//OUTPUT:: [ { _id: 2, text: 'comment text two', user: 2 } ]

console.log(posts);
/*{
    comments: [
        { _id: 1, text: 'comment text one', user: 1 },
        { _id: 3, text: 'comment text three', user: 3 }
      ]
    }
*/