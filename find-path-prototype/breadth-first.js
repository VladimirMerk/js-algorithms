/* eslint-disable comma-dangle */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-use-before-define */
{
  const mainGrid = document.getElementById('mainGrid');
  const maze = [
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  const player = [1, 1];
  const target = [1, 7];
  const enemy = [9, 9];

  let cellElementsGrid = [];

  let n = 0;
  calculate((n += 1));
  setInterval(() => {
    calculate((n += 1));
  }, 1000);

  function redrawMaze() {
    mainGrid.innerHTML = '';
    cellElementsGrid = maze.reduce((cellArray, row) => {
      const rowCellsElements = row.reduce((cells, cell) => {
        const cellElement = createDiv(
          'cell',
          cell === 1 ? 'wall' : undefined,
          cell > 1 ? 'wood' : undefined
        );
        cells.push(cellElement);
        return cells;
      }, []);
      const rowElement = createDiv('row');
      rowElement.append(...rowCellsElements);
      mainGrid.append(rowElement);
      cellArray.push(rowCellsElements);
      return cellArray;
    }, []);
    getCellElement(player).classList.add('player');
    getCellElement(enemy).classList.add('enemy');
    getCellElement(target).classList.add('target');
  }

  function getCellElement([x = 0, y = 0] = []) {
    return cellElementsGrid[x][y];
  }
  function getCell([x = 0, y = 0] = [], ignore = []) {
    return !ignore.some(
      ([ignoreX, ignoreY]) => ignoreX === x && ignoreY === y
    ) && maze[x]
      ? maze[x][y]
      : undefined;
  }

  function calculate(step = 1) {
    moveEnemy(step);
    redrawMaze();

    // Find path
    const visited = {};
    const queue = [
      {
        x: player[0],
        y: player[1],
        deep: -1,
        parentDeep: -1,
      },
    ];
    for (const point of queue) {
      visited[`${point.x}:${point.y}`] = {
        deep: point.parentDeep + 1,
        parent: point.parent,
      };
      if (point.x === target[0] && point.y === target[1]) {
        break;
      }
      queue.push(
        ...expansion(
          {
            x: point.x,
            y: point.y,
            deep: visited[`${point.x}:${point.y}`].deep,
          },
          visited
        )
      );
    }
    for (const point of getPath(visited)) {
      cellElementsGrid[point.x][point.y].dataset.path = 1;
    }

    function getPath(visitedPoints) {
      let key = Object.keys(visitedPoints).reverse()[0];
      const result = [];
      while (key != null) {
        const [x, y] = key.split(':');
        result.push({ x, y });
        key = visitedPoints[key].parent;
      }
      return result;
    }

    function expansion(mainPoint, visitedPoints) {
      const points = getAroundPoints(mainPoint);
      const result = points.reduce((preparedPoints, point) => {
        const cell = getCell([point.x, point.y], [enemy]);
        const key = `${point.x}:${point.y}`;

        if (cell !== 0 || visitedPoints[key] != null) return preparedPoints;

        preparedPoints.push({
          ...point,
          parentDeep: mainPoint.deep,
          parent: `${mainPoint.x}:${mainPoint.y}`,
        });
        return preparedPoints;
      }, []);
      return result;
    }
  }

  function getAroundPoints(point) {
    return [
      { x: point.x - 1, y: point.y },
      { x: point.x + 1, y: point.y },
      { x: point.x, y: point.y - 1 },
      { x: point.x, y: point.y + 1 },
    ];
  }

  function moveEnemy(step) {
    if (step % 5 === 0 || step % 10 === 0) return;
    if (step % 5 < 5 && step % 10 < 5) {
      enemy[0] -= 1;
      enemy[1] -= 1;
    } else if (step % 10 >= 5) {
      enemy[0] += 1;
      enemy[1] += 1;
    }
  }

  function createDiv(...names) {
    const element = document.createElement('div');
    names.forEach((name) => (name ? element.classList.add(name) : null));
    return element;
  }
}
