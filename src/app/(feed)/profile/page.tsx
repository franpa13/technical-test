import React from "react";
import { Separator } from "@/components/ui/separator";
import { FeedGrid } from "@/components/features/home/feed-grid";
import { feedFake } from "@/mock/fake-feed";
import { mockUser } from "@/mock/fake-profile";
import { ProfileCover } from "@/components/features/profile/profile-cover";
import { ProfileHeader } from "@/components/features/profile/profile-header";
import { ProfileInfoCard } from "@/components/features/profile/profile-info-card";
import { ProfileActivityCard } from "@/components/features/profile/profile-activity-card";



export default function ProfilePage() {
  return (
    <div className="container mx-auto  mt-3">
      <div className="rounded-lg overflow-hidden bg-background shadow-sm">
        <ProfileCover cover={mockUser.cover} />
        <ProfileHeader
          name={mockUser.name}
          username={mockUser.username}
          bio={mockUser.bio}
          avatar={mockUser.avatar}
          stats={mockUser.stats}
        />

        <Separator className="my-4" />

        <div className="w-full flex justify-center items-start gap-5">
          {/* Columna izquierda */}
          <div className="space-y-6 w-1/3">
            <ProfileInfoCard
              email={mockUser.email}
              phone={mockUser.phone}
              location="San Salvador de Jujuy, Argentina"
            />
            <ProfileActivityCard />
          </div>

          {/* Columna central - Publicaciones */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Publicaciones</h2>
            </div>
            <FeedGrid posts={feedFake} />
          </div>
        </div>
      </div>
    </div>
  );
}
