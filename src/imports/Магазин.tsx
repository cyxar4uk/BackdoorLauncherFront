import svgPaths from "./svg-d3zux0fpbs";
import img from "figma:asset/06f83f0e3bd5877115be4f4cf76a4f381c264891.png";
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
        <g clipPath="url(#clip0_1_429)" id="Ð¼Ð°Ð³Ð°Ð·Ð¸Ð½">
          <path d={svgPaths.p1832c270} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p1739f600} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p1978c690} fill="var(--fill-0, white)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_1_429">
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
        <g clipPath="url(#clip0_1_423)" id="Ð½Ð¾Ð²Ð¾ÑÑÐ¸">
          <path d={svgPaths.p2e08cf80} fill="var(--fill-0, #A2A2A2)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_423">
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
        <g clipPath="url(#clip0_1_420)" id="ÐºÐ»Ð°Ð½Ñ">
          <path d={svgPaths.p8011ef0} fill="var(--fill-0, #A2A2A2)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_420">
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

export default function Component() {
  return (
    <div className="bg-[#2c2c2c] relative size-full" data-name="Магазин">
      <Component1 />
      <div className="absolute bg-gradient-to-l from-[#202020] h-[1080px] left-[1770px] to-[175.96%] to-[rgba(32,32,32,0)] top-0 w-[150px]" />
      <div className="absolute h-[989px] left-[1770px] top-[33px] w-[150px]" data-name="menu">
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
    </div>
  );
}