import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { useBudget } from '../../Hooks/useBudget';
import { getCategoryMeta } from '../../Utils/categories';
import { formatCurrency } from "../../Utils/calculations";
import styles from './SpendingChart.module.css';

function SpendingChart() {
    const { spendingByCategory } = useBudget();

    if (spendingByCategory.lenght === 0) {
        return (
            <div className={styles.card}>
                <h3 className={styles.title}>Spending Breakdown</h3>
                <p className={styles.empty}>No expenses yet</p>
            </div>
        );
    }

    return (
        <div className={styles.card}>
            <h3 className={styles.title}>Spending Breakdown</h3>

            <div className={styles.chartWrapper}>
                <ResponsiveContainer width= "100%" height={180}>
                    <PieChart>
                        <Pie
                            data={spendingByCategory}
                            cx="50%"
                            cy="50%"
                            innerRadius={52}
                            outerRadius={80}
                            paddingAngle={3}
                            dataKey="value"
                        >
                            {spendingByCategory.map((entry) => (
                                <Cell
                                key={entry.name}
                                fill={getCategoryMeta(entry.name).color}
                                ></Cell>
                            ))}
                        </Pie>
                        <Tooltip
                            formatter={(value) => formatCurrency(value)}
                        ></Tooltip>
                    </PieChart>
                </ResponsiveContainer>
            </div>

            <div className={styles.legend}>
                {spendingByCategory.map((entry) => {
                    const meta = getCategoryMeta(entry.name);
                    return (
                        <div key={entry.name} className={styles.legendItem}>
                            <span
                                className={styles.legendDot}
                                style={{ background: meta.color }}
                            ></span>
                            <span className={styles.legendName}>{entry.name}</span>
                            <span className={styles.legendValue}>
                                {formatCurrency(entry.value)}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default SpendingChart;