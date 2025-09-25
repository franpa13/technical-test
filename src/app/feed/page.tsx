"use client";

import { feedFake } from "@/data/fake-feed";
import { FeedGrid } from "@/components/feed-grid";
import { Title } from '../../components/title';
import { Rocket } from 'lucide-react';

function Feed() {
  return (
    <section className=" mx-auto flex  justify-center flex-col px-2 lg:px-20 space-y-6 ">
      <div className="flex justify-center items-center gap-3 mt-7 w-full">
        <Title title="Ultimas Publicaciones"></Title>
        <Rocket />
      </div>
      <FeedGrid posts={feedFake} />
    </section>
  );
}
export default Feed