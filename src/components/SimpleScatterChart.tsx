import type { tasksTye } from '../hooks/usegettasks';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

type Props = {
    data: tasksTye[];
    title: string
};

const SimpleScatterChart = ({ data, title }: Props) => {
    const formattedData = data.map(task => ({
        id: task.id,
        value: task.completed ? 1 : 0
    }));

    return (
        <>
            <h1 className="text-center text-black text-4xl font-extrabold mb-8 drop-shadow-stone-600">
                {title}
            </h1>

            <div
                style={{
                    width: '100%',
                    height: '70vh',
                    background: '#0f172a',
                    borderRadius: '16px',
                    padding: '16px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                }}
            >

                <ResponsiveContainer>
                    <AreaChart data={formattedData}>


                        <defs>
                            <linearGradient id="colorTasks" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                            </linearGradient>
                        </defs>

                        <CartesianGrid stroke="#334155" strokeDasharray="3 3" />

                        <XAxis
                            dataKey="id"
                            stroke="#94a3b8"
                            tick={{ fill: '#94a3b8', fontSize: 12 }}
                        />

                        <YAxis
                            domain={[0, 1]}
                            stroke="#94a3b8"
                            tick={{ fill: '#94a3b8', fontSize: 12 }}
                        />

                        <Tooltip
                            contentStyle={{
                                backgroundColor: '#1e293b',
                                border: 'none',
                                borderRadius: '8px',
                                color: '#fff'
                            }}
                        />

                        <Area
                            type="monotone"
                            dataKey="value"
                            stroke="#6366f1"
                            fillOpacity={1}
                            fill="url(#colorTasks)"
                            strokeWidth={2}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

        </>
    );
};

export { SimpleScatterChart };