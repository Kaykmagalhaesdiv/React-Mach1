import { Link, useLocation } from 'react-router-dom';
import './style.css';

export default function Breadcrumb() {
    const location = useLocation();

    let currentLink = '';

    const crumbs = location.pathname.split('/').filter(crumb => crumb !== '');

    const crumbsDecodificados = crumbs.map(crumb => decodeURI(crumb));

    return (
        <div className="breadCrumb">
            {crumbsDecodificados.map(crumb => {
                currentLink += `/${crumb}`;

                return (
                    <div className="crumb" key={crumb}>
                        <Link to={currentLink}>{crumb}</Link>
                    </div>
                );
            })}
        </div>
    );
}