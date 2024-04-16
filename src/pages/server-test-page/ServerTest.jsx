import { useEffect, useState } from "react";
import axios from "axios";

const TestConnection = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/test");
        console.log(res.data); //받은데이터 확인
        setMessage(res.data.message);
      } catch (error) {
        // 에러 처리 코드
      }
    };

    fetchData();
  }, []);

  return <div>{message}</div>;
};

export default TestConnection;
