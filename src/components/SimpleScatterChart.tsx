import type { tasksTye } from '../hooks/usegettasks';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';

type Props = {
    data: tasksTye[];
    title: string;
};

const SimpleScatterChart = ({ data, title }: Props) => {
    const formattedData = data.map(task => ({
        id: task.id,
        name: task.text,
        value: task.completed ? 1 : 0
    }));

    return (
        <div
            style={{
                width: '100%',
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #020617, #0f172a, #1e293b)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '40px'
            }}
        >
            <h1
                style={{
                    color: '#e2e8f0',
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    marginBottom: '30px',
                    letterSpacing: '1px',
                    textShadow: '0 4px 20px rgba(0,0,0,0.5)'
                }}
            >
                {title}
            </h1>

            <div
                style={{
                    width: '100%',
                    maxWidth: '1200px',
                    height: '500px',
                    borderRadius: '20px',
                    padding: '20px',
                    backdropFilter: 'blur(12px)',
                    background: 'rgba(15, 23, 42, 0.6)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.6)'
                }}
            >
                <ResponsiveContainer>
                    <AreaChart data={formattedData}>
                        
                        <defs>
                            <linearGradient id="colorTasks" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#6366f1" stopOpacity={0.9} />
                                <stop offset="100%" stopColor="#6366f1" stopOpacity={0} />
                            </linearGradient>
                        </defs>

                        <CartesianGrid
                            stroke="rgba(148,163,184,0.1)"
                            strokeDasharray="4 4"
                        />

                        <XAxis
                            dataKey="name"
                            stroke="#94a3b8"
                            tick={{ fill: '#cbd5f5', fontSize: 12 }}
                            axisLine={false}
                            tickLine={false}
                        />

                        <YAxis
                            domain={[0, 1]}
                            stroke="#94a3b8"
                            tick={{ fill: '#cbd5f5', fontSize: 12 }}
                            axisLine={false}
                            tickLine={false}
                        />

                        <Tooltip
                            cursor={{ stroke: '#6366f1', strokeWidth: 1 }}
                            contentStyle={{
                                background: 'rgba(15,23,42,0.9)',
                                border: '1px solid rgba(99,102,241,0.3)',
                                borderRadius: '10px',
                                color: '#fff',
                                backdropFilter: 'blur(6px)'
                            }}
                            labelStyle={{ color: '#a5b4fc' }}
                        />

                        <Area
                            type="monotone"
                            dataKey="value"
                            stroke="#818cf8"
                            strokeWidth={3}
                            fill="url(#colorTasks)"
                            animationDuration={800}
                            dot={{ r: 4, stroke: '#818cf8', strokeWidth: 2 }}
                            activeDot={{ r: 6 }}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export { SimpleScatterChart };