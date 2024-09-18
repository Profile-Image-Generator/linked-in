interface ButtonComponentProps {
  type: "text" | "outlined" | "contained";
  onClick?: () => void;
}

export const ButtonComponent = ({ type }: ButtonComponentProps) => {
  const commonFontStyle = "font-semibold";
  const baseStyle =
    "w-fit border-solid border-[1px] rounded-lg px-4 py-2 border-blue-600";

  if (type === "text") {
    return <div className={`text-blue-600 ${commonFontStyle}`}>BUTTON</div>;
  }

  if (type === "outlined") {
    return (
      <div className={`${baseStyle} text-blue-600 ${commonFontStyle}`}>
        BUTTON
      </div>
    );
  }

  if (type === "contained") {
    return (
      <div className={`bg-blue-600 ${baseStyle} text-white ${commonFontStyle}`}>
        BUTTON
      </div>
    );
  }

  return <div>오류 버튼</div>;
};
