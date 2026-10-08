import { 
  FaHome, FaTruck, FaClipboardList, FaChartLine, FaMapMarkerAlt, 
  FaTrophy, FaBoxOpen, FaLayerGroup, FaPhoneAlt, FaBox, FaCogs, FaSitemap, FaTimes
} from 'react-icons/fa';

export default function Sidebar() {
  const menuItems = [
    { name: 'Dashboard', icon: <FaHome /> },
    { name: 'DCL', icon: <FaTruck />, hasChildren: true },
    { name: 'Manifest', icon: <FaClipboardList />, hasChildren: true },
    { name: 'Overall Stock Monitoring', icon: <FaChartLine /> },
    { name: 'Stock Movement Monitoring', icon: <FaChartLine /> },
    { name: 'Vehicle Tracking', icon: <FaMapMarkerAlt /> },
    { name: 'Plane Stock Achievement', icon: <FaTrophy />, hasChildren: true },
    { name: 'Big Part Supply', icon: <FaBoxOpen /> },
    { name: 'Initial Stock', icon: <FaLayerGroup />, active: true },
    { name: 'Hotcall', icon: <FaPhoneAlt />, hasChildren: true },
    { name: 'Overflow', icon: <FaBox />, hasChildren: true },
    { name: 'Backflush', icon: <FaCogs />, hasChildren: true },
    { name: 'Common', icon: <FaSitemap />, hasChildren: true },
    { name: 'Master', icon: <FaCogs />, hasChildren: true },
  ];

  return (
    <div className="sidebar-container">
      <div className="sidebar-logo">
        <FaTimes className="text-danger me-2" /> Legion
      </div>
      
      {/* User Info Box */}
      <div className="px-3 py-2 d-flex align-items-center gap-2 border-bottom">
        <img src="https://via.placeholder.com/30" alt="User" className="rounded-circle" />
        <div style={{ fontSize: '11px', lineHeight: '1.2' }}>
          <div>Welcome, Kanban 4001</div>
          <div className="text-success">&bull; Online</div>
        </div>
      </div>

      <div className="sidebar-menu">
        {menuItems.map((item, index) => (
          <div key={index} className={`sidebar-item ${item.active ? 'active' : ''}`}>
            <div className="icon-wrapper">{item.icon}</div>
            <span className="flex-grow-1">{item.name}</span>
            {item.hasChildren && <span style={{ fontSize: '10px', color: '#ccc' }}>&#9664;</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
