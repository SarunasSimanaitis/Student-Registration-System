function StudentFilters({ filters, onFilterChange, onClearFilters }) {
  return (
    <section className="card" aria-labelledby="filters-title">
      <h2 id="filters-title">Filtravimas</h2>

      <form>
        <div className="form-group">
          <label htmlFor="search">Paieška pagal vardą arba pavardę</label>
          <input
            id="search"
            name="search"
            type="text"
            value={filters.search}
            onChange={onFilterChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="courseFilter">Filtravimas pagal kursą</label>
          <select
            id="courseFilter"
            name="course"
            value={filters.course}
            onChange={onFilterChange}
          >
            <option value="">Visi kursai</option>
            <option value="1">1 kursas</option>
            <option value="2">2 kursas</option>
            <option value="3">3 kursas</option>
            <option value="4">4 kursas</option>
          </select>
        </div>

        <button type="button" onClick={onClearFilters}>
          Išvalyti filtrus
        </button>
      </form>
    </section>
  );
}

export default StudentFilters;