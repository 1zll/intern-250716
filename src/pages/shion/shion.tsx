/** 
 * 自分のページのサンプル
 */

import { Link } from 'react-router-dom';
import './shion.scss';

function shion() {
  return (
    <div className="shion">
      <div className="shion-container">
        <h1 className="shion-title">潮音のマイページ</h1>
        
        <div className="shion-content">
          <div className="shion-profile">
            <div className="shion-profile-header">
              <div className="shion-avatar">
                G
              </div>
              <h2 className="shion-name">田中 潮音</h2>
            </div>
            
            <div className="shion-info">
              <div className="shion-info-item">
                <span className="label">メール:</span>
                <span className="value">shion-tanaka@internet.gmo</span>
              </div>
              <div className="shion-info-item">
                <span className="label">職業:</span>
                <span className="value">学生</span>
              </div>
              <div className="shion-info-item">
                <span className="label">希望職:</span>
                <span className="value">フロントエンジニア</span>
              </div>
              <div className="shion-info-item">
                <span className="label">入社日:</span>
                <span className="value">2027/04/01</span>
              </div>
              <div className="shion-info-item">
                <span className="label">趣味:</span>
                <span className="value">バスケットボール・ゲーム・ギター・歌うこと</span>
              </div>
              <div className="shion-info-item">
                <span className="label">好きなもの:</span>
                <span className="value">バスケットボール・ゲーム・ギター・歌うこと・紫色
                </span>
              </div>
            </div>
          </div>

          {/* トップに戻るリンク */}
          <div className="shion-links">
            <Link to="/" className="shion-link">ホームに戻る</Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default shion;
