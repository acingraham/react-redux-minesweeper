export const toThreeDigits = num => {
  return (num < 10 ? '00' + num : (num < 100 ? '0' + num : num)) 
}

export const getGridLayoutUtil = settings => {
  let layout = []
  for (let i = 0; i < settings.rowCount; i++) {
    let row = []
    layout.push(row)
    for (let j = 0; j < settings.colCount; j++) {
      row.push((i * settings.rowCount) + j)
    }
  }
  return layout
}

export const getAdjacentCellIds = (grid, origin) => {
  let ids = []
  for (let i = -1; i < 2; i++) {
    let row = grid[origin.y + i]
    if (row === undefined) continue
    for (let j = -1; j < 2; j++) {
      let id = row[origin.x + j]
      if (id === undefined 
        || (i === 0 && j === 0)) {
        continue
      }
      ids.push(id)
    }
  }
  return ids
}