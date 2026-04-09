import svgPaths from "./svg-rnmyzlae3c";
import img from "figma:asset/55f8aca9bb4bdf137da58c91b2ff2a6859c2608a.png";
import imgRectangle145 from "figma:asset/81b8cc580c8c3461d24d686f42c46d25a9264ae5.png";
import img1 from "figma:asset/b187b1ed250c9b61ac3dbb87aa82cf2677089d43.png";
import img2 from "figma:asset/4cc69df6585a140004c6f81bd13e5e66ebd79122.png";
import imgImage2 from "figma:asset/6d02d2f2d0f178f8d86e4ef5ad01961ad0f4432f.png";

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
          <path d={svgPaths.p1027a800} fill="var(--fill-0, #A2A2A2)" id="Vector" />
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
    <div className="absolute inset-[62.18%_29.33%_31.34%_28%]" data-name="магазин">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g clipPath="url(#clip0_1_397)" id="Ð¼Ð°Ð³Ð°Ð·Ð¸Ð½">
          <path d={svgPaths.p1832c270} fill="var(--fill-0, #A3A3A3)" id="Vector" />
          <path d={svgPaths.p1739f600} fill="var(--fill-0, #A3A3A3)" id="Vector_2" />
          <path d={svgPaths.p1978c690} fill="var(--fill-0, #A3A3A3)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_1_397">
            <rect fill="white" height="64" width="64" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component4() {
  return (
    <div className="absolute inset-[49.24%_29.33%_44.29%_28%]" data-name="новости">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g clipPath="url(#clip0_1_402)" id="Ð½Ð¾Ð²Ð¾ÑÑÐ¸">
          <path d={svgPaths.p2e08cf80} fill="var(--fill-0, #A2A2A2)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_402">
            <rect fill="white" height="64" width="64" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component5() {
  return (
    <div className="absolute inset-[36.3%_29.33%_57.23%_28%]" data-name="кланы">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g clipPath="url(#clip0_1_394)" id="ÐºÐ»Ð°Ð½Ñ">
          <path d={svgPaths.p8011ef0} fill="var(--fill-0, #A2A2A2)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_394">
            <rect fill="white" height="64" width="64" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component6() {
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

function Menu({ className }: { className?: string }) {
  return (
    <div className={className || "absolute h-[989px] left-[1770px] top-[33px] w-[150px]"} data-name="menu">
      <Component2 />
      <Component3 />
      <Component4 />
      <Component5 />
      <Component6 />
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
    <div className="absolute h-[104px] left-[170px] overflow-clip top-[509px] w-[1462px]" data-name="Навигация ЛК">
      <div className="absolute border-[#606060] border-[1.75px] border-solid h-[70px] left-0 opacity-70 rounded-[14px] top-[17px] w-[323px]" />
      <div className="absolute border-[#606060] border-[1.75px] border-solid h-[70px] left-[344px] opacity-30 rounded-[14px] top-[17px] w-[323px]" />
      <div className="absolute border-[#606060] border-[1.75px] border-solid h-[70px] left-[688px] opacity-30 rounded-[14px] top-[17px] w-[323px]" />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[74px] not-italic opacity-75 text-[28px] text-white top-[35px] whitespace-nowrap">Достижения</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[456px] not-italic opacity-40 text-[28px] text-white top-[35px] whitespace-nowrap">Значки</p>
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[805px] not-italic opacity-40 text-[28px] text-white top-[35px] whitespace-nowrap">Кланы</p>
    </div>
  );
}

function Component8() {
  return (
    <div className="absolute contents left-[170px] top-[223px]" data-name="Аккаунт">
      <div className="absolute h-[123px] left-[800px] top-[223px] w-[115px]" data-name="значок 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img1} />
      </div>
      <div className="absolute left-[170px] pointer-events-none rounded-[20px] size-[180px] top-[223px]" data-name="Голова 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[20px] size-full" src={img2} />
        <div aria-hidden="true" className="absolute border-3 border-[#606060] border-solid inset-0 rounded-[20px]" />
      </div>
      <p className="absolute font-['Minecraft_Rus:Regular',sans-serif] leading-[normal] left-[410px] not-italic text-[#f9f4ff] text-[64px] top-[259px] whitespace-nowrap">MaqaBlaze</p>
      <p className="absolute font-['Minecraft_Rus:Regular',sans-serif] leading-[0] left-[407px] not-italic text-[0px] text-white top-[333px] whitespace-nowrap">
        <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] text-[28px]">Играет уже:</span>
        <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] text-[28px]">{` `}</span>
        <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] text-[#9d69d0] text-[28px]">12 лет</span>
      </p>
    </div>
  );
}

function Component10() {
  return (
    <div className="absolute left-[1354px] size-[325px] top-[158px]" data-name="Край">
      <div className="absolute inset-[-0.46%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 328 328">
          <g id="ÐÑÐ°Ð¹">
            <circle cx="164" cy="164" id="Ellipse 8" r="122.75" stroke="var(--stroke-0, #707070)" strokeWidth="1.5" />
            <circle cx="164" cy="164" id="Ellipse 9" r="163.25" stroke="var(--stroke-0, #707070)" strokeWidth="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Component11() {
  return (
    <div className="absolute h-[370px] left-[1321px] top-[133px] w-[319px]" data-name="Заполнение">
      <div className="absolute inset-[0_-12.23%_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 358 370">
          <g id="ÐÐ°Ð¿Ð¾Ð»Ð½ÐµÐ½Ð¸Ðµ">
            <circle cx="195.5" cy="187.5" id="Ellipse 8" opacity="0.6" r="143" stroke="var(--stroke-0, #DECEFF)" strokeWidth="39" />
            <g clipPath="url(#clip0_1_386)" id="Frame 3">
              <circle cx="195.5" cy="187.5" id="Ellipse 9" opacity="0.4" r="143" stroke="var(--stroke-0, #7838FF)" strokeWidth="39" />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_1_386">
              <rect fill="white" height="370" width="196" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Component12() {
  return (
    <div className="absolute contents left-[1449px] not-italic text-white top-[252px] whitespace-nowrap" data-name="Текст">
      <p className="absolute font-['Ubuntu:Medium',sans-serif] leading-[normal] left-[1449px] text-[64px] top-[252px]">50%</p>
      <div className="-translate-x-1/2 absolute font-['Ubuntu:Regular',sans-serif] leading-[0] left-[1517.5px] text-[24px] text-center top-[328px]">
        <p className="leading-[normal] mb-0">прогресс</p>
        <p className="leading-[normal]">сюжета</p>
      </div>
    </div>
  );
}

function Component9() {
  return (
    <div className="absolute contents left-[1321px] top-[133px]" data-name="Прогресс">
      <Component10 />
      <Component11 />
      <Component12 />
    </div>
  );
}

function Component14() {
  return (
    <div className="absolute contents left-[170px] top-[635px]" data-name="Достижение">
      <div className="absolute border-[#707070] border-[1.75px] border-solid h-[119px] left-[170px] opacity-30 rounded-[14px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.65)] top-[635px] w-[434px]" />
      <div className="absolute left-[203px] size-[80px] top-[656px]" data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
      <p className="absolute font-['Onest:Medium',sans-serif] font-medium leading-[normal] left-[322px] text-[26px] text-white top-[656px] whitespace-nowrap">Рыбалка</p>
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-[322px] not-italic text-[16px] text-[rgba(255,255,255,0.7)] top-[689px] whitespace-nowrap">
        <p className="leading-[normal] mb-0">Собрать 3 стака рыбы фугу,</p>
        <p className="leading-[normal]">менее чем за 3 часа</p>
      </div>
    </div>
  );
}

function Component15() {
  return (
    <div className="absolute contents left-[170px] top-[813px]" data-name="Достижение">
      <div className="absolute border-[#707070] border-[1.75px] border-solid h-[119px] left-[170px] opacity-30 rounded-[14px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.65)] top-[813px] w-[434px]" />
      <div className="absolute left-[203px] size-[80px] top-[834px]" data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
      <p className="absolute font-['Onest:Medium',sans-serif] font-medium leading-[normal] left-[322px] text-[26px] text-white top-[834px] whitespace-nowrap">Рыбалка</p>
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-[322px] not-italic text-[16px] text-[rgba(255,255,255,0.7)] top-[867px] whitespace-nowrap">
        <p className="leading-[normal] mb-0">Собрать 3 стака рыбы фугу,</p>
        <p className="leading-[normal]">менее чем за 3 часа</p>
      </div>
    </div>
  );
}

function Component16() {
  return (
    <div className="absolute contents left-[684px] top-[813px]" data-name="Достижение">
      <div className="absolute border-[#707070] border-[1.75px] border-solid h-[119px] left-[684px] opacity-30 rounded-[14px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.65)] top-[813px] w-[434px]" />
      <div className="absolute left-[717px] size-[80px] top-[834px]" data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
      <p className="absolute font-['Onest:Medium',sans-serif] font-medium leading-[normal] left-[836px] text-[26px] text-white top-[834px] whitespace-nowrap">Рыбалка</p>
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-[836px] not-italic text-[16px] text-[rgba(255,255,255,0.7)] top-[867px] whitespace-nowrap">
        <p className="leading-[normal] mb-0">Собрать 3 стака рыбы фугу,</p>
        <p className="leading-[normal]">менее чем за 3 часа</p>
      </div>
    </div>
  );
}

function Component17() {
  return (
    <div className="absolute contents left-[1198px] top-[815px]" data-name="Достижение">
      <div className="absolute border-[#707070] border-[1.75px] border-solid h-[119px] left-[1198px] opacity-30 rounded-[14px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.65)] top-[815px] w-[434px]" />
      <div className="absolute left-[1231px] size-[80px] top-[836px]" data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
      <p className="absolute font-['Onest:Medium',sans-serif] font-medium leading-[normal] left-[1350px] text-[26px] text-white top-[836px] whitespace-nowrap">Рыбалка</p>
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-[1350px] not-italic text-[16px] text-[rgba(255,255,255,0.7)] top-[869px] whitespace-nowrap">
        <p className="leading-[normal] mb-0">Собрать 3 стака рыбы фугу,</p>
        <p className="leading-[normal]">менее чем за 3 часа</p>
      </div>
    </div>
  );
}

function Component18() {
  return (
    <div className="absolute contents left-[684px] top-[636px]" data-name="Достижение">
      <div className="absolute border-[#707070] border-[1.75px] border-solid h-[119px] left-[684px] opacity-30 rounded-[14px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.65)] top-[636px] w-[434px]" />
      <div className="absolute left-[717px] size-[80px] top-[657px]" data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
      <p className="absolute font-['Onest:Medium',sans-serif] font-medium leading-[normal] left-[836px] text-[26px] text-white top-[657px] whitespace-nowrap">Рыбалка</p>
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-[836px] not-italic text-[16px] text-[rgba(255,255,255,0.7)] top-[690px] whitespace-nowrap">
        <p className="leading-[normal] mb-0">Собрать 3 стака рыбы фугу,</p>
        <p className="leading-[normal]">менее чем за 3 часа</p>
      </div>
    </div>
  );
}

function Component19() {
  return (
    <div className="absolute contents left-[1198px] top-[636px]" data-name="Достижение">
      <div className="absolute border-[#707070] border-[1.75px] border-solid h-[119px] left-[1198px] opacity-30 rounded-[14px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.65)] top-[636px] w-[434px]" />
      <div className="absolute left-[1231px] size-[80px] top-[657px]" data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
      <p className="absolute font-['Onest:Medium',sans-serif] font-medium leading-[normal] left-[1350px] text-[26px] text-white top-[657px] whitespace-nowrap">Рыбалка</p>
      <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-[1350px] not-italic text-[16px] text-[rgba(255,255,255,0.7)] top-[690px] whitespace-nowrap">
        <p className="leading-[normal] mb-0">Собрать 3 стака рыбы фугу,</p>
        <p className="leading-[normal]">менее чем за 3 часа</p>
      </div>
    </div>
  );
}

function Component13() {
  return (
    <div className="absolute contents left-[170px] top-[635px]" data-name="Достижения">
      <Component14 />
      <Component15 />
      <Component16 />
      <Component17 />
      <Component18 />
      <Component19 />
    </div>
  );
}

function Component20() {
  return (
    <div className="absolute contents left-[1674px] top-[605px]" data-name="Прокрутка">
      <div className="absolute bg-white h-[367px] left-[1674px] opacity-20 rounded-[14px] top-[605px] w-[4px]" />
      <div className="absolute bg-white h-[67px] left-[1674px] opacity-40 rounded-[14px] top-[605px] w-[4px]" />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#2c2c2c] relative size-full" data-name="ЛК">
      <Component1 />
      <div className="absolute bg-gradient-to-l from-[#202020] h-[1080px] left-[1770px] to-[175.96%] to-[rgba(32,32,32,0)] top-0 w-[150px]" />
      <Menu />
      <Component7 />
      <Component8 />
      <Component9 />
      <Component13 />
      <Component20 />
    </div>
  );
}