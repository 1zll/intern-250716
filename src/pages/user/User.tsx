import { useState } from 'react'
import './User.scss'

function User() {
  const [username, setUsername] = useState('');
  const [searchResults, setSearchResults] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [rawHtml, setRawHtml] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      // Fetch users from the API
      const response = await fetch('/api/users.json');
      if (!response.ok) {
        throw new Error('Failed to fetch users data');
      }
      
      const data = await response.json();
      
      // Filter users based on the input (case insensitive)
      const filteredUsers = data.users.filter((user: any) => 
        user.name.toLowerCase().includes(username.toLowerCase())
      );
      
      setSearchResults(filteredUsers);
      
      // Create unsafe HTML that includes the raw user input - THIS IS INTENTIONALLY VULNERABLE
      // DON'T DO THIS IN PRODUCTION CODE!
      setRawHtml(`
        <div class="search-query">
          <h3>検索クエリ: ${username}</h3>
          <p>検索結果: ${filteredUsers.length}件</p>
        </div>
      `);
    } catch (err) {
      setError('データの取得中にエラーが発生しました。');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="user-page">
      <div className="header">
        <h1>ユーザー検索</h1>
      </div>

      <div className="main">
        <section className="demo-section">
          <h2>ユーザー名検索</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">ユーザー名:</label>
              <input 
                type="text" 
                id="username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                placeholder="ユーザー名を入力" 
              />
            </div>
            <button type="submit" disabled={loading}>
              {loading ? '検索中...' : '検索'}
            </button>
          </form>
        </section>

        <section className="output-section">
          <h2>検索結果</h2>
          
          {error && <p className="error">{error}</p>}
          
          {/* ここが脆弱なポイント - dangerouslySetInnerHTML で生の入力を出力 */}
          {rawHtml && (
            <div className="raw-output">
              <h3>脆弱なHTMLの出力:</h3>
              <div 
                className="vulnerable-container"
                dangerouslySetInnerHTML={{ __html: rawHtml }}
              />
            </div>
          )}
          
          {searchResults && searchResults.length > 0 ? (
            <div className="user-results">
              <h3>ユーザー一覧:</h3>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>名前</th>
                    <th>メール</th>
                    <th>部署</th>
                    <th>役割</th>
                  </tr>
                </thead>
                <tbody>
                  {searchResults.map((user: any) => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.department}</td>
                      <td>{user.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : searchResults && searchResults.length === 0 ? (
            <p>該当するユーザーは見つかりませんでした。</p>
          ) : null}
          
        </section>
      </div>
    </div>
  );
}

export default User
