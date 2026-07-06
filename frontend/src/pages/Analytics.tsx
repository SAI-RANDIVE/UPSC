import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Legend } from 'recharts';
import { BarChart3, TrendingUp, Clock, Target } from 'lucide-react';

const weeklyData = [
  { day: 'Mon', upsc: 4.5, academic: 1.5, content: 1.2 },
  { day: 'Tue', upsc: 4.0, academic: 1.0, content: 1.5 },
  { day: 'Wed', upsc: 3.5, academic: 2.0, content: 1.0 },
  { day: 'Thu', upsc: 5.0, academic: 0.75, content: 1.2 },
  { day: 'Fri', upsc: 4.0, academic: 1.5, content: 1.0 },
  { day: 'Sat', upsc: 3.0, academic: 0, content: 2.5 },
  { day: 'Sun', upsc: 5.0, academic: 2.0, content: 3.5 },
];

const categoryData = [
  { name: 'UPSC Study', value: 33, color: '#16A34A' },
  { name: 'Academics', value: 6, color: '#F97316' },
  { name: 'Content', value: 11, color: '#8B5CF6' },
  { name: 'College', value: 24.5, color: '#3B82F6' },
  { name: 'Other', value: 14, color: '#9CA3AF' },
];

const trendData = [
  { week: 'W1', hours: 28 }, { week: 'W2', hours: 32 }, { week: 'W3', hours: 30 },
  { week: 'W4', hours: 35 }, { week: 'W5', hours: 33 }, { week: 'W6', hours: 38 },
  { week: 'W7', hours: 36 }, { week: 'W8', hours: 40 },
];

export default function Analytics() {
  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 28, fontWeight: 800, color: '#111', letterSpacing: '-0.02em' }}>Analytics</h1>
        <p style={{ fontSize: 14, color: '#6B7280', marginTop: 4 }}>Track your study patterns and progress</p>
      </div>

      {/* Stat Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 24 }}>
        {[
          { icon: Clock, label: 'This Week', value: '42.5 hrs', change: '↑ 12% from last week', color: '#16A34A' },
          { icon: Target, label: 'Daily Average', value: '6.1 hrs', change: 'Target: 8 hrs', color: '#3B82F6' },
          { icon: TrendingUp, label: 'Best Week', value: '40 hrs', change: 'Week 8', color: '#8B5CF6' },
          { icon: BarChart3, label: 'Completion Rate', value: '78%', change: '↑ 5% improvement', color: '#F97316' },
        ].map(({ icon: Icon, label, value, change, color }) => (
          <div key={label} className="card" style={{ padding: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <div style={{ width: 40, height: 40, borderRadius: 12, background: `${color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon size={20} color={color} />
              </div>
              <span style={{ fontSize: 12, fontWeight: 600, color: '#6B7280', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{label}</span>
            </div>
            <div style={{ fontSize: 28, fontWeight: 800, color: '#111', letterSpacing: '-0.02em' }}>{value}</div>
            <div style={{ fontSize: 12, color: '#9CA3AF', marginTop: 4 }}>{change}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 24 }}>
        {/* Weekly Breakdown */}
        <div className="card" style={{ padding: 24 }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, color: '#111', marginBottom: 20 }}>Weekly Study Breakdown</h2>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
              <XAxis dataKey="day" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip contentStyle={{ borderRadius: 12, border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }} />
              <Legend />
              <Bar dataKey="upsc" name="UPSC" fill="#16A34A" radius={[4, 4, 0, 0]} />
              <Bar dataKey="academic" name="Academic" fill="#F97316" radius={[4, 4, 0, 0]} />
              <Bar dataKey="content" name="Content" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Category Split */}
        <div className="card" style={{ padding: 24 }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, color: '#111', marginBottom: 20 }}>Weekly Time Split</h2>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie data={categoryData} cx="50%" cy="50%" innerRadius={70} outerRadius={110} paddingAngle={3} dataKey="value">
                {categoryData.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ borderRadius: 12, border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Trend */}
      <div className="card" style={{ padding: 24 }}>
        <h2 style={{ fontSize: 16, fontWeight: 700, color: '#111', marginBottom: 20 }}>Study Hours Trend</h2>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={trendData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
            <XAxis dataKey="week" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip contentStyle={{ borderRadius: 12, border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }} />
            <Line type="monotone" dataKey="hours" stroke="#16A34A" strokeWidth={3} dot={{ fill: '#16A34A', strokeWidth: 2, r: 5 }} activeDot={{ r: 7 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
