//  react icons
import { FaEnvelope } from '@react-icons/all-files/fa/FaEnvelope';
const { email } = require('../../constants/site-settings.ts');

const link = {
  alt: `email me using ${email}`,
  href: `mailto:${email}`,
  icon: FaEnvelope,
  label: `Rob Welan <${email}>`,
  site: 'email',
  type: 'contact',
};

export default link;
