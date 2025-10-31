import { useState } from "react";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const dummy = [
      "서울시립미술관 전시: ‘빛과 그림자’",
      "국립극단 연극: ‘인간의 조건’",
      "롯데콘서트홀 클래식 공연: ‘가을의 선율’",
    ];
    const filtered = dummy.filter(item =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  };

  return (
    <div className="app">
      <h1>🎭 공연·전시 추천 서비스</h1>
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>검색</button>

      <div className="results">
        {results.length > 0 ? (
          results.map((item, i) => <p key={i}>{item}</p>)
        ) : (
          <p>추천 결과가 없습니다.</p>
        )}
      </div>
    </div>
  );
}

export default App;
