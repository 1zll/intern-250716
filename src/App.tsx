import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/home'
import MyPage from './pages/mypage'
import Shion from './pages/shion'//Shionのページをインポートしている
import NotFound from './pages/not-found'
import Api from './pages/api'
import User from './pages/user'
import MahoKawase from './pages/mahokawase'
import Ishiya from './pages/ishiya'
import './App.scss'
import Events from './pages/mahokawase/Events'

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/shion" element={<Shion />} />{/* Shionのページへのルートを追加 */}
        <Route path="/api" element={<Api />} />
        <Route path="/user" element={<User />} />
        <Route path="/mahokawase" element={<MahoKawase />} />
        <Route path='/events' element={<Events />}/>
        <Route path="/ishiya" element={<Ishiya />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      
      <footer className="footer">
        <div className="footer-link">
          <Link to="/">ホーム</Link>
          <span> | </span>
          <Link to="/mypage">マイページ</Link>
          <span> | </span>
          <Link to="/api">API</Link>
          <span> | </span>
          <Link to="/user">ユーザー検索</Link>
        </div>
        <div className="footer-inner">
          Copyright (c) 2025 GMO Internet, Inc. All Rights Reserved.
        </div>
      </footer>

    </Router>
  )
}

export default App
