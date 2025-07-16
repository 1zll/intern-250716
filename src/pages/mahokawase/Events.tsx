import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Events.scss'

function Events() {
    const [eventTitle, setEventTitle] = useState('');
    const [searchResults, setSearchResults] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [rawHtml, setRawHtml] = useState('');

    useEffect(() => {
    const fetchEvents = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await fetch('/api/events.json');
            if (!response.ok) throw new Error('イベント取得に失敗しました');
            const data = await response.json();
            setSearchResults(data.events); // 初期表示で全件表示
        } catch (err) {
            setError('イベントデータの取得に失敗しました。');
            console.error(err);
        } finally {
            setLoading(false);
        }
        };
        
        fetchEvents();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        
        try {
        // Fetch users from the API
        const response = await fetch('/api/events.json');
        if (!response.ok) {
            throw new Error('Failed to fetch users data');
        }
        
        const data = await response.json();
        
        // Filter users based on the input (case insensitive)
        const filteredEvents = data.events.filter((event: any) => 
            event.name.toLowerCase().includes(eventTitle.toLowerCase())
        );
        
        setSearchResults(filteredEvents);
        
        // Create unsafe HTML that includes the raw user input - THIS IS INTENTIONALLY VULNERABLE
        // DON'T DO THIS IN PRODUCTION CODE!
        setRawHtml(`
            <div class="search-query">
            <h3>検索クエリ: ${eventTitle}</h3>
            <p>検索結果: ${filteredEvents.length}件</p>
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
        <div className="event-page">
        <div className="header">
            <h1>イベント一覧</h1>
        </div>

        <div className="main">

            <section className="output-section">
            
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
                <div className="event-results">
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>イベント名</th>
                        <th>概要</th>
                        <th>主催者</th>
                        <th>カテゴリ</th>
                    </tr>
                    </thead>
                    <tbody>
                    {searchResults.map((event: any) => (
                        <tr key={event.id}>
                            <td>{event.id}</td>
                            <td>{event.title}</td>
                            <td>{event.description}</td>
                            <td>{event.organizer}</td>
                            <td>{event.category}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
            ) : searchResults && searchResults.length === 0 ? (
                <p>該当するイベントは見つかりませんでした。</p>
            ) : null}
            
            </section>

        </div>
        <div className="back-link">
            <Link to="/">ホームに戻る</Link>
        </div>
        </div>
    );
}

export default Events
