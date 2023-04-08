import { CommonWrapper } from "../../styles/common/public.style";
import {
  FooterCompanyInfo,
  FooterContainer,
  FooterContentList,
  FooterLogo,
} from "../../styles/layout/footer.style";

const Footer = () => {
  return (
    <FooterContainer>
      <CommonWrapper flexBox={true}>
        <FooterContentList>
          <li>
            <h4>매치</h4>
            <ul>
              <li>모든 매치</li>
              <li>여자 매치</li>
              <li>남녀모두 매치</li>
              <li>스타터 매치</li>
              <li>티셔츠 매치</li>
              <li>초급 매치</li>
              <li>중급 매치</li>
            </ul>
          </li>
          <li>
            <h4>서비스 지역</h4>
            <ul>
              <li>서울</li>
              <li>경기/강원</li>
              <li>인천</li>
              <li>대전/세종/충청</li>
              <li>대구/경북</li>
              <li>부산/울산/경남</li>
              <li>광주/전라</li>
              <li>제주</li>
            </ul>
          </li>
          <li>
            <h4>플랩풋볼</h4>
            <ul>
              <li>플랩풋볼 소개</li>
              <li>매니저 지원</li>
              <li>채용</li>
              <li>공지사항</li>
              <li>자주 묻는 질문</li>
              <li>구장 제휴</li>
            </ul>
          </li>
          <li>
            <h4>소셜미디어</h4>
            <ul>
              <li>인스타그램</li>
              <li>페이스북</li>
              <li>페이스북 그룹</li>
            </ul>
          </li>
        </FooterContentList>

        <FooterCompanyInfo>
          <FooterLogo>
            <img src="../images/icons/footer_logo.svg" alt="footer logo" />
          </FooterLogo>
          <div>
            주식회사 마이플레이컴퍼니 | 서울특별시 마포구 잔다리로31
            제우피스빌딩 2층
            <br />
            <br />
            메일 | contact@plabfootball.com
            <br />
            마케팅 제안 | team@plabfootball.com / 02-704-7983
            <br /> 사업자번호 | 650-81-00575
            <br />
            대표 | 강동규
            <br />
          </div>
          <br />
          <div>
            Copyright <strong>PLAB</strong> All rights reserved.
          </div>
        </FooterCompanyInfo>
      </CommonWrapper>
    </FooterContainer>
  );
};

export default Footer;
