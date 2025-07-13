/**
 * 404ページ
 */
import { Link } from 'react-router-dom';
import './NotFound.scss';

function NotFound() {
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <h1>404</h1>
        <p>ページが見つかりません</p>
        <Link to="/" className="not-found-link">
          ホームに戻る
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
