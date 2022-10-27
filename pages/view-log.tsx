import { NextPage } from 'next';
import { redis } from '@/lib/redis';
const ViewLog: NextPage = ({ entries }) => {
  return (
    <div>
      <h1>Request Log</h1>
    </div>
  );
};

export async function getServerSideProps() {
  const entries = await redis.lrange('api-request-log', 0, -1);
  return {
    props: { entries },
  };
}

export default ViewLog;
