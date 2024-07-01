import React from 'react';

// 로딩 컴포넌트
const LoadingPage = () => {
  //return <div>로딩 중...</div>;
  return <div>
            <div class="tenor-gif-embed" data-postid="16998974" data-share-method="host" data-aspect-ratio="1" data-width="100%"><a href="https://tenor.com/view/dryer-spin-cute-lizzy-stink-gif-16998974">Dryer Spin Sticker</a>from <a href="https://tenor.com/search/dryer-stickers">Dryer Stickers</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>;
        </div>
};


export default LoadingPage;

///////////////////////////////////////////////////////
// 시용 방법
///////////////////////////////////////////////////////
/*
import React, { useState, useEffect } from 'react';

// 로딩 컴포넌트
const Loading = () => {
  return <div>로딩 중...</div>;
};

// 데이터 컴포넌트
const DataComponent = ({ data }) => {
  return (
    <div>
      <h1>데이터</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    // 데이터 가져오기 시뮬레이션
    setTimeout(() => {
      const fetchedData = { message: '데이터가 성공적으로 로드되었습니다!' };
      setData(fetchedData);
      setLoading(false);
    }, 2000); // 2초 후에 데이터를 가져왔다고 가정
  }, []);

  return (
    <div>
      {loading ? <Loading /> : <DataComponent data={data} />}
    </div>
  );
};

export default App;
*/