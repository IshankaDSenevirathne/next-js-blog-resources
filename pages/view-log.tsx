import { GetServerSideProps, NextPage } from 'next';
import { redis } from '@/lib/redis';
import React from 'react';

type Entry = {
  time: string;
  url: string;
  ip: string;
  geo: object;
};

type PageProps = {
  entries: Entry[];
};

const ViewLog: NextPage<PageProps> = ({ entries }) => {
  return (
    <div>
      <h1>Request Log</h1>
      <ul>
        {entries.map((entry, idx) => (
          <li key={idx}>{JSON.stringify(entry)}</li>
        ))}
      </ul>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const entries: Entry[] = await redis.lrange('api-request-log', 0, -1);
  return {
    props: { entries },
  };
};

export default ViewLog;
