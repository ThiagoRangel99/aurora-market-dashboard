// Funções puras de análise: recebem registros e devolvem resultados calculados.
const currencyFormatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
const integerFormatter = new Intl.NumberFormat('pt-BR');
const dateFormatter = new Intl.DateTimeFormat('pt-BR', { timeZone: 'UTC' });

function calculateMetrics(sales) {
  const revenue = sales.reduce((total, sale) => total + sale.value, 0);
  const volume = sales.length;
  const categories = new Set(sales.map((sale) => sale.category));
  return { revenue, volume, average: volume ? revenue / volume : 0, categoryCount: categories.size };
}

function groupByMonth(sales) {
  return MONTHS.map((month) => ({
    label: month.label.slice(0, 3),
    value: sales.filter((sale) => sale.date.slice(5, 7) === month.value).reduce((sum, sale) => sum + sale.value, 0),
    volume: sales.filter((sale) => sale.date.slice(5, 7) === month.value).length
  }));
}

function groupByCategory(sales) {
  return CATEGORIES.map((category) => ({
    label: category,
    value: sales.filter((sale) => sale.category === category).reduce((sum, sale) => sum + sale.value, 0),
    volume: sales.filter((sale) => sale.category === category).length
  })).filter((item) => item.value > 0 || item.volume > 0);
}

function formatCurrency(value) { return currencyFormatter.format(value); }
function formatInteger(value) { return integerFormatter.format(value); }
function formatDate(isoDate) { return dateFormatter.format(new Date(`${isoDate}T00:00:00Z`)); }
