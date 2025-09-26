import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export const ProfileActivityCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Actividad reciente</CardTitle>
        <CardDescription>Últimas interacciones</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>Comentó en “Cómo preparar un pour-over” • 2h</li>
          <li>Subió una foto nueva • 1d</li>
          <li>Respondió a un comentario • 3d</li>
        </ul>
      </CardContent>
    </Card>
  );
}
