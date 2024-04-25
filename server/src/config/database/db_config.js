require("dotenv").config();
const mysql = require("mysql");

// mysql 모듈의 createPool 함수를 사용하여 데이터베이스 연결 풀을 생성합니다.
const dbInfo = mysql.createPool({
  // connectionLimit: 동시에 생성할 수 있는 연결의 최대 수입니다. 최대 10개의 연결을 동시에 관리할 수 있습니다.
  connectionLimit: 10,

  // port: 데이터베이스 포트 번호
  port: "3306",

  // host: 데이터베이스 서버의 호스트명 또는 IP 주소입니다. 여기서는 로컬호스트(즉, 같은 컴퓨터)에 설치된 데이터베이스를 사용합니다.
  host: "localhost",

  // user: 데이터베이스에 접근할 때 사용할 사용자 이름입니다. 여기서는 'root' 사용자를 사용합니다.
  user: "root",

  // password: 데이터베이스 사용자의 비밀번호입니다.
  password: "1124",

  // database: 연결하려는 데이터베이스(schemas)의 이름입니다.
  database: "aaa",

  // 이모티콘 글 쓰기 삽입 시 정상 출력을 위한 코드
  charset: "utf8mb4",
});

// 생성된 커넥션 풀을 모듈로 내보냅니다. 이를 통해 다른 파일에서 이 커넥션 풀을 불러와 데이터베이스 작업을 수행할 수 있습니다.
module.exports = dbInfo;
