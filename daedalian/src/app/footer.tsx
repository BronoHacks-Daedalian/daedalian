import Image from 'next/image';

const Footer = () => (
  <footer>
    <table>
      <tbody><tr>
        <th><Image
          src="/accountabuddylogo.png"
          alt="Accountabuddy Logo"
          width={30}
          height={6}
          priority
        /></th>
        <th><p className="italic text-sm" > Accountabuddy by Daedalion 2025</p></th>
      </tr></tbody>
    </table>
  </footer>
);

export default Footer;