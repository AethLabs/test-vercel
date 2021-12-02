import Link from 'next/link';

// Vercel variable test
console.log('process', process);
console.log('process.env', process.env);
console.log('Public process.env.VERCEL_URL: ', process.env.VERCEL_URL);
console.log('Private process.env.TEST_VALUE: ', process.env.TEST_VALUE);
console.log(
  'Public process.env.NEXT_PUBLIC_TEST_VALUE: ',
  process.env.NEXT_PUBLIC_TEST_VALUE
);

const Test = props => {
  return (
    <>
      <h2>Variable test</h2>
      <ul>
        <li>Public process.env.VERCEL_URL: {process.env.VERCEL_URL}</li>
        <li>Private process.env.TEST_VALUE: {process.env.TEST_VALUE}</li>
        <li>
          Public process.env.NEXT_PUBLIC_TEST_VALUE:
          {process.env.NEXT_PUBLIC_TEST_VALUE}
        </li>
      </ul>
    </>
  );
};

export default Test;
