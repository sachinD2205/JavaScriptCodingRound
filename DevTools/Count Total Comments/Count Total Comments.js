// DO CHANGE FUNCTION NAME

function countComments(comments) {
  if (!comments) return 0;
  let count = 1;



  if (comments.replies && comments.replies.length > 0) {
    comments.replies.forEach((rep) => {
      count += countComments(rep)
    })
  }

  return count;
}
