import { Button } from 'react-bootstrap';
import { FaWifi, FaUserCircle, FaSignOutAlt, FaBars } from 'react-icons/fa';

export default function Header() {
  return (
    <div className="header-container">
      <div className="header-left">
        <FaBars style={{ cursor: 'pointer' }} />
        <span>AM011 - Logistics Integration (LEGION)</span>
      </div>
      <div className="header-right">
        <FaWifi />
        <span>Tue, 6 Oct 2026 10:40:19</span>
        <FaUserCircle size={18} />
        <Button variant="danger" size="sm" className="d-flex align-items-center gap-1" style={{ padding: '2px 8px' }}>
          <FaSignOutAlt /> Logout
        </Button>
      </div>
    </div>
  );
}
