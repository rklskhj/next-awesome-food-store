import Animation from "./Animation";
import Link from "next/link";

export default function About() {
  return (
    <>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <Animation />
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          AWESOME FOOD STORE
          <br className="hidden lg:inline-block" />
          ABOUT?
        </h1>
        <p className="mb-8 leading-relaxed">
          Awesome Food Store는 우리 동네 맛집 리스트를 한눈에 모아 볼 수 있고{" "}
          맛집의 정보까지 제공합니다. <br /> 풍부하게 이상이 구하지 이상을 곳이
          설산에서 사막이다. 시들어 영락과 끝에 말이다. 이상의 것은 인생을
          품으며, 피고 끓는 청춘의 피다. 가슴에 물방아 동력은 있는 천자만홍이
          그것은 청춘은 힘있다. 하여도 굳세게 얼음 품에 심장은 황금시대를 이것을
          이것이다. 희망의 그들은 발휘하기 두손을 이상 같지 위하여서. 스며들어
          천하를 황금시대를 커다란 이 들어 황금시대의 부패뿐이다. 실현에
          착목한는 갑 아니더면, 능히 길지 보라. 길을 않는 청춘에서만 위하여,
          그들은 봄바람이다. 것은 우리의 설레는 곧 황금시대다. 간에 고행을
          인간의 끓는 얼마나 용기가 청춘의 끓는다.
        </p>
        <div className="flex justify-center">
          <Link href="/StoreList" className="btn-project">
            STORE GO!
          </Link>
        </div>
      </div>
    </>
  );
}
