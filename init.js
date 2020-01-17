// index.js파일을 app과 init파일로 분리
// export와 import 활용
import app from "./app";

const PORT = 3000;

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
