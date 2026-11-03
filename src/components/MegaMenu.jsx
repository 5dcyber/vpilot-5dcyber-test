import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function MegaMenu({ menu, onClose }) {
  if (!menu) return null;
  return (
    <div className="enterprise-mega" role="region" aria-label={`${menu.eyebrow} menu`}>
      <div className="mega-narrative">
        <span className="eyebrow">{menu.eyebrow}</span>
        <h3>{menu.title}</h3>
        <p>{menu.description}</p>
        <Link className="mega-cta" to={menu.cta[1]} onClick={onClose}>
          {menu.cta[0]} <ArrowRight size={16}/>
        </Link>
      </div>
      <div className="mega-link-area">
        {menu.columns.map((column) => (
          <div className="mega-link-column" key={column.title}>
            <h4>{column.title}</h4>
            {column.links.map(([label, href]) => (
              <Link key={label} to={href} onClick={onClose}>{label}<ArrowRight size={13}/></Link>
            ))}
          </div>
        ))}
      </div>
      <div className="mega-visual" aria-hidden="true">
        <div className="mini-orbit"><i/><i/><i/></div>
        <b>V</b><span>Integrated operations</span>
      </div>
    </div>
  );
}
