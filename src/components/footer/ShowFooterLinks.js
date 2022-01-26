import { Link } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";

const ShowFooterLink = ({ links, external }) => {
  return links.map((link) => (
    <ul className="footer_ul" key={link.id}>
      <li className="footer_ul_li">
        <span>
          <BsChevronRight size={20} />
        </span>
        {external ? (
          <>
            <a href={link.route} target="_blank" rel="noreferrer">
              {link.name}
            </a>
          </>
        ) : (
          <>
            <Link to={link.route ? link.route : `/details/${link.id}`}>
              {link.name}
            </Link>
          </>
        )}
      </li>
    </ul>
  ));
};
export default ShowFooterLink;
