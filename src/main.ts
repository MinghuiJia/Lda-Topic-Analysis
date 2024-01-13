import { testForLDA } from "./utils/lda_test";
import { getLDATopic } from "./utils/ldaFunc";

import { clock } from "./utils/tools";
import { getContentData } from "./mysql/mysqldb";

(async () => {
  const res = await getContentData();
  console.log("total " + res.length + " contents");

  for (const item of res) {
    console.log("content: " + item["answer_content"]);

    const topicRes = getLDATopic(item["answer_content"]);

    // For each topic.
    for (var i in topicRes) {
      var row = topicRes[i];
      console.log("Topic " + (parseInt(i) + 1));

      // For each term.
      for (var j in row) {
        var term = row[j];
        console.log(term.term + " (" + term.probability * 100 + "%)");
      }

      console.log("");
    }

    await clock(5);
  }
})();

// testForLDA();
