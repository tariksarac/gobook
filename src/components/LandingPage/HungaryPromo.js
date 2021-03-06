import React from 'react';
import Heading from '../Heading/Heading';
import './HungaryPromo.css';
import Itinerary from '../Itinerary/Itinerary';
import BookButton from '../Common/BookButton/BookButton';
import HeadingContainer from '../Common/HeadingSection/HeadingContainer';
import HeroImage from '../HeroImage/HeroImage';

const itinerary = [
  {
    description:
      'Üdvözöljük Önt a szarajevói repülőtéren és megszervezzük a transzfert a szállodába. Ön elhelyezkedik a szállodában. Szabad tevékenységek.',
    mainTitle: '##### 1. nap Szarajevó',
  },
  {
    description:
      'Baščaršija túra, hidak a Miljacka folyón, a Nemzeti Színház, Városháza, a Dacház, a Sebilj tér, a Rézműves utca – itt régiségeket, kézzel készített réztányérokat, edényeket, keleti díszítéses csészéket és dísztárgyakkal láthat és vásárolhat; Baščaršijska mecset a 16. századból, régi ortodox templom, zsidó templom és zsinagóga, és a Világháborús örökmécses. \n' +
      '\n' +
      'Sebilj - Baščaršija szíve - egy híres tér és az egyik legfontosabb városi szökőkút; mindig galambok veszik körül. Ez egy kiváló hely egy rövid szünetre és az első kávéra. A tér körül minden kávéház a török kávét szolgálja, török édességgel (rahat lokum).\n' +
      '\n' +
      'A Latin híd, más néven a Princip híd, ahol Gavrilo Princip 1914-ben hírhedten meggyilkolta Ferenc Ferdinánd főherceget és feleségét Zsófiát, ami kiváltotta az első világháború kezdetét.\n' +
      'Csevapcsicsa – elengedhetetlen Szarajevó látogatása során. A mondás azt állítja: "Ha nem ettetek csevapcsicsát Szarajevóban, akkor mintha egyáltalán nem is voltatok volna Szarajevóban".\n' +
      'Trebević libegő - gyönyörű kilátás nyílik Bosznia és Hercegovina fővárosára.',
    mainTitle: '##### 2. nap Szarajevó',
  },
  {
    description:
      'A romantikus öreg híd bemutatója - a szerelem és összekötődés jelképe, sok dalban elénekelve. Az öreg híd kecsesen átszeli a smaragd Neretva folyót. Ott megtalálja a hagyományos búvárokat, akik a hídról ugrálnak a folyóba. Túrázás Mostar óvárosában, ahol élvezni tudja a hagyományos emléktárgyakat a Rézműves utcában - Kujundžiluk. Mostar számos kávézóban büszkélkedhet, ahol séta után egy kis árnyékot találhat a forró hercegovinai naptól. Indulás  Blagaj felé - a Buna folyóig - Európa legnagyobb karsztvize, ahol megtalálhatja a híres Sufi Tekket (kolostort) is. Visszatérés Szarajevóba.',
    mainTitle: '##### 3. nap Buna és Mostar',
  },
  {
    description:
      'Reggeli a szállodában.\n' +
      'Szabad séta Szarajevóban.\n' +
      'Transzfer a szarajevói repülőtérig.\n' +
      'SZEMÉLYRE SZABOTT TÚRÁK\n' +
      'Alkosson saját túrát.\n' +
      'Mi elrendezzük a részleteket.',
    mainTitle: '##### 4. nap',
  },
];

const HungaryPromo = (props) => {
  return (
    <div className={'HungaryPromo'}>
      <HeadingContainer>
        <Heading
          mainTitle={'HOSSZÚ HÉTVÉGE BOSZNIÁBAN'}
          hasLine
          subTitle={
            'Látogassa meg a szív alakú országot, ahol a Kelet találkozik a Nyugattal,\n' +
            'a rendkívül gazdag gasztronómia, mágikus természeti szépségek és\n' +
            'meleg szívű emberek országát. Élvezze a bosnyák kávézás kultúráját.'
          }
        />
      </HeadingContainer>

      <HeadingContainer>
        <HeroImage
          picture={
            'https://images.ctfassets.net/0o22ljw5du6a/2B2befRnTSqKYYaQM0wyAM/35ce0134483f5b0135373107219c3405/BANER.jpg'
          }
        />
      </HeadingContainer>

      <HeadingContainer>
        <Heading
          hasLine
          style={{ width: '100%', alignItems: 'center' }}
          subTitle={
            '4 vagy több csillagos SZÁLLODA Szarajevó központjában reggelivel\n' +
            'WizzAir járat (Budapest-Szarajevó)'
          }
          headingPrice={'ár 290 EUR'}
          headingDiscount={'gyerekek legfeljebb 12 éves ingyenes'}
        />
      </HeadingContainer>

      <Itinerary data={itinerary} itinerary style={{ marginBottom: '50px' }} />

      <HeadingContainer>
        <Heading
          mainTitle={'A túra díja magában foglalja'}
          subTitle={
            '● Szállás Szarajevóban - 3 éjszaka, 4 vagy több csillagos Szálloda Szarajevó központjában\n' +
            '● Reggeli a szállodában\n' +
            '● Szállítás\n' +
            '● Hivatásos vezető (angol nyelv)'
          }
          hasLine
          style={{ maxWidth: '490px' }}
        />
        <Heading
          mainTitle={'NOT INCLUDED'}
          subTitle={
            '● Járat (a Wizz Air ajánlott, ára kb. 20 eur)\n' +
            '● Étkezés - kivéve a szálloda reggelijét\n' +
            '● Borravaló\n' +
            '● Biztosítási költségek\n' +
            '● Belépőjegyek'
          }
          hasLine
          style={{ maxWidth: '490px' }}
        />
      </HeadingContainer>
      <HeadingContainer>
        <BookButton
          onClickAction={() =>
            props.history.push('/book-now', { title: 'HOSSZÚ HÉTVÉGE BOSZNIÁBAN' })
          }
          buttonText={'Book'}
        />
      </HeadingContainer>
      <HeroImage
        picture={
          'https://images.ctfassets.net/0o22ljw5du6a/3xCDg4osKAK8AuYMcyC2U4/4346f8f676cdc60505b59083d648eb01/3.jpg'
        }
      />
    </div>
  );
};

HungaryPromo.propTypes = {};
HungaryPromo.defaultProps = {};

export default HungaryPromo;
