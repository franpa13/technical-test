interface Props {
  stats: { posts: number; followers: number; following: number };
}

export const ProfileStats = ({ stats }: Props) => {
  return (
    <div className="hidden sm:flex gap-4 items-center border rounded-md px-3 py-2 bg-card">
      <div className="text-center">
        <div className="text-base font-semibold">{stats.posts}</div>
        <div className="text-xs text-muted-foreground">Publicaciones</div>
      </div>
      <div className="text-center">
        <div className="text-base font-semibold">{stats.followers}</div>
        <div className="text-xs text-muted-foreground">Seguidores</div>
      </div>
      <div className="text-center">
        <div className="text-base font-semibold">{stats.following}</div>
        <div className="text-xs text-muted-foreground">Siguiendo</div>
      </div>
    </div>
  );
}
