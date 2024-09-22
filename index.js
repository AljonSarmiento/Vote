// Function to handle like and dislike button clicks
function updateCount(buttonId, countId, storageKey) {
  const button = document.getElementById(buttonId);
  const count = document.getElementById(countId);

  // Retrieve saved count from localStorage if it exists
  let savedCount = localStorage.getItem(storageKey);
  if (savedCount) {
     count.textContent = savedCount;
  }

  // Update count on button click
  button.addEventListener("click", () => {
     const currentCount = parseInt(count.textContent, 10) || 0;
     const newCount = currentCount + 1;
     count.textContent = newCount.toString();

     // Save the updated count to localStorage
     localStorage.setItem(storageKey, newCount);
  });
}

// Updating the counts for each button and respective count display
updateCount("btnLike1", "count1", "likeCount1");
updateCount("btnLike2", "count2", "likeCount2");
updateCount("btnDLike1", "countD1", "dislikeCount1");
updateCount("btnDLike2", "countD2", "dislikeCount2");

  