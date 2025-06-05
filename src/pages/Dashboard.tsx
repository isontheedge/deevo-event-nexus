
import { AdminLayout } from "@/components/AdminLayout";
import { StatsCard } from "@/components/StatsCard";
import { Calendar, Users, Music, Building, Ticket, TrendingUp } from "lucide-react";

const Dashboard = () => {
  return (
    <AdminLayout 
      title="Dashboard" 
      subtitle="Visão geral do sistema de eventos musicais"
    >
      <div className="p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
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

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Eventos Recentes</h3>
            <div className="space-y-3">
              {[
                { name: "Festival de Rock 2024", date: "15 Jun 2024", status: "Ativo" },
                { name: "Noite do Jazz", date: "20 Jun 2024", status: "Em Andamento" },
                { name: "Show Acústico", date: "25 Jun 2024", status: "Planejado" },
              ].map((event, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{event.name}</p>
                    <p className="text-sm text-gray-600">{event.date}</p>
                  </div>
                  <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                    {event.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Atividade do Sistema</h3>
            <div className="space-y-3">
              {[
                { action: "Novo usuário cadastrado", user: "João Silva", time: "2 min atrás" },
                { action: "Evento criado", user: "Casa do Rock", time: "15 min atrás" },
                { action: "Artista verificado", user: "Maria Santos", time: "1h atrás" },
              ].map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{activity.action}</p>
                    <p className="text-sm text-gray-600">{activity.user}</p>
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
