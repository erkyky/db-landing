"use client";

import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { motion } from "framer-motion";

interface StatItem {
  value: string;
  label: string;
  sub?: string;
}

interface ChartDataPoint {
  period: string;
  value: number;
  benchmark?: number;
}

interface FeaturedSectionStatsProps {
  title?: string;
  subtitle?: string;
  stats?: StatItem[];
  chartData?: ChartDataPoint[];
}

const defaultStats: StatItem[] = [
  { value: "14-16%", label: "Target Gross IRR", sub: "10-12% Net" },
  { value: "1.6-1.8x", label: "Equity Multiple", sub: "Target" },
  { value: "$30M", label: "Fund Size", sub: "Target Equity" },
  { value: "3+1+1", label: "Fund Term", sub: "Years" },
];

const defaultChartData: ChartDataPoint[] = [
  { period: "Entry", value: 0, benchmark: 0 },
  { period: "Year 1", value: 8, benchmark: 5 },
  { period: "Year 2", value: 11, benchmark: 6.5 },
  { period: "Year 3", value: 14, benchmark: 7 },
  { period: "Year 4", value: 15.5, benchmark: 7.5 },
  { period: "Year 5", value: 16, benchmark: 8 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const CustomTooltip = ({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: Array<{ value: number; dataKey: string }>;
  label?: string;
}) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-xl border border-white/10 bg-[#131d2c] px-4 py-3 shadow-xl">
      <p className="font-serif text-xs text-white/50 mb-1">{label}</p>
      {payload.map((entry) => (
        <p
          key={entry.dataKey}
          className="font-serif text-sm"
          style={{
            color: entry.dataKey === "value" ? "#cca885" : "#78abaf",
          }}
        >
          {entry.dataKey === "value" ? "Fund" : "Benchmark"}: {entry.value}%
        </p>
      ))}
    </div>
  );
};

export function FeaturedSectionStats({
  title = "Projected Fund Performance",
  subtitle = "Target returns across the fund lifecycle, benchmarked against comparable market indices.",
  stats = defaultStats,
  chartData = defaultChartData,
}: FeaturedSectionStatsProps) {
  return (
    <motion.section
      className="w-full max-w-7xl mx-auto py-20 px-8 md:px-16 lg:px-28"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div>
        <motion.h3
          className="font-serif text-2xl md:text-3xl text-white mb-4"
          variants={itemVariants}
        >
          {title}
        </motion.h3>
        <motion.div
          className="h-px w-16 bg-[#cca885]/40 mb-4"
          variants={itemVariants}
        />
        <motion.p
          className="font-serif text-sm text-white/40 mb-12 max-w-xl"
          variants={itemVariants}
        >
          {subtitle}
        </motion.p>

        {/* Stats grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12"
          variants={itemVariants}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="border border-white/10 rounded-2xl p-6 backdrop-blur-sm bg-white/[0.02]"
            >
              <p className="font-serif text-3xl font-semibold text-white">
                {stat.value}
              </p>
              <p className="font-serif text-sm text-[#cca885] mt-1">
                {stat.label}
              </p>
              {stat.sub && (
                <p className="font-serif text-xs text-white/30 mt-1">
                  {stat.sub}
                </p>
              )}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Area Chart */}
      <motion.div
        className="w-full h-[300px] border border-white/10 rounded-2xl p-6 backdrop-blur-sm bg-white/[0.02]"
        variants={itemVariants}
      >
        <div className="flex items-center gap-6 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-[2px] bg-[#cca885]" />
            <span className="font-serif text-xs text-white/50">
              Deepblue Fund
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-[2px] bg-[#78abaf]" />
            <span className="font-serif text-xs text-white/50">
              Market Benchmark
            </span>
          </div>
        </div>
        <ResponsiveContainer width="100%" height="85%">
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="colorGold" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#cca885" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#cca885" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorTeal" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#78abaf" stopOpacity={0.15} />
                <stop offset="95%" stopColor="#78abaf" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="rgba(255,255,255,0.05)"
              vertical={false}
            />
            <XAxis
              dataKey="period"
              tick={{
                fill: "rgba(255,255,255,0.4)",
                fontFamily: "Cormorant Garamond, serif",
                fontSize: 12,
              }}
              axisLine={{ stroke: "rgba(255,255,255,0.1)" }}
              tickLine={false}
            />
            <YAxis
              tick={{
                fill: "rgba(255,255,255,0.4)",
                fontFamily: "Cormorant Garamond, serif",
                fontSize: 12,
              }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v: number) => `${v}%`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="benchmark"
              stroke="#78abaf"
              strokeWidth={1.5}
              fillOpacity={1}
              fill="url(#colorTeal)"
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#cca885"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorGold)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </motion.div>
    </motion.section>
  );
}

export default FeaturedSectionStats;
