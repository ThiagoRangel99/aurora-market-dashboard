const filterState = resetFilterState();

function populateFilters() {
  const periodFilter = document.querySelector('#period-filter');
  MONTHS.forEach((month) => periodFilter.add(new Option(month.label, month.value)));
  const categoryFilter = document.querySelector('#category-filter');
  CATEGORIES.forEach((category) => categoryFilter.add(new Option(category, category)));
}

function updateKpis(sales) {
  const metrics = calculateMetrics(sales);
  document.querySelector('#kpi-revenue').textContent = formatCurrency(metrics.revenue);
  document.querySelector('#kpi-volume').textContent = formatInteger(metrics.volume);
  document.querySelector('#kpi-average').textContent = formatCurrency(metrics.average);
  document.querySelector('#kpi-categories').textContent = formatInteger(metrics.categoryCount);
  document.querySelector('#result-count').textContent = `${formatInteger(metrics.volume)} ${metrics.volume === 1 ? 'venda encontrada' : 'vendas encontradas'}`;
}

function updateTable(sales) {
  const tableBody = document.querySelector('#sales-table-body');
  const empty = document.querySelector('#table-empty');
  tableBody.innerHTML = '';
  empty.hidden = sales.length > 0;
  sales.forEach((sale) => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${formatDate(sale.date)}</td><td>${sale.product}</td><td>${sale.category}</td><td class="numeric">${formatCurrency(sale.value)}</td>`;
    tableBody.appendChild(row);
  });
}

function refreshDashboard() {
  const filteredSales = filterSales(SALES_DATA, filterState);
  updateKpis(filteredSales);
  updateTable(filteredSales);
  renderCharts(filteredSales, filterState.view);
}

function bindEvents() {
  document.querySelector('#period-filter').addEventListener('change', (event) => { filterState.month = event.target.value; refreshDashboard(); });
  document.querySelector('#category-filter').addEventListener('change', (event) => { filterState.category = event.target.value; refreshDashboard(); });
  document.querySelector('#view-filter').addEventListener('change', (event) => { filterState.view = event.target.value; refreshDashboard(); });
  document.querySelector('#clear-filters').addEventListener('click', () => {
    Object.assign(filterState, resetFilterState());
    document.querySelector('#period-filter').value = filterState.month;
    document.querySelector('#category-filter').value = filterState.category;
    document.querySelector('#view-filter').value = filterState.view;
    refreshDashboard();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  populateFilters();
  bindEvents();
  refreshDashboard();
});
