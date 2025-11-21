export const a = () => {
  console.log('adjddj');
};

export const b = () => {
  console.log('aaaaaaaa file');
};
import { a } from './a';

export default function main() {
  a();
  console.log('main');
}

main();
