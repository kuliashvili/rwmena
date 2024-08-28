import "./footer.css";


function Footer() {
  return (
    <div className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <p className="footer-header">ინფორმაცია</p>
          <p className="footer-text">
            რწმენის როლი და მისი გავლენა ჩვენს ცხოვრებაში,რწმენის როლი და მისი
            გავლენა ჩვენს ცხოვრებაში
          </p>
        </div>
        <div className="footer-right">
          <div className="footer-details">
            <div className="details-left">ფოსტა:</div>
            <div className="details-right">info@rwmena.com</div>
          </div>
          <div className="footer-details">
            <div className="details-left">მობილური:</div>
            <div className="details-right">+995 591 12 45 65 </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
