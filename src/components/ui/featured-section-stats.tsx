"use client";

import { useEffect, useState } from "react";
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
    <div className="rounded-2xl border border-white/10 bg-[#131d2c]/95 px-4 py-3 shadow-xl backdrop-blur-sm">
      <p className="mb-1 font-serif text-sm text-white/55">{label}</p>
      {payload.map((entry) => (
        <p
          key={entry.dataKey}
          className="font-serif text-base"
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
  const [isChartReady, setIsChartReady] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setIsChartReady(true);
    });

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <motion.section
      className="mx-auto w-full max-w-7xl px-8 py-24 md:px-16 lg:px-28"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div>
        <motion.h3
          className="mb-4 font-serif text-4xl text-white md:text-5xl lg:text-6xl"
          variants={itemVariants}
        >
          {title}
        </motion.h3>
        <motion.div
          className="h-px w-16 bg-[#cca885]/40 mb-4"
          variants={itemVariants}
        />
        <motion.p
          className="mb-12 max-w-3xl font-serif text-lg leading-relaxed text-white/55 md:text-xl"
          variants={itemVariants}
        >
          {subtitle}
        </motion.p>

        <motion.div
          className="mb-12 grid grid-cols-2 gap-5 sm:grid-cols-4"
          variants={itemVariants}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm md:p-7"
            >
              <p className="font-serif text-5xl font-semibold text-white md:text-6xl">
                {stat.value}
              </p>
              <p className="mt-2 font-serif text-base text-[#cca885] md:text-lg">
                {stat.label}
              </p>
              {stat.sub && (
                <p className="mt-1 font-serif text-base text-white/35">
                  {stat.sub}
                </p>
              )}
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="h-[340px] w-full rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm md:h-[410px] md:p-8"
        variants={itemVariants}
      >
        <div className="mb-5 flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-[2px] bg-[#cca885]" />
            <span className="font-serif text-sm text-white/55">
              Deepblue Fund
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-[2px] bg-[#78abaf]" />
            <span className="font-serif text-sm text-white/55">
              Market Benchmark
            </span>
          </div>
        </div>
        <div className="h-[85%] min-h-[240px] w-full min-w-0">
          {isChartReady ? (
            <ResponsiveContainer
              width="100%"
              height="100%"
              minWidth={0}
              minHeight={240}
            >
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
                    fontSize: 13,
                  }}
                  axisLine={{ stroke: "rgba(255,255,255,0.1)" }}
                  tickLine={false}
                />
                <YAxis
                  tick={{
                    fill: "rgba(255,255,255,0.4)",
                    fontFamily: "Cormorant Garamond, serif",
                    fontSize: 13,
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
          ) : (
            <div className="h-full w-full rounded-[1.5rem] bg-white/[0.02]" />
          )}
        </div>
      </motion.div>
    </motion.section>
  );
}

export default FeaturedSectionStats;
