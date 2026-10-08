import Header from './Header';
import Sidebar from './Sidebar';

export default function MainLayout({ children }) {
  return (
    <div className="layout-wrapper">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="content-scrollable">
          {children}
        </div>
      </div>
    </div>
  );
}
