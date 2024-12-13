import { StyledHeader } from '@/components/Header/Header.styled';
import { PAPER_PLANE_ICON } from '@/constants/images';
import Image from 'next/image';

function Header() {
  return (
    <StyledHeader>
      <div className="container">
        <Image
          className="paper-plane-icon"
          src={PAPER_PLANE_ICON}
          width={50}
          height={50}
          alt="Avião de papel icone"
        />

        <ul className="header-menu-list">
          <li className="header-menu-list-item selected">Voluntários</li>
          <li className="header-menu-list-item">Eventos</li>
          <li className="header-menu-list-item">Calendário</li>
        </ul>
      </div>
    </StyledHeader>
  );
}

export default Header;
