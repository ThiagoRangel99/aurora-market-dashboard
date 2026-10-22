// Os filtros são mantidos em um único objeto para que toda a interface use o mesmo recorte.
function filterSales(sales, state) {
  return sales.filter((sale) => {
    const matchesMonth = state.month === 'all' || sale.date.slice(5, 7) === state.month;
    const matchesCategory = state.category === 'all' || sale.category === state.category;
    return matchesMonth && matchesCategory;
  });
}

function resetFilterState() { return { month: 'all', category: 'all', view: 'revenue' }; }
