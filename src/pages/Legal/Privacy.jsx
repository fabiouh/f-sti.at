import React from 'react';
import {
  Heading,
  Box,
  Divider,
  useColorMode,
  Text
} from '@chakra-ui/react';

const Privacy = () => {
  /* eslint-disable-next-line */
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      mx={{ base: '50px', md: '100px', lg: '200px' }}
      my={10}
      fontFamily="Urbanist"
    >
      <Box>
        <Heading size="lg" fontFamily="Urbanist">
          Datenschutzerklärung
        </Heading>
        <Divider w={'full'} my={2} />
      </Box>
      <Box my={1}>
        <Heading size="md" fontFamily="Urbanist">
          Allgemeine Hinweise
        </Heading>
        <Divider w={'full'} my={2} />
      </Box>
      <Box>
        <Text>
          Die folgenden Hinweise geben einen einfachen
          Überblick darüber, was mit Ihren personenbezogenen
          Daten passiert, wenn Sie diese Website besuchen.
          Personenbezogene Daten sind alle Daten, mit denen
          Sie persönlich identifiziert werden können.
          Ausführliche Informationen zum Thema Datenschutz
          entnehmen Sie unserer unter diesem Text
          aufgeführten Datenschutzerklärung.
        </Text>
      </Box>
      <Box my={15}>
        <Heading size="md" fontFamily="Urbanist">
          Wer ist verantwortlich für die Datenerfassung auf
          dieser Webseite?
        </Heading>
        <Divider w={'full'} my={2} />
      </Box>
      <Box>
        <Text>
          Die Datenverarbeitung auf dieser Website erfolgt
          durch den Websitebetreiber. Dessen Kontaktdaten
          können Sie dem Abschnitt „Hinweis zur
          Verantwortlichen Stelle“ in dieser
          Datenschutzerklärung entnehmen.
        </Text>
      </Box>
      <Box my={15}>
        <Heading size="md" fontFamily="Urbanist">
          Wie erfassen wir Ihre Daten?
        </Heading>
        <Divider w={'full'} my={2} />
      </Box>
      <Box>
        <Text>
          Ihre Daten werden zum einen dadurch erhoben, dass
          Sie uns diese mitteilen. Hierbei kann es sich z.
          B. um Daten handeln, die Sie in ein
          Kontaktformular eingeben. Andere Daten werden
          automatisch oder nach Ihrer Einwilligung beim
          Besuch der Website durch unsere IT- Systeme
          erfasst. Das sind vor allem technische Daten (z.
          B. Internetbrowser, Betriebssystem oder Uhrzeit
          des Seitenaufrufs). Die Erfassung dieser Daten
          erfolgt automatisch, sobald Sie diese Website
          betreten.
        </Text>
      </Box>
      <Box my={15}>
        <Heading size="md" fontFamily="Urbanist">
          Wofür nutzen wir Ihre Daten?
        </Heading>
        <Divider w={'full'} my={2} />
      </Box>
      <Box>
        <Text>
          Ein Teil der Daten wird erhoben, um eine
          fehlerfreie Bereitstellung der Website zu
          gewährleisten. Andere Daten können zur Analyse
          Ihres Nutzerverhaltens verwendet werden.
        </Text>
      </Box>
      <Box my={15}>
        <Heading size="md" fontFamily="Urbanist">
          Welche Rechte haben Sie bezüglich Ihrer Daten?
        </Heading>
        <Divider w={'full'} my={2} />
      </Box>
      <Box>
        <Text>
          Sie haben jederzeit das Recht, unentgeltlich
          Auskunft über Herkunft, Empfänger und Zweck Ihrer
          gespeicherten personenbezogenen Daten zu erhalten.
          Sie haben außerdem ein Recht, die Berichtigung
          oder Löschung dieser Daten zu verlangen. Wenn Sie
          eine Einwilligung zur Datenverarbeitung erteilt
          haben, können Sie diese Einwilligung jederzeit für
          die Zukunft widerrufen. Außerdem haben Sie das
          Recht, unter bestimmten Umständen die
          Einschränkung der Verarbeitung Ihrer
          personenbezogenen Daten zu verlangen. Des Weiteren
          steht Ihnen ein Beschwerderecht bei der
          zuständigen Aufsichtsbehörde zu. Hierzu sowie zu
          weiteren Fragen zum Thema Datenschutz können Sie
          sich jederzeit an uns wenden.
        </Text>
      </Box>
      <Box my={15}>
        <Heading size="md" fontFamily="Urbanist">
          Analyse-Tools und Tools von Drittanbietern
        </Heading>
        <Divider w={'full'} my={2} />
      </Box>
      <Box>
        <Text>
          Beim Besuch dieser Website kann Ihr Surf-Verhalten
          statistisch ausgewertet werden. Das geschieht vor
          allem mit sogenannten Analyseprogrammen.
          Detaillierte Informationen zu diesen
          Analyseprogrammen finden Sie in der folgenden
          Datenschutzerklärung.
        </Text>
      </Box>
      <Box my={15}>
        <Heading size="md" fontFamily="Urbanist">
          Allgemeine Hinweise und Pflichtinformationen
        </Heading>
        <Divider w={'full'} my={2} />
      </Box>
      <Box>
        <Heading size="md" fontFamily="Urbanist">
          Datenschutz
        </Heading>
        <Divider w={'full'} my={2} />
      </Box>
      <Box>
        <Text>
          Die Betreiber dieser Seiten nehmen den Schutz
          Ihrer persönlichen Daten sehr ernst. Wir behandeln
          Ihre personenbezogenen Daten vertraulich und
          entsprechend den gesetzlichen
          Datenschutzvorschriften sowie dieser
          Datenschutzerklärung. Wenn Sie diese Website
          benutzen, werden verschiedene personenbezogene
          Daten erhoben. Personenbezogene Daten sind Daten,
          mit denen Sie persönlich identifiziert werden
          können. Die vorliegende Datenschutzerklärung
          erläutert, welche Daten wir erheben und wofür wir
          sie nutzen. Sie erläutert auch, wie und zu welchem
          Zweck das geschieht. Wir weisen darauf hin, dass
          die Datenübertragung im Internet (z. B. bei der
          Kommunikation per E-Mail) Sicherheitslücken
          aufweisen kann. Ein lückenloser Schutz der Daten
          vor dem Zugriff durch Dritte ist nicht möglich.
        </Text>
      </Box>
      <Box my={15}>
        <Heading size="md" fontFamily="Urbanist">
          Hinweis zur verantwortlichen Stelle
        </Heading>
        <Divider w={'full'} my={2} />
      </Box>
      <Box>
        <Text>
          Die verantwortliche Stelle für die
          Datenverarbeitung auf dieser Website ist: Fabian
          Stifter, Feldgasse 19, 7331 Weppersdorf Telefon:
          +436781285128 E-Mail: fab@f-sti.at Verantwortliche
          Stelle ist die natürliche oder juristische Person,
          die allein oder gemeinsam mit anderen über die
          Zwecke und Mittel der Verarbeitung von
          personenbezogenen Daten (z. B. Namen,
          E-Mail-Adressen o. Ä.) entscheidet.
        </Text>
      </Box>
      <Box my={15}>
        <Heading size="md" fontFamily="Urbanist">
          Speicherdauer
        </Heading>
        <Divider w={'full'} my={2} />
      </Box>
      <Box>
        <Text>
          Soweit innerhalb dieser Datenschutzerklärung keine
          speziellere Speicherdauer genannt wurde,
          verbleiben Ihre personenbezogenen Daten bei uns,
          bis der Zweck für die Datenverarbeitung entfällt.
          Wenn Sie ein berechtigtes Löschersuchen geltend
          machen oder eine Einwilligung zur
          Datenverarbeitung widerrufen, werden Ihre Daten
          gelöscht, sofern wir keine anderen rechtlich
          zulässigen Gründe für die Speicherung Ihrer
          personenbezogenen Daten haben (z. B. steuer- oder
          handelsrechtliche Aufbewahrungsfristen); im
          letztgenannten Fall erfolgt die Löschung nach
          Fortfall dieser Gründe.
        </Text>
      </Box>
      <Box my={15}>
        <Heading size="md" fontFamily="Urbanist">
          Allgemeine Hinweise zu den Rechtsgrundlagen der
          Datenverarbeitung auf dieser Webseite
        </Heading>
        <Divider w={'full'} my={2} />
      </Box>
      <Box>
        <Text>
          Sofern Sie in die Datenverarbeitung eingewilligt
          haben, verarbeiten wir Ihre personenbezogenen
          Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO
          bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere
          Datenkategorien nach Art. 9 Abs. 1 DSGVO
          verarbeitet werden. Im Falle einer ausdrücklichen
          Einwilligung in die Übertragung personenbezogener
          Daten in Drittstaaten erfolgt die
          Datenverarbeitung außerdem auf Grundlage von Art.
          49 Abs. 1 lit. a DSGVO. Sofern Sie in die
          Speicherung von Cookies oder in den Zugriff auf
          Informationen in Ihr Endgerät (z. B. via
          Device-Fingerprinting) eingewilligt haben, erfolgt
          die Datenverarbeitung zusätzlich auf Grundlage von
          § 25 Abs. 1 TTDSG. Die Einwilligung ist jederzeit
          widerrufbar. Sind Ihre Daten zur Vertragserfüllung
          oder zur Durchführung vorvertraglicher Maßnahmen
          erforderlich, verarbeiten wir Ihre Daten auf
          Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des
          Weiteren verarbeiten wir Ihre Daten, sofern diese
          zur Erfüllung einer rechtlichen Verpflichtung
          erforderlich sind auf Grundlage von Art. 6 Abs. 1
          lit. c DSGVO. Die Datenverarbeitung kann ferner
          auf Grundlage unseres berechtigten Interesses nach
          Art. 6 Abs. 1 lit. f DSGVO erfolgen. Über die
          jeweils im Einzelfall einschlägigen
          Rechtsgrundlagen wird in den folgenden Absätzen
          dieser Datenschutzerklärung informiert.
        </Text>
      </Box>
      <Box my={15}>
        <Heading size="md" fontFamily="Urbanist">
          Widerruf Ihrer Einwilligung zur Datenverarbeitung
        </Heading>
        <Divider w={'full'} my={2} />
      </Box>
      <Box>
        <Text>
          Viele Datenverarbeitungsvorgänge sind nur mit
          Ihrer ausdrücklichen Einwilligung möglich. Sie
          können eine bereits erteilte Einwilligung
          jederzeit widerrufen. Die Rechtmäßigkeit der bis
          zum Widerruf erfolgten Datenverarbeitung bleibt
          vom Widerruf unberührt.
        </Text>
      </Box>
      <Box my={15}>
        <Heading size="md" fontFamily="Urbanist">
          Widerspruchsrecht gegen die Datenerhebung in
          besonderen Fällen sowie gegen Direktwerbung (Art.
          21 DSGVO)
        </Heading>
        <Divider w={'full'} my={2} />
      </Box>
      <Box>
        <Text>
          WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART.
          6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE
          JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS
          IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE
          VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN
          WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF
          DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE
          JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE
          VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER
          DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH
          EINLEGEN, WERDEN WIR IHRE BETROFFENEN
          PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES
          SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE
          GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE IHRE
          INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER
          DIE VERARBEITUNG DIENT DER GELTENDMACHUNG,
          AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN
          (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO). WERDEN
          IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM
          DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS
          RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE
          VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER
          DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN;
          DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT
          SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN
          SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN
          DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER
          DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21
          ABS. 2 DSGVO).
        </Text>
      </Box>
      <Box my={15}>
        <Heading size="md" fontFamily="Urbanist">
          Beschwerderecht bei der zuständigen
          Aufsichtsbehörde
        </Heading>
        <Divider w={'full'} my={2} />
      </Box>
      <Box>
        <Text>
          Im Falle von Verstößen gegen die DSGVO steht den
          Betroffenen ein Beschwerderecht bei einer
          Aufsichtsbehörde, insbesondere in dem
          Mitgliedstaat ihres gewöhnlichen Aufenthalts,
          ihres Arbeitsplatzes oder des Orts des
          mutmaßlichen Verstoßes zu. Das Beschwerderecht
          besteht unbeschadet anderweitiger
          verwaltungsrechtlicher oder gerichtlicher
          Rechtsbehelfe.
        </Text>
      </Box>
      <Box my={15}>
        <Heading size="md" fontFamily="Urbanist">
          Recht auf Datenübertragbarkeit
        </Heading>
        <Divider w={'full'} my={2} />
      </Box>
      <Box>
        <Text>
          Sie haben das Recht, Daten, die wir auf Grundlage
          Ihrer Einwilligung oder in Erfüllung eines
          Vertrags automatisiert verarbeiten, an sich oder
          an einen Dritten in einem gängigen,
          maschinenlesbaren Format aushändigen zu lassen.
          Sofern Sie die direkte Übertragung der Daten an
          einen anderen Verantwortlichen verlangen, erfolgt
          dies nur, soweit es technisch machbar ist.
        </Text>
      </Box>
      <Box my={15}>
        <Heading size="md" fontFamily="Urbanist">
          SSL- bzw. TLS-Verschlüsselung
        </Heading>
        <Divider w={'full'} my={2} />
      </Box>
      <Box>
        <Text>
          Diese Seite nutzt aus Sicherheitsgründen und zum
          Schutz der Übertragung vertraulicher Inhalte, wie
          zum Beispiel Bestellungen oder Anfragen, die Sie
          an uns als Seitenbetreiber senden, eine SSL- bzw.
          TLS- Verschlüsselung. Eine verschlüsselte
          Verbindung erkennen Sie daran, dass die
          Adresszeile des Browsers von „http://“ auf
          „https://“ wechselt und an dem Schloss-Symbol in
          Ihrer Browserzeile. Wenn die SSL- bzw.
          TLS-Verschlüsselung aktiviert ist, können die
          Daten, die Sie an uns übermitteln, nicht von
          Dritten mitgelesen werden.
        </Text>
      </Box>
      <Box my={15}>
        <Heading size="md" fontFamily="Urbanist">
          Auskunft, Löschung und Berichtigung
        </Heading>
        <Divider w={'full'} my={2} />
      </Box>
      <Box>
        <Text>
          Sie haben im Rahmen der geltenden gesetzlichen
          Bestimmungen jederzeit das Recht auf
          unentgeltliche Auskunft über Ihre gespeicherten
          personenbezogenen Daten, deren Herkunft und
          Empfänger und den Zweck der Datenverarbeitung und
          ggf. ein Recht auf Berichtigung oder Löschung
          dieser Daten. Hierzu sowie zu weiteren Fragen zum
          Thema personenbezogene Daten können Sie sich
          jederzeit an uns wenden.
        </Text>
      </Box>
      <Box my={15}>
        <Heading size="md" fontFamily="Urbanist">
          Recht auf Einschränkung der Verarbeitung
        </Heading>
        <Divider w={'full'} my={2} />
      </Box>
      <Box>
        <Text>
          Sie haben das Recht, die Einschränkung der
          Verarbeitung Ihrer personenbezogenen Daten zu
          verlangen. Hierzu können Sie sich jederzeit an uns
          wenden. Das Recht auf Einschränkung der
          Verarbeitung besteht in folgenden Fällen: Wenn Sie
          die Richtigkeit Ihrer bei uns gespeicherten
          personenbezogenen Daten bestreiten, benötigen wir
          in der Regel Zeit, um dies zu überprüfen. Für die
          Dauer der Prüfung haben Sie das Recht, die
          Einschränkung der Verarbeitung Ihrer
          personenbezogenen Daten zu verlangen. Wenn die
          Verarbeitung Ihrer personenbezogenen Daten
          unrechtmäßig geschah/geschieht, können Sie statt
          der Löschung die Einschränkung der
          Datenverarbeitung verlangen. Wenn wir Ihre
          personenbezogenen Daten nicht mehr benötigen, Sie
          sie jedoch zur Ausübung, Verteidigung oder
          Geltendmachung von Rechtsansprüchen benötigen,
          haben Sie das Recht, statt der Löschung die
          Einschränkung der Verarbeitung Ihrer
          personenbezogenen Daten zu verlangen. Wenn Sie
          einen Widerspruch nach Art. 21 Abs. 1 DSGVO
          eingelegt haben, muss eine Abwägung zwischen Ihren
          und unseren Interessen vorgenommen werden. Solange
          noch nicht feststeht, wessen Interessen
          überwiegen, haben Sie das Recht, die Einschränkung
          der Verarbeitung Ihrer personenbezogenen Daten zu
          verlangen. Wenn Sie die Verarbeitung Ihrer
          personenbezogenen Daten eingeschränkt haben,
          dürfen diese Daten – von ihrer Speicherung
          abgesehen – nur mit Ihrer Einwilligung oder zur
          Geltendmachung, Ausübung oder Verteidigung von
          Rechtsansprüchen oder zum Schutz der Rechte einer
          anderen natürlichen oder juristischen Person oder
          aus Gründen eines wichtigen öffentlichen
          Interesses der Europäischen Union oder eines
          Mitgliedstaats verarbeitet werden.
        </Text>
      </Box>
      <Box my={15}>
        <Heading size="md" fontFamily="Urbanist">
          Datenerfassung auf dieser Webseite
        </Heading>
        <Divider w={'full'} my={2} />
      </Box>
      <Box>
        <Heading size="md" fontFamily="Urbanist">
          Cookies
        </Heading>
        <Divider w={'full'} my={2} />
      </Box>
      <Box>
        <Text>
          Unsere Internetseiten verwenden so genannte
          „Cookies“. Cookies sind kleine Textdateien und
          richten auf Ihrem Endgerät keinen Schaden an. Sie
          werden entweder vorübergehend für die Dauer einer
          Sitzung (Session-Cookies) oder dauerhaft
          (permanente Cookies) auf Ihrem Endgerät
          gespeichert. Session-Cookies werden nach Ende
          Ihres Besuchs automatisch gelöscht. Permanente
          Cookies bleiben auf Ihrem Endgerät gespeichert,
          bis Sie diese selbst löschen oder eine
          automatische Löschung durch Ihren Webbrowser
          erfolgt. Teilweise können auch Cookies von
          Drittunternehmen auf Ihrem Endgerät gespeichert
          werden, wenn Sie unsere Seite betreten
          (Third-Party-Cookies). Diese ermöglichen uns oder
          Ihnen die Nutzung bestimmter Dienstleistungen des
          Drittunternehmens (z. B. Cookies zur Abwicklung
          von Zahlungsdienstleistungen). Cookies haben
          verschiedene Funktionen. Zahlreiche Cookies sind
          technisch notwendig, da bestimmte
          Websitefunktionen ohne diese nicht funktionieren
          würden (z. B. die Warenkorbfunktion oder die
          Anzeige von Videos). Andere Cookies dienen dazu,
          das Nutzerverhalten auszuwerten oder Werbung
          anzuzeigen. Cookies, die zur Durchführung des
          elektronischen Kommunikationsvorgangs, zur
          Bereitstellung bestimmter, von Ihnen erwünschter
          Funktionen (z. B. für die Warenkorbfunktion) oder
          zur Optimierung der Website (z. B. Cookies zur
          Messung des Webpublikums) erforderlich sind
          (notwendige Cookies), werden auf Grundlage von
          Art. 6 Abs. 1 lit. f DSGVO gespeichert, sofern
          keine andere Rechtsgrundlage angegeben wird. Der
          Websitebetreiber hat ein berechtigtes Interesse an
          der Speicherung von notwendigen Cookies zur
          technisch fehlerfreien und optimierten
          Bereitstellung seiner Dienste. Sofern eine
          Einwilligung zur Speicherung von Cookies und
          vergleichbaren Wiedererkennungstechnologien
          abgefragt wurde, erfolgt die Verarbeitung
          ausschließlich auf Grundlage dieser Einwilligung
          (Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1
          TTDSG); die Einwilligung ist jederzeit
          widerrufbar. Sie können Ihren Browser so
          einstellen, dass Sie über das Setzen von Cookies
          informiert werden und Cookies nur im Einzelfall
          erlauben, die Annahme von Cookies für bestimmte
          Fälle oder generell ausschließen sowie das
          automatische Löschen der Cookies beim Schließen
          des Browsers aktivieren. Bei der Deaktivierung von
          Cookies kann die Funktionalität dieser Website
          eingeschränkt sein. Soweit Cookies von
          Drittunternehmen oder zu Analysezwecken eingesetzt
          werden, werden wir Sie hierüber im Rahmen dieser
          Datenschutzerklärung gesondert informieren und
          ggf. eine Einwilligung abfragen.
        </Text>
      </Box>
      <Box my={15}>
        <Heading size="md" fontFamily="Urbanist">
          Anfrage per E-Mail, Telefon oder Telefax
        </Heading>
        <Divider w={'full'} my={2} />
      </Box>
      <Box>
        <Text>
          Wenn Sie uns per E-Mail, Telefon oder Telefax
          kontaktieren, wird Ihre Anfrage inklusive aller
          daraus hervorgehenden personenbezogenen Daten
          (Name, Anfrage) zum Zwecke der Bearbeitung Ihres
          Anliegens bei uns gespeichert und verarbeitet.
          Diese Daten geben wir nicht ohne Ihre Einwilligung
          weiter. Die Verarbeitung dieser Daten erfolgt auf
          Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern
          Ihre Anfrage mit der Erfüllung eines Vertrags
          zusammenhängt oder zur Durchführung
          vorvertraglicher Maßnahmen erforderlich ist. In
          allen übrigen Fällen beruht die Verarbeitung auf
          unserem berechtigten Interesse an der effektiven
          Bearbeitung der an uns gerichteten Anfragen (Art.
          6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung
          (Art. 6 Abs. 1 lit. a DSGVO) sofern diese
          abgefragt wurde; die Einwilligung ist jederzeit
          widerrufbar. Die von Ihnen an uns per
          Kontaktanfragen übersandten Daten verbleiben bei
          uns, bis Sie uns zur Löschung auffordern, Ihre
          Einwilligung zur Speicherung widerrufen oder der
          Zweck für die Datenspeicherung entfällt (z. B.
          nach abgeschlossener Bearbeitung Ihres Anliegens).
          Zwingende gesetzliche Bestimmungen – insbesondere
          gesetzliche Aufbewahrungsfristen – bleiben
          unberührt.
        </Text>
      </Box>
      <Box>
        <Heading size="md" fontFamily="Urbanist">
          Plugins und Tools
        </Heading>
        <Divider w={'full'} my={2} />
      </Box>
      <Box my={15}>
        <Heading size="md" fontFamily="Urbanist">
          Wofür nutzen wir Ihre Daten?
        </Heading>
        <Divider w={'full'} my={2} />
      </Box>
      <Box>
        <Text>
          Diese Seite nutzt zur einheitlichen Darstellung
          von Schriftarten so genannte Web Fonts, die von
          Google bereitgestellt werden. Die Google Fonts
          sind lokal installiert. Eine Verbindung zu Servern
          von Google findet dabei nicht statt. Weitere
          Informationen zu Google Web Fonts finden Sie unter
          https://developers.google.com/fonts/faq und in der
          Datenschutzerklärung von Google:
          https://policies.google.com/privacy?hl=de.
        </Text>
      </Box>
      <Box my={15}>
        <Heading size="md" fontFamily="Urbanist">
          Font Awesome (lokales Hosting)
        </Heading>
        <Divider w={'full'} my={2} />
      </Box>
      <Box>
        <Text>
          Diese Seite nutzt zur einheitlichen Darstellung
          von Schriftarten Font Awesome. Font Awesome ist
          lokal installiert. Eine Verbindung zu Servern von
          Fonticons, Inc. findet dabei nicht statt. Weitere
          Informationen zu Font Awesome finden Sie in der
          Datenschutzerklärung für Font Awesome unter:
          https://fontawesome.com/privacy.
        </Text>
      </Box>
      <Divider />
      <Box>
        <Text size="xs">
          Quelle: https://www.e-recht24.de
        </Text>
      </Box>
    </Box>
  );
};

export default Privacy;
