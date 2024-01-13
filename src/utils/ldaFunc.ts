/*
 * @Author: jiaminghui
 * @Date: 2024-01-13 18:05:00
 * @LastEditTime: 2024-01-13 18:27:46
 * @LastEditors: jiaminghui
 * @FilePath: \lda_analysis\src\utils\ldaFunc.ts
 * @Description: 
 */
import lda from "lda";

const getLDATopic = (text: string): any[] => {
  // Extract sentences.
  let documents = text.match(/[^\.!\?]+[\.!\?]+/g);

  // Run LDA to get terms for 2 topics (5 terms each).
  let res = lda(documents, 1, 10, ['en']);

  return res;
};

export { getLDATopic };
