import { Link } from 'react-router-dom';
import './Api.scss';

function Api() {
  const baseUrl = window.location.origin;
  
  const apiEndpoints = [
    {
      name: 'ユーザー情報',
      path: '/api/users.json',
      description: 'サンプルユーザー情報のリスト'
    },
    {
      name: '製品情報',
      path: '/api/products.json',
      description: '販売製品の情報'
    },
    {
      name: 'ニュース記事',
      path: '/api/news.json',
      description: '最新のニュース記事'
    },
    {
      name: 'イベント情報',
      path: '/api/events.json',
      description: '予定されているイベント'
    },
    {
      name: '天気情報',
      path: '/api/weather.json',
      description: '東京の現在の天気と予報'
    }
  ];

  return (
    <div className="api-page">
      <h1>Mock API エンドポイント</h1>
      <p className="api-description">
        以下のJSONファイルは、フロントエンド開発用のモックAPIとして利用できます。
        直接URLにアクセスするか、<code>fetch</code>を使用してデータを取得できます。
      </p>

      <div className="endpoint-list">
        {apiEndpoints.map((endpoint, index) => (
          <div className="endpoint-card" key={index}>
            <h2>{endpoint.name}</h2>
            <p>{endpoint.description}</p>
            <div className="endpoint-url">
              <code>{baseUrl}{endpoint.path}</code>
            </div>
            <div className="endpoint-actions">
              <a 
                href={endpoint.path} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="view-button"
              >
                JSONを表示
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="code-example">
        <h2>使用例</h2>
        <pre>
          <code>
{`// Fetch APIを使用してデータを取得する例
fetch('/api/users.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // データを処理するコード
  })
  .catch(error => console.error('Error:', error));

// または async/await を使用
async function fetchData() {
  try {
    const response = await fetch('/api/products.json');
    const data = await response.json();
    console.log(data);
    // データを処理するコード
  } catch (error) {
    console.error('Error:', error);
  }
}`}
          </code>
        </pre>
      </div>

      <div className="back-link">
        <Link to="/">ホームに戻る</Link>
      </div>
    </div>
  );
}

export default Api;
