import LogoImg from "../assets/img/logoOk.png";

export default function Logo() {
  return (
    <img src={LogoImg} alt="Logo" className="h-[50px] object-contain select-none" />
  );
}