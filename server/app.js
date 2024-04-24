const express = require("express");

const app = express();
const router = require("./src/router/router");

const session = require("express-session");

app.use(
  session({
    secret: "비밀키",
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false, // https에서만 세션 정보를 주고받도록 설정
      maxAge: 1000 * 60 * 60, //쿠키 유효시간 1시간
      httpOnly: true, // 클라이언트에서 쿠키를 확인하지 못하도록 설정
      secure: false, // HTTPS가 아닌 경우 false로 설정
      // maxAge: 1000 * 60 * 60,
      // maxAge: null,
      httpOnly: true,
    },
  })
);

// 세션 정보 출력 미들웨어 추가
app.use((req, res, next) => {
  console.log("세션 정보:", req.session);
  next();
});

// 요청 본문 파싱을 위한 미들웨어 추가
app.use(express.json()); // JSON 형태의 요청 본문을 파싱
app.use(express.urlencoded({ extended: true })); // URL 인코딩된 데이터 파싱

app.use("/", router);

app.listen(8080, () => console.log(`Server is running on 8080`));
