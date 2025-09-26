import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import { ProfileStats } from "./profile-stats";

interface Props {
  name: string;
  username: string;
  bio: string;
  avatar: string;
  stats: { posts: number; followers: number; following: number };
}

export const  ProfileHeader = ({ name, username, bio, avatar, stats }: Props) => {
  return (
    <div className="px-4 sm:px-6 md:px-8">
      <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="rounded-full ring-4 ring-background overflow-hidden">
            <Avatar className="w-20 h-20 sm:w-24 sm:h-24">
              <AvatarImage src={avatar} alt={name} />
              <AvatarFallback>{name.split(" ")[0][0]}</AvatarFallback>
            </Avatar>
          </div>

          <div>
            <h1 className="text-lg sm:text-xl font-bold">{name}</h1>
            <p className="text-sm text-muted-foreground">@{username}</p>
            <p className="mt-2 text-sm max-w-xl text-muted-foreground">{bio}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <ProfileStats stats={stats} />
          <Button variant="default" className="flex items-center gap-2">
            <Pencil size={16} /> Editar perfil
          </Button>
        </div>
      </div>
    </div>
  );
}
