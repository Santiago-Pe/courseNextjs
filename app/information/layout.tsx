import "./information-layout.css";
function CardLayout({ children }: { children: React.ReactNode }) {
  return <section className="information-layout">{children}</section>;
}

export default CardLayout;
