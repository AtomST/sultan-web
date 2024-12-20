import { useTranslations } from "next-intl";
import Image from "next/image";
import "./ContactMapSection.scss";

const ContactMapSection = () => {
    const t = useTranslations("Contacts");

    return (
        <section className="contact-map-section">
            <Image
                className="contact-map-section-image"
                src="/image/map-image.jpg"
                alt="Map"
                layout="fill"
                objectFit="cover"
            />
            <div className="contact-info">
                <h2>{t("title")}</h2>
                <p>{t("description")}</p>

                <div className="contact-info-container">
                    <div className="contact-info-address">
                        <h3>{t("titleAddress")}</h3>
                        <p className="address">
                        {t("address")}
                        </p>
                    </div>

                    <div className="contact-info-sales">
                        <h3>{t("titleSales")}</h3>
                        <a className="phone-number" href={`tel:+7 (777) 490-00-91`}>
                            +7 (777) 490-00-91
                        </a>
                        <p>
                            <a href={`mailto:opt.sultan@mail.ru`}>opt.sultan@mail.ru</a>
                        </p>
                    </div>

                    <div className="contact-info-tax">
                        <h3>{t("titleTax")}</h3>
                        <div className="contact-info-tax-content">
                            <p>{t("entrepreneur")}</p>
                            <p>{t("iin")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactMapSection;
