/** 
 * 自分のページのサンプル
 */

import { Link } from 'react-router-dom';
import './MahoKawase.scss';
import morokko from '../../assets/morokko.jpg';

function MahoKawase() {
  return (
    <div className="mypage">
      <div className="mypage-container">
        <h1 className="mypage-title">マイページ</h1>
        
        <div className="mypage-content">
          <div className="mypage-profile">
            <div className="mypage-profile-header">
              <div className="mypage-avatar">
                <img src={morokko} />
              </div>
              <h2 className="mypage-name">川瀬 真帆</h2>
            </div>
            
            <div className="mypage-info">
              <div className="mypage-info-item">
                <span className="label">メール:</span>
                <span className="value">maho-kawase@internet.gmo</span>
              </div>
              <div className="mypage-info-item">
                <span className="label">部署:</span>
                <span className="value">開発部</span>
              </div>
              <div className="mypage-info-item">
                <span className="label">役職:</span>
                <span className="value">フロントエンジニア</span>
              </div>
              <div className="mypage-info-item">
                <span className="label">入社日:</span>
                <span className="value">2027/04/01</span>
              </div>
              <div className="mypage-info-item">
                <span className="label">作ったAPI:</span>
                <span className="value">
                  <Link to="/events" className="mypage-link">イベント一覧</Link>
                </span>
              </div>
            </div>
          </div>

          {/* トップに戻るリンク */}
          <div className="mypage-links">
            <Link to="/" className="mypage-link">ホームに戻る</Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default MahoKawase;
