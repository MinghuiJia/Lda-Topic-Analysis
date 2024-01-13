import mysql from "mysql";
import { MyRowData } from "./types";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "crawlerdb",
});

const getContentData = (): Promise<Array<MyRowData>> => {
  return new Promise((resolve, reject) => {
    try {
      connection.query('SELECT answer_content from quora_answers_questions', function(err, rows, fields) {
        if (err) reject(err);
  
        resolve(rows);
      });
    } catch (error) {
      throw error;
    }
    
  });
}

export { getContentData };
