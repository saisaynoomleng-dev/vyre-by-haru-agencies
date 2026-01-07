import Bounded from '@/components/Bounded';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <Bounded className='bg-[url("/blue-worm.svg")] bg-bottom-right bg-size-[50%] bg-no-repeat flex flex-col justify-center items-center text-center'>
      <p className="text-fs-700 font-semibold">Opps, I think we are lost!</p>
      <p>Let&apos;s get you back somewhere familiar</p>
      <Link href="/">
        <Button>Home</Button>
      </Link>
    </Bounded>
  );
};

export default NotFoundPage;
