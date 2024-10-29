import ContactMapSection from "./components/ContactMapSection/ContactMapSection";
import Footer from "./components/Footer/Footer";

export default function Home() {
    return (
        <>
            <main className="page-main">
                <p>Просто тестовый контент</p>
                <div>
                    <p>Просто еще один тестовый контент</p>
                    <p>Просто еще один тестовый контент</p>
                </div>
                <p>Просто тестовый контент</p>
                <div>
                    <p>Просто еще один тестовый контент</p>
                    <p>Просто еще один тестовый контент</p>
                </div>
                <p>Просто тестовый контент</p>
                <div>
                    <p>Просто еще один тестовый контент</p>
                    <p>Просто еще один тестовый контент</p>
                    <ContactMapSection></ContactMapSection>
                </div>
            </main>
            <Footer></Footer>
        </>
    );
}

