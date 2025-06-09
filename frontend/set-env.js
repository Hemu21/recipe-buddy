const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();

const targetPath = './src/environments/environment.ts';
const template = `
export const environment = {
  production: true,
  API_URL: '${process.env.API_URL}'
};
`;
fs.writeFileSync(targetPath, template);
console.log('✅ environment.prod.ts generated',process.env.API_URL);
