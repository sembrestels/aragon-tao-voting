import Image from 'next/image';
import GMLogo from '../../public/images/generalMagicLogo.svg';
import TECLogo from '../../public/images/TECLogo.svg';

const links = [
  {
    text: 'Privacy Policy',
    url: 'https://aragon.org/privacy-policy',
  },
  {
    text: 'Terms and Conditions',
    url: 'https://aragon.org/terms-and-conditions',
  },
];

export function Footer() {
  return (
    <div className="h-44 lg:px-60 flex flex-col items-center justify-between lg:flex-row">
      <div className="flex flex-col items-center lg:flex-row">
        <p>Magically crafted by:</p>
        <a
          className="ml-5 mr-7"
          href={'https://twitter.com/generalmagicio'}
          target="_blank"
          rel="noreferrer"
        >
          <Image src={GMLogo} alt="Genral Magic" />
        </a>
        <a href={'https://tecommons.org/'} target="_blank" rel="noreferrer">
          <Image src={TECLogo} alt="TEC" />
        </a>
      </div>
      <div className="text-blue flex">
        {links.map((link) => {
          return (
            <a
              key={link.url}
              className="mr-4 hover:underline"
              href={link.url}
              target="_blank"
              rel="noreferrer"
            >
              {link.text}
            </a>
          );
        })}
      </div>
    </div>
  );
}
