import lda from "lda";

function testForLDA() {
  // Example document.
  let text = "Cats are small. Dogs are big. Cats like to chase mice. Dogs like to eat bones.";

  // Extract sentences.
  let documents = text.match(/[^\.!\?]+[\.!\?]+/g);

  console.log(documents);

  // Run LDA to get terms for 2 topics (5 terms each).
  let res = lda(documents, 2, 5);

  // For each topic.
  for (var i in res) {
    var row = res[i];
    console.log("Topic " + (parseInt(i) + 1));

    // For each term.
    for (var j in row) {
      var term = row[j];
      console.log(term.term + " (" + term.probability * 100 + "%)");
    }

    console.log("");
  }
}

export { testForLDA };
