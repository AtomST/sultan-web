"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import "./ContactMapSection.css";

const ContactMapSection = () => {
    // const [Data, setData] = useState(null);
    // const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch("/data/promoData.json");
    //             const data = await response.json();
    //             setData(data);
    //             setIsLoading(false);
    //         } catch (error) {
    //             console.error("Ошибка загрузки данных промо:", error);
    //             setIsLoading(false);
    //         }
    //     };

    //     fetchData();
    // }, []);

    // if (isLoading) {
    //     return <p>Загрузка...</p>;
    // }
    return (
        <section className="contact-map-section">
            <Image
                className="map-image"
                src="/image/map-image.jpg"
                alt="Visa"
                layout="fill"
                objectFit="cover"
            />
            <div className="contact-info">
                <h2>Контакты</h2>
                <p>Оптовый поставщик «Султан»</p>

                <div className="contact-info-container">
                    <div className="contact-info-address">
                        <h3>Адрес:</h3>
                        <p className="address">
                            г. Кокшетау, ул. Ук Ташенова 1296 (Рынок Восточный)
                        </p>
                    </div>

                    <div className="sales-department">
                        <h3>Отдел продаж:</h3>
                        <p className="phone-number">+7 (777) 490-00-91</p>
                        {/* <a className="phone-number" href={`tel:${phone}`}>
                            {phone}
                        </a> */}
                        <p>opt.sultan@mail.ru</p>
                        {/* <p>
                            <a href={`mailto:${email}`}>{email}</a>
                        </p> */}
                    </div>

                    <div className="tax-info">
                        <h3>Данные налогоплательщика:</h3>
                        <div className="tax-info-content">
                            <p>ИП Катран Д.С.</p>
                            <p>ИИН: 860113450858</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactMapSection;
