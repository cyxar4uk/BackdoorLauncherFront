import svgPaths from "./svg-444n1vckkz";
import img from "figma:asset/65c3b9da027f5b187d9d1bbac855b7a2a82dfc51.png";
import imgRectangle145 from "figma:asset/81b8cc580c8c3461d24d686f42c46d25a9264ae5.png";

function Component1() {
  return (
    <div className="absolute blur-[15px] h-[1110px] left-[-20px] pointer-events-none top-[-15px] w-[1960px]" data-name="Фон">
      <img alt="" className="absolute inset-0 max-w-none object-cover opacity-75 size-full" src={img} />
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_41px_605px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[0_5.01%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.7901 42">
        <g id="Group">
          <path d={svgPaths.p1027a800} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Component2() {
  return (
    <div className="absolute inset-[95.75%_36.67%_0_35.33%] overflow-clip" data-name="настройки">
      <Group />
    </div>
  );
}

function Component3() {
  return (
    <div className="absolute inset-[48.74%_29.33%_44.79%_28%]" data-name="магазин">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g clipPath="url(#clip0_1_434)" id="Ð¼Ð°Ð³Ð°Ð·Ð¸Ð½">
          <path d={svgPaths.p1832c270} fill="var(--fill-0, #A3A3A3)" id="Vector" />
          <path d={svgPaths.p1739f600} fill="var(--fill-0, #A3A3A3)" id="Vector_2" />
          <path d={svgPaths.p1978c690} fill="var(--fill-0, #A3A3A3)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_1_434">
            <rect fill="white" height="64" width="64" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component4() {
  return (
    <div className="absolute inset-[35.79%_29.33%_57.74%_28%]" data-name="новости">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g clipPath="url(#clip0_1_442)" id="Ð½Ð¾Ð²Ð¾ÑÑÐ¸">
          <path d={svgPaths.p2e08cf80} fill="var(--fill-0, #A2A2A2)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_442">
            <rect fill="white" height="64" width="64" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component5() {
  return (
    <div className="absolute inset-[23.36%_29.33%_70.17%_28%]" data-name="сервера/играть">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="ÑÐµÑÐ²ÐµÑÐ°/Ð¸Ð³ÑÐ°ÑÑ">
          <path d={svgPaths.p27d35180} fill="var(--fill-0, #A2A2A2)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Menu() {
  return (
    <div className="absolute h-[989px] left-[1770px] top-[33px] w-[150px]" data-name="menu">
      <Component2 />
      <Component3 />
      <Component4 />
      <Component5 />
      <div className="absolute inset-[0_14.67%_89.89%_18.67%] rounded-[20px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgRectangle145} />
      </div>
      <div className="absolute flex flex-col font-['Ubuntu:Medium',sans-serif] inset-[10.11%_0_85.44%_0] justify-center leading-[0] not-italic text-[22px] text-center text-white">
        <p className="leading-[normal]">CyXar4uk</p>
      </div>
    </div>
  );
}

function Component7() {
  return (
    <div className="absolute contents leading-[normal] left-[47px] not-italic text-[26px] text-white top-[603px]" data-name="Создание аккаунта">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold left-[47px] opacity-80 top-[603px] w-[341px]">Дата создания аккаунта:</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium left-[377px] opacity-50 top-[603px] w-[341px]">31 февраля 2230, в 25:59</p>
    </div>
  );
}

function Component9() {
  return (
    <div className="absolute contents left-[47px] top-[444px]" data-name="Дискорд инфо">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[47px] opacity-80 text-[26px] top-[444px]">Ваш Discord</p>
      <div className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[0] left-[47px] opacity-50 text-[18px] top-[475px]">
        <p className="leading-[normal] mb-0">Укажите никнейм и тег (при наличии) вашего профиля Дискорд.</p>
        <p className="leading-[normal] mb-0">Он так же будет отображен при просмотре вашего профиля</p>
        <p className="leading-[normal]">другими пользователями</p>
      </div>
    </div>
  );
}

function Component10() {
  return (
    <div className="absolute contents font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[1087px] text-[26px] top-[477px]" data-name="Дискорд данные">
      <p className="absolute left-[1087px] opacity-90 top-[477px]">cyxar4uk</p>
      <p className="absolute left-[1445px] opacity-90 top-[477px]">0</p>
      <p className="absolute left-[1426px] opacity-70 top-[477px]">#</p>
    </div>
  );
}

function Component8() {
  return (
    <div className="absolute contents left-[47px] not-italic text-white top-[444px] whitespace-nowrap" data-name="Дискорд">
      <Component9 />
      <Component10 />
    </div>
  );
}

function Component12() {
  return (
    <div className="absolute contents left-[47px] top-[298px]" data-name="ВКонтакте инфо">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[47px] opacity-80 text-[26px] top-[298px]">Ваш ВКонтакте</p>
      <div className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[0] left-[47px] opacity-50 text-[18px] top-[329px]">
        <p className="leading-[normal] mb-0">Укажите ссылку на Вашу страницу во ВКонтакте.</p>
        <p className="leading-[normal] mb-0">Она будет отображена при просмотре вашего профиля</p>
        <p className="leading-[normal]">другими пользователями</p>
      </div>
    </div>
  );
}

function Component13() {
  return (
    <div className="absolute contents font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[1087px] text-[26px] top-[331px]" data-name="ВКонтакте данные">
      <p className="absolute left-[1087px] opacity-70 top-[331px]">{`https://vk.com/`}</p>
      <p className="absolute left-[1281px] opacity-90 top-[331px]">cyxar4uk</p>
    </div>
  );
}

function Component11() {
  return (
    <div className="absolute contents left-[47px] not-italic text-white top-[298px] whitespace-nowrap" data-name="ВКонтакте">
      <Component12 />
      <Component13 />
    </div>
  );
}

function Component15() {
  return (
    <div className="absolute contents left-[47px] top-[170px]" data-name="Инфо">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold left-[47px] opacity-80 text-[26px] top-[170px]">Пароль</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium left-[47px] opacity-50 text-[18px] top-[201px]">Пароль для входа в аккаунт</p>
    </div>
  );
}

function Component16() {
  return (
    <div className="absolute contents font-['Inter:Medium',sans-serif] font-medium left-[1061px] text-[26px] top-[201px]" data-name="Кнопки">
      <p className="absolute left-[1346px] opacity-70 top-[201px]">Сменить пароль</p>
      <p className="absolute left-[1061px] opacity-70 top-[201px]">История входов</p>
    </div>
  );
}

function Component14() {
  return (
    <div className="absolute contents leading-[normal] left-[47px] not-italic text-white top-[170px] whitespace-nowrap" data-name="Пароль">
      <Component15 />
      <Component16 />
    </div>
  );
}

function Component18() {
  return (
    <div className="absolute contents left-[47px] not-italic text-white top-[28px] whitespace-nowrap" data-name="Инфо">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] left-[47px] opacity-80 text-[26px] top-[28px]">Электронная почта</p>
      <div className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[0] left-[47px] opacity-50 text-[18px] top-[59px]">
        <p className="leading-[normal] mb-0">Электронаая почта на которую зарегистрирован</p>
        <p className="leading-[normal]">аккаунт</p>
      </div>
    </div>
  );
}

function Component19() {
  return (
    <div className="absolute contents left-[1132px] top-[66px]" data-name="Кнопки">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[1132px] not-italic opacity-70 text-[26px] text-white top-[66px] whitespace-nowrap">anyway-minecraft@aw-m.ru</p>
    </div>
  );
}

function Component17() {
  return (
    <div className="absolute contents left-[47px] top-[28px]" data-name="Почта">
      <Component18 />
      <Component19 />
    </div>
  );
}

function Component6() {
  return (
    <div className="absolute h-[704px] left-[92px] overflow-clip top-[269px] w-[1577px]" data-name="Настройки аккаунта">
      <div className="absolute backdrop-blur-[10px] bg-[rgba(21,21,21,0.6)] border border-[#606060] border-solid h-[65px] left-[1061px] rounded-[13px] top-[460px] w-[497px]" />
      <div className="absolute backdrop-blur-[10px] bg-[rgba(21,21,21,0.6)] border border-[#606060] border-solid h-[65px] left-[1061px] rounded-[13px] top-[314px] w-[497px]" />
      <div className="absolute backdrop-blur-[10px] bg-[rgba(21,21,21,0.6)] border border-[#606060] border-solid h-[65px] left-[1061px] rounded-[13px] top-[49px] w-[497px]" />
      <Component7 />
      <Component8 />
      <Component11 />
      <Component14 />
      <Component17 />
    </div>
  );
}

function Component21() {
  return (
    <div className="absolute contents left-[141px] top-[132px]" data-name="Основные">
      <div className="absolute border-[#808080] border-[1.5px] border-solid h-[65px] left-[141px] mix-blend-lighten opacity-30 rounded-[14px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.65)] top-[132px] w-[349px]" />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[178px] not-italic opacity-40 text-[26px] text-white top-[149px] whitespace-nowrap">Основные настройки</p>
    </div>
  );
}

function Component22() {
  return (
    <div className="absolute contents left-[511px] top-[132px]" data-name="Лаунчер">
      <div className="absolute border-[#808080] border-[1.5px] border-solid h-[65px] left-[511px] mix-blend-lighten opacity-30 rounded-[14px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.65)] top-[132px] w-[236px]" />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[575px] not-italic opacity-40 text-[26px] text-white top-[149px] whitespace-nowrap">Лаунчер</p>
    </div>
  );
}

function Component23() {
  return (
    <div className="absolute contents left-[768px] top-[132px]" data-name="аккаунт">
      <div className="absolute border-[#808080] border-[1.5px] border-solid h-[65px] left-[768px] mix-blend-lighten rounded-[14px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.65)] top-[132px] w-[202px]" />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[817px] not-italic text-[26px] text-white top-[149px] whitespace-nowrap">Аккаунт</p>
    </div>
  );
}

function Component20() {
  return (
    <div className="absolute contents left-[141px] top-[132px]" data-name="Навигация настроек">
      <Component21 />
      <Component22 />
      <Component23 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#2c2c2c] relative size-full" data-name="Настройки">
      <Component1 />
      <div className="absolute bg-gradient-to-l from-[#202020] h-[1080px] left-[1770px] to-[175.96%] to-[rgba(32,32,32,0)] top-0 w-[150px]" />
      <Menu />
      <Component6 />
      <Component20 />
    </div>
  );
}