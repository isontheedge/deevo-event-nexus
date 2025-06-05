
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Clock, MapPin } from "lucide-react";

interface TimelineItem {
  id: number;
  artist: string;
  artistImage: string;
  stage: string;
  startTime: string;
  endTime: string;
  status: "finished" | "current" | "upcoming";
}

interface EventTimelineProps {
  eventId: number;
  eventName: string;
  startDate: string;
  endDate: string;
}

export const EventTimeline = ({ eventId, eventName, startDate, endDate }: EventTimelineProps) => {
  // Mock data - em produção viria de uma API
  const timelineItems: TimelineItem[] = [
    {
      id: 1,
      artist: "DJ Opening",
      artistImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=60&h=60&fit=crop&crop=face",
      stage: "Palco Principal",
      startTime: "12:00",
      endTime: "13:00",
      status: "finished"
    },
    {
      id: 2,
      artist: "The Electric Band",
      artistImage: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=60&h=60&fit=crop&crop=face",
      stage: "Palco Principal",
      startTime: "13:00",
      endTime: "14:30",
      status: "current"
    },
    {
      id: 3,
      artist: "Maria Jazz",
      artistImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face",
      stage: "Palco Acústico",
      startTime: "14:00",
      endTime: "15:30",
      status: "upcoming"
    },
    {
      id: 4,
      artist: "DJ Thunder",
      artistImage: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=60&h=60&fit=crop&crop=face",
      stage: "Palco Principal",
      startTime: "15:00",
      endTime: "17:00",
      status: "upcoming"
    }
  ];

  // Calcular progresso do evento (mock - baseado no horário atual)
  const now = new Date();
  const eventStart = new Date(startDate);
  const eventEnd = new Date(endDate);
  const totalDuration = eventEnd.getTime() - eventStart.getTime();
  const elapsed = now.getTime() - eventStart.getTime();
  const progress = Math.min(Math.max((elapsed / totalDuration) * 100, 0), 100);

  const getItemStyle = (status: string) => {
    switch (status) {
      case "finished":
        return "opacity-50 grayscale";
      case "current":
        return "border-2 border-green-500 shadow-lg";
      case "upcoming":
        return "border border-gray-200";
      default:
        return "";
    }
  };

  const getStatusIndicator = (status: string) => {
    switch (status) {
      case "finished":
        return <div className="w-3 h-3 bg-gray-400 rounded-full"></div>;
      case "current":
        return <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>;
      case "upcoming":
        return <div className="w-3 h-3 bg-blue-400 rounded-full"></div>;
      default:
        return null;
    }
  };

  return (
    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-medium text-gray-900">Progresso do Evento</h4>
          <span className="text-sm text-gray-600">{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="h-2" />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>{new Date(startDate).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</span>
          <span>{new Date(endDate).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
      </div>

      <div className="space-y-3">
        <h4 className="font-medium text-gray-900 mb-3">Timeline de Apresentações</h4>
        {timelineItems.map((item, index) => (
          <div 
            key={item.id} 
            className={`flex items-center gap-3 p-3 rounded-lg bg-white transition-all duration-300 ${getItemStyle(item.status)}`}
          >
            <div className="flex items-center">
              {getStatusIndicator(item.status)}
            </div>
            
            <Avatar className="w-12 h-12">
              <AvatarImage src={item.artistImage} alt={item.artist} />
              <AvatarFallback>{item.artist.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <p className="font-medium text-gray-900 truncate">{item.artist}</p>
                <Badge 
                  variant={item.status === "current" ? "default" : "secondary"}
                  className={item.status === "current" ? "bg-green-100 text-green-800" : ""}
                >
                  {item.status === "finished" ? "Finalizado" : 
                   item.status === "current" ? "Ao Vivo" : "Próximo"}
                </Badge>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{item.startTime} - {item.endTime}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{item.stage}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
