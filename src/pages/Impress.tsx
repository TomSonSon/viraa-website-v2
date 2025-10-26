import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Impress = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <article className="max-w-4xl mx-auto bg-card rounded-2xl shadow-soft p-8 lg:p-12">
          <h1 className="text-4xl font-bold mb-8">Impress</h1>
          
          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Impressum</h2>
              
              <div className="mb-6">
                <p className="mb-2">
                  <strong>Samson GmbH</strong><br />
                  Lahnstraße 68<br />
                  65195 Wiesbaden
                </p>
              </div>

              <div className="mb-6">
                <p className="mb-2">
                  E-Mail: info@samsongmbh.de<br />
                  URL: www.samsongmbh.de
                </p>
              </div>

              <div className="mb-6">
                <p className="mb-2">
                  <strong>Vertretungsberechtigt:</strong><br />
                  Mathias Samson, Geschäftsführer
                </p>
              </div>

              <div className="mb-6">
                <p className="mb-2">
                  <strong>Handelsregister & Registergericht:</strong><br />
                  Amtsgericht Wiesbaden<br />
                  HRB 34739
                </p>
              </div>

              <div className="mb-6">
                <p className="mb-2">
                  <strong>Inhaltlich Verantwortlicher gemäß § 6 MDStV:</strong><br />
                  Mathias Samson
                </p>
              </div>

              <h3 className="text-xl font-semibold mt-6 mb-3">Haftung für Inhalte</h3>
              <p className="mb-4">
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
              </p>
              <p className="mb-6">
                Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Diensteanbieter sind jedoch nicht verpflichtet, die von ihnen übermittelten oder gespeicherten fremden Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Haftung für Links</h3>
              <p className="mb-6">
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Urheberrecht</h3>
              <p className="mb-6">
                Die Betreiber der Seiten sind bemüht, stets die Urheberrechte anderer zu beachten bzw. auf selbsterstellte sowie lizenzfreie Werke zurückzugreifen. Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nicht gestattet.
              </p>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Impress;
