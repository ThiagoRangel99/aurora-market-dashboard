let monthlyChart = null;
let categoryChart = null;

// A paleta é visual; os valores continuam vindo de metrics.js e da base filtrada.
const chartPalette = { cyan: '#4bd4e8', cyanFill: 'rgba(75, 212, 232, .14)', gold: '#d2a851', grid: 'rgba(135, 184, 204, .14)', text: '#7e9aa7', surface: '#0b1d2d' };

function chartMetric(view) {
  return view === 'revenue' ? { label: 'Faturamento', axis: 'R$' } : { label: 'Quantidade de vendas', axis: 'vendas' };
}

function formatChartValue(value, view) { return view === 'revenue' ? formatCurrency(value) : formatInteger(value); }

function renderCharts(sales, view) {
  const metric = chartMetric(view);
  const monthly = groupByMonth(sales);
  const categories = groupByCategory(sales);
  const hasMonthlyData = monthly.some((item) => item.value > 0 || item.volume > 0);
  const hasCategoryData = categories.length > 0;

  document.querySelector('#trend-caption').textContent = metric.label;
  document.querySelector('#category-caption').textContent = metric.label;
  toggleChartState('monthly', hasMonthlyData);
  toggleChartState('category', hasCategoryData);

  if (monthlyChart) monthlyChart.destroy();
  if (categoryChart) categoryChart.destroy();
  if (!hasMonthlyData || !hasCategoryData) return;

  const selectedMonthlyValues = monthly.map((item) => view === 'revenue' ? item.value : item.volume);
  const selectedCategoryValues = categories.map((item) => view === 'revenue' ? item.value : item.volume);
  const commonOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 350 },
    plugins: {
      legend: { display: false },
      tooltip: { backgroundColor: '#071827', borderColor: 'rgba(75,212,232,.4)', borderWidth: 1, titleColor: '#e6f1f4', bodyColor: '#b8d1d7', padding: 10, callbacks: { label: (context) => ` ${formatChartValue(context.raw, view)}` } }
    },
    scales: {
      x: { grid: { display: false }, ticks: { color: chartPalette.text, font: { size: 10 } } },
      y: { beginAtZero: true, grid: { color: chartPalette.grid }, border: { display: false }, ticks: { color: chartPalette.text, font: { size: 10 }, callback: (value) => view === 'revenue' ? `R$ ${(value / 1000).toFixed(1)}k` : value } }
    }
  };

  monthlyChart = new Chart(document.querySelector('#monthly-chart'), {
    type: 'line',
    data: { labels: monthly.map((item) => item.label), datasets: [{ data: selectedMonthlyValues, borderColor: chartPalette.cyan, backgroundColor: chartPalette.cyanFill, fill: true, tension: .35, borderWidth: 2, pointRadius: 2.5, pointHoverRadius: 5, pointBackgroundColor: chartPalette.cyan, pointBorderColor: chartPalette.surface }] },
    options: commonOptions
  });

  categoryChart = new Chart(document.querySelector('#category-chart'), {
    type: 'bar',
    data: { labels: categories.map((item) => item.label), datasets: [{ data: selectedCategoryValues, backgroundColor: [chartPalette.cyan, '#2c92a5', '#246c7d', chartPalette.gold], borderRadius: 1, maxBarThickness: 30 }] },
    options: { ...commonOptions, scales: { ...commonOptions.scales, x: { ...commonOptions.scales.x, ticks: { ...commonOptions.scales.x.ticks, maxRotation: 0, minRotation: 0 } } } }
  });
}

function toggleChartState(name, hasData) {
  document.querySelector(`#${name}-chart`).hidden = !hasData;
  document.querySelector(`#${name}-empty`).hidden = hasData;
}
