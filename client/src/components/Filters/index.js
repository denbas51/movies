import * as React from "react"
import TextField from "@mui/material/TextField"
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete"

const filterOptions = createFilterOptions({
  matchFrom: "start",
  stringify: (option) => option.title,
})

function Filters({ results }) {
  return (
    <Autocomplete
      id="filter-demo"
      options={results}
      getOptionLabel={(option) => option.title}
      filterOptions={filterOptions}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Custom filter"
          onChange={(e) => e.target.value}
        />
      )}
    />
  )
}

export default Filters
