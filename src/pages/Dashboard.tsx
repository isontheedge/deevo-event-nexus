
import { AdminLayout } from "@/components/AdminLayout";
import { StatsCard } from "@/components/StatsCard";
import { Calendar, Users, Music, Building, Ticket, TrendingUp, MapPin, Clock } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const Dashboard = () => {
  // Dados para os gráficos
  const eventsByMonth = [
    { month: 'Jan', eventos: 12 },
    { month: 'Fev', eventos: 18 },
    { month: 'Mar', eventos: 25 },
    { month: 'Abr', eventos: 32 },
    { month: 'Mai', eventos: 28 },
    { month: 'Jun', eventos: 42 },
  ];

  const ticketSales = [
    { name: 'Rock', vendas: 2400, receita: 45000 },
    { name: 'Pop', vendas: 1398, receita: 32000 },
    { name: 'Jazz', vendas: 9800, receita: 58000 },
    { name: 'Eletrônica', vendas: 3908, receita: 42000 },
    { name: 'Sertanejo', vendas: 4800, receita: 67000 },
  ];

  const userTypes = [
    { name: 'Usuários', value: 2847, color: '#8884d8' },
    { name: 'Artistas', value: 342, color: '#82ca9d' },
    { name: 'Casas de Show', value: 89, color: '#ffc658' },
  ];

  // Eventos acontecendo agora (simulado)
  const liveEvents = [
    {
      id: 1,
      name: "Festival de Rock 2024",
      venue: "Arena Central",
      location: "São Paulo, SP",
      startTime: "20:00",
      currentArtist: "Banda XYZ",
      attendees: 3200,
      status: "Ao Vivo"
    },
    {
      id: 2,
      name: "Noite do Jazz",
      venue: "Blue Note SP",
      location: "São Paulo, SP", 
      startTime: "21:30",
      currentArtist: "Maria Silva Quartet",
      attendees: 180,
      status: "Ao Vivo"
    },
    {
      id: 3,
      name: "Show Acústico",
      venue: "Casa de Cultura",
      location: "Rio de Janeiro, RJ",
      startTime: "19:00",
      currentArtist: "João Violão",
      attendees: 85,
      status: "Ao Vivo"
    }
  ];

  return (
    <AdminLayout 
      title="Dashboard" 
      subtitle="Visão geral do sistema de eventos musicais"
    >
      <div className="p-6 space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatsCard
            title="Total de Eventos"
            value="156"
            icon={Calendar}
            change="+12% este mês"
            changeType="positive"
          />
          <StatsCard
            title="Usuários Ativos"
            value="2,847"
            icon={Users}
            change="+8% este mês"
            changeType="positive"
          />
          <StatsCard
            title="Artistas Cadastrados"
            value="342"
            icon={Music}
            change="+15% este mês"
            changeType="positive"
          />
          <StatsCard
            title="Casas de Show"
            value="89"
            icon={Building}
            change="+3% este mês"
            changeType="positive"
          />
          <StatsCard
            title="Ingressos Vendidos"
            value="12,456"
            icon={Ticket}
            change="+24% este mês"
            changeType="positive"
          />
          <StatsCard
            title="Receita Total"
            value="R$ 245.890"
            icon={TrendingUp}
            change="+18% este mês"
            changeType="positive"
          />
        </div>

        {/* Eventos Ao Vivo */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <h3 className="text-lg font-semibold text-gray-900">Eventos Acontecendo Agora</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {liveEvents.map((event) => (
              <div key={event.id} className="border border-gray-200 rounded-lg p-4 bg-gradient-to-r from-red-50 to-pink-50">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-gray-900 text-sm">{event.name}</h4>
                  <span className="flex items-center gap-1 text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    {event.status}
                  </span>
                </div>
                <div className="space-y-1 text-xs text-gray-600">
                  <div className="flex items-center gap-1">
                    <Building className="w-3 h-3" />
                    <span>{event.venue}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>Iniciado às {event.startTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Music className="w-3 h-3" />
                    <span className="font-medium">Tocando: {event.currentArtist}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    <span>{event.attendees} presentes</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gráficos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Gráfico de Eventos por Mês */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Eventos por Mês</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={eventsByMonth}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="eventos" stroke="#8884d8" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Gráfico de Vendas por Gênero */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Vendas por Gênero Musical</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={ticketSales}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="vendas" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Gráfico de Pizza - Tipos de Usuário */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Distribuição de Usuários</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={userTypes}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {userTypes.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Atividade Recente */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Atividade Recente</h3>
            <div className="space-y-3">
              {[
                { action: "Novo usuário cadastrado", user: "João Silva", time: "2 min atrás" },
                { action: "Evento criado", user: "Casa do Rock", time: "15 min atrás" },
                { action: "Artista verificado", user: "Maria Santos", time: "1h atrás" },
                { action: "Ingresso vendido", user: "Festival de Verão", time: "2h atrás" },
                { action: "Avaliação publicada", user: "Pedro Costa", time: "3h atrás" },
              ].map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{activity.action}</p>
                    <p className="text-xs text-gray-600">{activity.user}</p>
                  </div>
                  <span className="text-xs text-gray-500">{activity.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
