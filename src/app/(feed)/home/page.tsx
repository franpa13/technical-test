"use client";

import { feedFake } from "@/mock/fake-feed";
import { FeedGrid } from "@/components/features/home/feed-grid";
import { Title } from '../../../components/common/title';
import { Rocket } from 'lucide-react';

export default function HomePage() {
  return (
    <section className=" mx-auto flex  justify-center flex-col  space-y-6 ">
      <div className="flex justify-center items-center  mt-6 lg:mt-0  w-full">
        <Title subtitle="Explora las ultimas publicaciones de tus amigos" icon={<Rocket />} title="Ultimas Publicaciones"></Title>

      </div>
      <FeedGrid posts={feedFake} />
    </section>
  );
}
